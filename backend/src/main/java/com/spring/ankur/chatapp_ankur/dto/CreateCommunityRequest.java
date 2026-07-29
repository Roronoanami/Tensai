package com.spring.ankur.chatapp_ankur.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateCommunityRequest {

    @NotBlank(message = "Community ID is required")
    private String communityId;

    @NotBlank(message = "Community name is required")
    private String communityName;

    private String description;
    private String rules;

    private boolean privateCommunity;

    // Required only if privateCommunity = true
    private String password;

    @Min(value = 20, message = "Minimum members is 20")
    @Max(value = 1000, message = "Maximum members is 1000")
    private int maxMembers;
}