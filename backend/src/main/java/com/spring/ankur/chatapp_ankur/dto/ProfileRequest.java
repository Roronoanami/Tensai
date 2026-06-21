package com.spring.ankur.chatapp_ankur.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class ProfileRequest {

    // ✅ FILES (Cloudinary ready)
    private MultipartFile profileImage;
    private MultipartFile coverImage;

    // TEXT FIELDS
    private String firstName;
    private String lastName;
    private String gender;

    private String headline;
    private String about;

    private String college;
    private String degree;
    private boolean currentlyStudying;

    private String companyName;
    private String position;
    private boolean currentlyWorking;

    private String country;
    private String state;
    private String city;

    private String phoneNumber;
    private String linkedinUrl;
    private String instagramUrl;

    private String websiteUrl;
    private String portfolioUrl;
}