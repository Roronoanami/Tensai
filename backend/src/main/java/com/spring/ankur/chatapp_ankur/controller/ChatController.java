


// package com.spring.ankur.chatapp_ankur.controller;


// import com.spring.ankur.chatapp_ankur.entities.Message;
// import com.spring.ankur.chatapp_ankur.entities.Room;
// import com.spring.ankur.chatapp_ankur.repositories.RoomRepository;

// import java.time.LocalDateTime;
// import java.util.ArrayList;

// import org.springframework.messaging.handler.annotation.DestinationVariable;
// import org.springframework.messaging.handler.annotation.MessageMapping;
// import org.springframework.messaging.handler.annotation.Payload;
// import org.springframework.messaging.simp.SimpMessagingTemplate;
// import org.springframework.stereotype.Controller;

// @Controller
// public class ChatController {

//     // Used to send messages to subscribed clients
//     private final SimpMessagingTemplate messagingTemplate;

//     // Used to access MongoDB rooms collection
//     private final RoomRepository roomRepository;

//     public ChatController(
//             SimpMessagingTemplate messagingTemplate,
//             RoomRepository roomRepository) {

//         this.messagingTemplate = messagingTemplate;
//         this.roomRepository = roomRepository;
//     }

//     // =====================================================
//     // RECEIVE MESSAGE FROM FRONTEND
//     // =====================================================
//     //
//     // Frontend sends:
//     // /app/sendMessage/{roomId}
//     //
//     // Example:
//     // /app/sendMessage/general
//     //
//     // Subscribers listen on:
//     // /topic/general
//     //
//     @MessageMapping("/sendMessage/{roomId}")
//     public void sendMessage(
//             @DestinationVariable String roomId,
//             @Payload Message request) {

//         System.out.println("🔥 RECEIVED MESSAGE: " + request.getContent());

//         // Find room from MongoDB
//         Room room = roomRepository.findByRoomId(roomId);

//         // Create room automatically if it doesn't exist
//         if (room == null) {

//             room = new Room();

//             room.setRoomId(roomId);

//             room.setName(roomId);

//             room.setMessages(new ArrayList<>());

//             room.setParticipants(new ArrayList<>());
//         }

//         // =====================================================
//         // Convert DTO -> Entity
//         // =====================================================

//         Message message = new Message();

//         message.setSender(request.getSender());

//         message.setContent(request.getContent());

//         message.setTimeStamp(LocalDateTime.now());

//         // Save message inside room
//         room.getMessages().add(message);

//         roomRepository.save(room);

//         // =====================================================
//         // Broadcast message to subscribers
//         // =====================================================

//         messagingTemplate.convertAndSend(
//                 "/topic/" + roomId,
//                 message
//         );

//         System.out.println("📤 SENT TO TOPIC: /topic/" + roomId);
//     }
// }


package com.spring.ankur.chatapp_ankur.controller;

import com.spring.ankur.chatapp_ankur.dto.MessageRequest;
import com.spring.ankur.chatapp_ankur.entities.Message;
import com.spring.ankur.chatapp_ankur.entities.Room;
import com.spring.ankur.chatapp_ankur.repositories.RoomRepository;

import java.time.LocalDateTime;
import java.util.ArrayList;

import org.springframework.messaging.handler.annotation.*;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    private final SimpMessagingTemplate messagingTemplate;
    private final RoomRepository roomRepository;

    public ChatController(SimpMessagingTemplate messagingTemplate,
                          RoomRepository roomRepository) {
        this.messagingTemplate = messagingTemplate;
        this.roomRepository = roomRepository;
    }

    @MessageMapping("/sendMessage/{roomId}")
    public void sendMessage(
            @DestinationVariable String roomId,
            @Payload MessageRequest request) {

        System.out.println("🔥 RECEIVED: " + request.getContent());

        Room room = roomRepository.findByRoomId(roomId);

        // create room if not exists
        if (room == null) {
            room = new Room();
            room.setRoomId(roomId);
            room.setName(roomId);
            room.setMessages(new ArrayList<>());
            room.setParticipants(new ArrayList<>());
        }

        // convert DTO → Entity
        Message message = new Message();
        message.setSender(request.getSender());
        message.setContent(request.getContent());
        message.setTimeStamp(LocalDateTime.now());

        room.getMessages().add(message);
        roomRepository.save(room);

        messagingTemplate.convertAndSend("/topic/" + roomId, message);

        System.out.println("📤 SENT TO /topic/" + roomId);
    }
}