// package com.spring.ankur.chatapp_ankur.controller;

// import java.util.List;

// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import com.spring.ankur.chatapp_ankur.entities.Room;
// import com.spring.ankur.chatapp_ankur.service.RoomService;

// @RestController
// // Base URL for all room-related APIs
// @RequestMapping("/api/v1/rooms")
// public class RoomController {

//     /*
//      * Controller should talk to Service.
//      * Controller should NOT directly talk to MongoDB.
//      */
//     private final RoomService roomService;

//     // Constructor Injection
//     public RoomController(RoomService roomService) {
//         this.roomService = roomService;
//     }

//     /*
//      * API:
//      * POST /api/v1/rooms
//      *
//      * PURPOSE:
//      * Create a new room.
//      *
//      * REQUEST BODY:
//      * {
//      *   "roomId":"java-room",
//      *   "name":"Java Developers",
//      *   "createdBy":"Ankur"
//      * }
//      */
//     @PostMapping
//     public ResponseEntity<?> createRoom(@RequestBody Room room) {

//         try {

//             // Call service layer
//             Room savedRoom = roomService.createRoom(room);

//             // HTTP 200 OK
//             return ResponseEntity.ok(savedRoom);

//         } catch (RuntimeException e) {

//             // HTTP 400 Bad Request
//             return ResponseEntity
//                     .badRequest()
//                     .body(e.getMessage());
//         }
//     }

//     /*
//      * API:
//      * GET /api/v1/rooms/{roomId}
//      *
//      * EXAMPLE:
//      * GET /api/v1/rooms/java-room
//      *
//      * Spring automatically extracts:
//      * roomId = "java-room"
//      */
//     @GetMapping("/{roomId}")
//     public ResponseEntity<?> getRoom(@PathVariable String roomId) {

//         try {

//             // Ask service to find room
//             Room room = roomService.getRoom(roomId);

//             // HTTP 200 OK
//             return ResponseEntity.ok(room);

//         } catch (RuntimeException e) {

//             // HTTP 400 Bad Request
//             return ResponseEntity
//                     .badRequest()
//                     .body(e.getMessage());
//         }
//     }
//     // ==========================================
// // GET MESSAGES OF A ROOM
// // ==========================================
// //
// // API:
// // GET /api/v1/rooms/{roomId}/messages
// //
// // Examples:
// //
// // GET /api/v1/rooms/java-room/messages
// //
// // GET /api/v1/rooms/java-room/messages?page=1&size=10
// //
// @GetMapping("/{roomId}/messages")
// public ResponseEntity<?> getMessages(

//         @PathVariable String roomId,

//         @RequestParam(
//                 value = "page",
//                 defaultValue = "0",
//                 required = false)
//         int page,

//         @RequestParam(
//                 value = "size",
//                 defaultValue = "20",
//                 required = false)
//         int size) {

//     try {

//         List<Message> messages =
//                 roomService.getMessages(
//                         roomId,
//                         page,
//                         size);

//         return ResponseEntity.ok(messages);

//     } catch (RuntimeException e) {

//         return ResponseEntity
//                 .badRequest()
//                 .body(e.getMessage());
//     }
// }
// }






package com.spring.ankur.chatapp_ankur.controller;
import com.spring.ankur.chatapp_ankur.dto.MessageRequest;
import com.spring.ankur.chatapp_ankur.entities.Room;
import com.spring.ankur.chatapp_ankur.entities.Message;
import com.spring.ankur.chatapp_ankur.service.RoomService;

import java.time.LocalDateTime;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/rooms")
public class RoomController {

    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @PostMapping
    public ResponseEntity<?> createRoom(@RequestBody Room room) {
        return ResponseEntity.ok(roomService.createRoom(room));
    }

    @GetMapping("/{roomId}")
    public ResponseEntity<?> getRoom(@PathVariable String roomId) {
        return ResponseEntity.ok(roomService.getRoom(roomId));
    }

    @PostMapping("/{roomId}/join")
    public ResponseEntity<?> joinRoom(
            @PathVariable String roomId,
            @RequestParam String user) {

        return ResponseEntity.ok(roomService.joinRoom(roomId, user));
    }

          @PostMapping("/{roomId}/messages")
public ResponseEntity<?> sendMessage(
        @PathVariable String roomId,
        @RequestBody MessageRequest request) {

    // convert DTO -> ENTITY
    Message message = new Message();
    message.setSender(request.getSender());
    message.setContent(request.getContent());
    message.setTimeStamp(LocalDateTime.now());

    // save using service (IMPORTANT)
    roomService.saveMessage(roomId, message);

    return ResponseEntity.ok("Message Saved");
}

    @GetMapping("/{roomId}/messages")
    public ResponseEntity<?> getMessages(
            @PathVariable String roomId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {

        return ResponseEntity.ok(
                roomService.getMessages(roomId, page, size)
        );
    }
}