package com.spring.ankur.chatapp_ankur.entities;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document(collection = "community_members")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommunityMember {

    @Id
    private String id;

    private String communityId;

    private String userId;

    private String username;

    // OWNER / MEMBER
    private String role;

    private Instant joinedAt;
}