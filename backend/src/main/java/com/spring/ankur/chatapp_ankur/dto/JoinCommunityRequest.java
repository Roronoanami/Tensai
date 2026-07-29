package com.spring.ankur.chatapp_ankur.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JoinCommunityRequest {

    @NotBlank(message = "Community ID is required")
    private String communityId;

    private String password;
}