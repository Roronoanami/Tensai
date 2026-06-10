// package com.spring.ankur.chatapp_ankur.service;

// import com.spring.ankur.chatapp_ankur.entities.Room;
// import com.spring.ankur.chatapp_ankur.entities.Message;
// import com.spring.ankur.chatapp_ankur.repositories.RoomRepository;

// import org.springframework.stereotype.Service;

// import java.time.LocalDateTime;
// import java.util.ArrayList;
// import java.util.List;

// @Service
// public class RoomService {

//     private final RoomRepository roomRepository;

//     public RoomService(RoomRepository roomRepository) {
//         this.roomRepository = roomRepository;
//     }

//     // =====================================================
//     // CREATE ROOM
//     // =====================================================
//     // Creates a new chat room.
//     // Also initializes participants and messages lists
//     // to avoid NullPointerException.
//     public Room createRoom(Room room) {

//         // Check if room already exists
//         if (roomRepository.findByRoomId(room.getRoomId()) != null) {
//             throw new RuntimeException("Room already exists");
//         }

//         // Set creation timestamp
//         room.setCreatedAt(LocalDateTime.now());

//         // Initialize participants list if null
//         if (room.getParticipants() == null) {
//             room.setParticipants(new ArrayList<>());
//         }

//         // Initialize messages list if null
//         if (room.getMessages() == null) {
//             room.setMessages(new ArrayList<>());
//         }

//         // Automatically add room creator as participant
//         if (room.getCreatedBy() != null &&
//                 !room.getParticipants().contains(room.getCreatedBy())) {

//             room.getParticipants().add(room.getCreatedBy());
//         }

//         return roomRepository.save(room);
//     }

//     // =====================================================
//     // GET ROOM
//     // =====================================================
//     // Core validation method.
//     // Used by many other methods.
//     public Room getRoom(String roomId) {

//         Room room = roomRepository.findByRoomId(roomId);

//         if (room == null) {
//             throw new RuntimeException("Room does not exist");
//         }

//         return room;
//     }

//     // =====================================================
//     // JOIN ROOM
//     // =====================================================
//     // Adds a user to participants list.
//     public Room joinRoom(String roomId, String user) {

//         Room room = getRoom(roomId);

//         if (room.getParticipants() == null) {
//             room.setParticipants(new ArrayList<>());
//         }

//         // Avoid duplicate participants
//         if (!room.getParticipants().contains(user)) {
//             room.getParticipants().add(user);
//         }

//         return roomRepository.save(room);
//     }

//     // =====================================================
//     // SAVE MESSAGE
//     // =====================================================
//     // Called when WebSocket receives a message.
//     // Saves message inside room document.
//     public void saveMessage(String roomId, Message message) {

//         Room room = getRoom(roomId);

//         if (room.getMessages() == null) {
//             room.setMessages(new ArrayList<>());
//         }

//         room.getMessages().add(message);

//         roomRepository.save(room);
//     }

//     // =====================================================
//     // GET MESSAGES WITH PAGINATION
//     // =====================================================
//     // Example:
//     //
//     // Page 0 => latest messages
//     // Page 1 => previous messages
//     // Page 2 => older messages
//     //
//     public List<Message> getMessages(String roomId,
//                                      int page,
//                                      int size) {

//         Room room = getRoom(roomId);

//         List<Message> messages = room.getMessages();

//         if (messages == null || messages.isEmpty()) {
//             return new ArrayList<>();
//         }

//         int totalMessages = messages.size();

//         // Calculate pagination indexes
//         int start = Math.max(
//                 0,
//                 totalMessages - ((page + 1) * size)
//         );

//         int end = Math.min(
//                 totalMessages,
//                 start + size
//         );

//         if (start >= end) {
//             return new ArrayList<>();
//         }

//         return messages.subList(start, end);
//     }
// }





package com.spring.ankur.chatapp_ankur.service;

import com.spring.ankur.chatapp_ankur.dto.MessageRequest;
import com.spring.ankur.chatapp_ankur.entities.Message;
import com.spring.ankur.chatapp_ankur.entities.Room;
import com.spring.ankur.chatapp_ankur.repositories.RoomRepository;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class RoomService {

    private final RoomRepository roomRepository;

    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    // =========================
    // CREATE ROOM
    // =========================
    public Room createRoom(Room room) {

        if (roomRepository.findByRoomId(room.getRoomId()) != null) {
            throw new RuntimeException("Room already exists");
        }

        room.setCreatedAt(LocalDateTime.now());

        if (room.getParticipants() == null) {
            room.setParticipants(new ArrayList<>());
        }

        if (room.getMessages() == null) {
            room.setMessages(new ArrayList<>());
        }

        return roomRepository.save(room);
    }

    // =========================
    // GET ROOM
    // =========================
    public Room getRoom(String roomId) {

        Room room = roomRepository.findByRoomId(roomId);

        if (room == null) {
            throw new RuntimeException("Room not found");
        }

        return room;
    }

    // =========================
    // JOIN ROOM
    // =========================
    public Room joinRoom(String roomId, String user) {

        Room room = getRoom(roomId);

        if (!room.getParticipants().contains(user)) {
            room.getParticipants().add(user);
        }

        return roomRepository.save(room);
    }

    // =========================
    // SAVE MESSAGE (FIXED)
    // =========================
             public void saveMessage(String roomId, Message message) {

    Room room = getRoom(roomId);

    if (room.getMessages() == null) {
        room.setMessages(new ArrayList<>());
    }

    room.getMessages().add(message);

    roomRepository.save(room);
}

    // =========================
    // GET MESSAGES (PAGINATION)
    // =========================
    public List<Message> getMessages(String roomId, int page, int size) {

        Room room = getRoom(roomId);

        List<Message> messages = room.getMessages();

        if (messages == null || messages.isEmpty()) {
            return new ArrayList<>();
        }

        int total = messages.size();

        int start = Math.max(0, total - (page + 1) * size);
        int end = Math.min(total, start + size);

        return messages.subList(start, end);
    }
}