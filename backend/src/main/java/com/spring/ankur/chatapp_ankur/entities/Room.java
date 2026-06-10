package com.spring.ankur.chatapp_ankur.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Document(collection = "rooms")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Room {

    @Id
    private String id;

    private String roomId;
    private String name;
    private String createdBy;
    private LocalDateTime createdAt;

    private List<String> participants = new ArrayList<>();

    // ✅ NOW USING ENTITY (NOT DTO)
    private List<Message> messages = new ArrayList<>();
}