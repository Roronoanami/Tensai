package com.spring.ankur.chatapp_ankur.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CommunityResponse {

    private String id;

    private String communityId;

    private String communityName;

    private String description;

    private String rules;

    private boolean privateCommunity;

    private String ownerUsername;

    private String communityImage;

    private int currentMembers;

    private int maxMembers;
}