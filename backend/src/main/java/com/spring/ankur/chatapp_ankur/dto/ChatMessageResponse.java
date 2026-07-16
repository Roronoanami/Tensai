package com.spring.ankur.chatapp_ankur.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Builder
public class ChatMessageResponse {

    private String id;

    private String roomId;

    private String senderUsername;

    private String receiverUsername;

    private String content;

    private Instant createdAt;

    private boolean read;

}