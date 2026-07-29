
package com.spring.ankur.chatapp_ankur.controller;

import com.spring.ankur.chatapp_ankur.dto.ChatMessageRequest;
import com.spring.ankur.chatapp_ankur.dto.ChatMessageResponse;
import com.spring.ankur.chatapp_ankur.dto.ChatRoomResponse;
import com.spring.ankur.chatapp_ankur.dto.ConversationResponse;
import com.spring.ankur.chatapp_ankur.service.ChatService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chat")
@RequiredArgsConstructor
public class ChatController {

    private final ChatService chatService;

    @PostMapping("/send")
    public ChatMessageResponse sendMessage(
            @Valid @RequestBody ChatMessageRequest request
    ) {
        return chatService.sendMessage(request);
    }

    @GetMapping("/history/{roomId}")
    public List<ChatMessageResponse> getChatHistory(
            @PathVariable String roomId
    ) {
        return chatService.getChatHistory(roomId);
    }

    @GetMapping("/room/{username}")
    public ChatRoomResponse getRoom(
            @PathVariable String username
    ) {
        return chatService.getRoomWithUser(username);
    }

    @GetMapping("/conversations")
    public List<ConversationResponse> getConversations() {
        return chatService.getConversations();
    }
}