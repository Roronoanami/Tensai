package com.spring.ankur.chatapp_ankur.dto;

import com.spring.ankur.chatapp_ankur.entities.MessageType;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class CommunityMessageResponse {

    private String id;

    private String communityId;

    private String senderId;

    private String senderUsername;

    private String senderProfileImage;

    private String message;

    private LocalDateTime sentAt;

    private boolean edited;

    private boolean deleted;

    private MessageType messageType;

}