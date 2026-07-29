package com.spring.ankur.chatapp_ankur.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document(collection = "communities")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Community {

    @Id
    private String id;

    // Unique community ID (used to join)
    private String communityId;

    // Display name
    private String communityName;

    // Optional description
    private String description;
    private String rules;
    // Public / Private
    private boolean privateCommunity;

    // Hashed password (only for private communities)
    private String password;

    // Owner
    private String ownerId;
    private String ownerUsername;

    // Community image
    private String communityImage;

    // Capacity
    private int maxMembers;
    private int currentMembers;

    private Instant createdAt;
}