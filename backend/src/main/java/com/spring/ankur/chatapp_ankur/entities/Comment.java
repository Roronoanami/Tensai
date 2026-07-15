package com.spring.ankur.chatapp_ankur.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "comments")
public class Comment {

    @Id
    private String id;

    private String activityId;

    private String userId;

    private String username;

    private String profileImage;

    private String content;

    private LocalDateTime createdAt;
}