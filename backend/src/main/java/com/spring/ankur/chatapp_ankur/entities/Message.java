package com.spring.ankur.chatapp_ankur.entities;

import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Message {

    private String sender;
    private String content;
    private LocalDateTime timeStamp;
}