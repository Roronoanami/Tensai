package com.spring.ankur.chatapp_ankur.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "activity")
public class Activity {

    @Id
    private String id;

    private String userId;
    private String username;

    private String type; // post, project, skill
    private String title;
    private String description;

    private String imageUrl;
    private String techStack;

    private LocalDateTime createdAt;
}