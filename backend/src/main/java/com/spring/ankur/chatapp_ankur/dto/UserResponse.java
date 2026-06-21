package com.spring.ankur.chatapp_ankur.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class UserResponse {

    private String id;
    private String username;
    private String email;
   
    private boolean online;
    private LocalDateTime lastSeen;
    private LocalDateTime createdAt;
}