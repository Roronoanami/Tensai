package com.spring.ankur.chatapp_ankur.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CommunityMemberResponse {

    private String userId;

    private String username;

    private String firstName;

    private String lastName;

    private String profileImage;

    private String role;
}