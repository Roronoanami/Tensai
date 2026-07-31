package com.spring.ankur.chatapp_ankur.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "community_messages")
public class CommunityMessage {

    @Id
    private String id;

    // Community
    private String communityId;

    // Sender
    private String senderId;
    private String senderUsername;
    private String senderProfileImage;

    // Message
    private String message;

    // Time
    private LocalDateTime sentAt;

    // Future Features
    @Builder.Default
    private boolean edited = false;

    @Builder.Default
    private boolean deleted = false;

    @Builder.Default
    private MessageType messageType = MessageType.TEXT;

}
