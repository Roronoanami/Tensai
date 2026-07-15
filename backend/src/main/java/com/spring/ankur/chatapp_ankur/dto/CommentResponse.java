package com.spring.ankur.chatapp_ankur.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class CommentResponse {

    private String id;

    private String username;

    private String profileImage;

    private String content;

    private LocalDateTime createdAt;
}