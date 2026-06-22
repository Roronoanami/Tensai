package com.spring.ankur.chatapp_ankur.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class ActivityResponse {

    private String id;
    private String userId;
    private String username;

    private String type;
    private String title;
    private String description;

    private String imageUrl;
    private String techStack;

    private LocalDateTime createdAt;
}