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
@Document(collection = "activity_likes")
public class ActivityLike {

    @Id
    private String id;

    private String activityId;

    private String userId;

    private LocalDateTime createdAt;


    public ActivityLike(String activityId, String userId) {
        this.activityId = activityId;
        this.userId = userId;
        this.createdAt = LocalDateTime.now();
    }
}





