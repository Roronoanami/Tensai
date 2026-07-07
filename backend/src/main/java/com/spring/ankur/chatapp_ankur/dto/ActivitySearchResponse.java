package com.spring.ankur.chatapp_ankur.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ActivitySearchResponse {

    private String id;

    private String userId;

    private String username;

    private String type;

    private String title;

    private String description;

    private String imageUrl;

    private String techStack;
}