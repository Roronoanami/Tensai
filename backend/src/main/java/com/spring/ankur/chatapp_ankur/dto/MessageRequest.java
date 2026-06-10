package com.spring.ankur.chatapp_ankur.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MessageRequest {

    // data coming from frontend
    private String sender;
    private String content;
}