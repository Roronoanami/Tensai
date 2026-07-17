package com.spring.ankur.chatapp_ankur.dto;

import lombok.Builder;
import lombok.Data;

import java.time.Instant;

@Data
@Builder
public class ConversationResponse {

    private String roomId;

    // Person you're chatting with
    private String username;

    private String profileImage;

    // Last message
    private String lastMessage;

    private Instant lastMessageTime;

    // Unread messages
    private long unreadCount;
}