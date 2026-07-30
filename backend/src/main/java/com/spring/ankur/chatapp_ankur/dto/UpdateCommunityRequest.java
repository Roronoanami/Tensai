package com.spring.ankur.chatapp_ankur.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UpdateCommunityRequest {

    private String communityName;

    private String communityImage;

    private Integer maxMembers;

    private String description;

    private String rules;
}