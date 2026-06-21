package com.spring.ankur.chatapp_ankur.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "profiles")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Profile {

    @Id
    private String id;

    // Profile owner
    private String userId;

    // Media
    private String profileImage;
    private String coverImage;

    // Basic Info
    private String firstName;
    private String lastName;
    private String gender;

    // About
    private String headline;
    private String about;

    // Education
    private String college;
    private String degree;
    private boolean currentlyStudying;

    // Experience
    private String companyName;
    private String position;
    private boolean currentlyWorking;

    // Location
    private String country;
    private String state;
    private String city;

    // Contact
    private String phoneNumber;
    private String linkedinUrl;
    private String instagramUrl;

    // Portfolio
    private String websiteUrl;
    private String portfolioUrl;
}