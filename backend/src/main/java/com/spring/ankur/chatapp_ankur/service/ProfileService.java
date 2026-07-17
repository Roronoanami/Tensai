// package com.spring.ankur.chatapp_ankur.service;

// import com.spring.ankur.chatapp_ankur.dto.ProfileRequest;
// import com.spring.ankur.chatapp_ankur.dto.ProfileResponse;
// import com.spring.ankur.chatapp_ankur.entities.Profile;
// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.repositories.ProfileRepository;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.stereotype.Service;

// @Service
// public class ProfileService {

//     private final ProfileRepository profileRepository;

//     public ProfileService(ProfileRepository profileRepository) {
//         this.profileRepository = profileRepository;
//     }


//     public ProfileResponse createOrUpdateProfile(
//         String userId,
//         ProfileRequest request
// ) {

//     Profile profile = profileRepository
//             .findByUserId(userId)
//             .orElse(new Profile());

//     profile.setUserId(userId);

//     // Profile Media
//     profile.setProfileImage(request.getProfileImage());
//     profile.setCoverImage(request.getCoverImage());

//     // Basic Information
//     profile.setFirstName(request.getFirstName());
//     profile.setLastName(request.getLastName());
//     profile.setGender(request.getGender());

//     // About
//     profile.setHeadline(request.getHeadline());
//     profile.setAbout(request.getAbout());

//     // Education
//     profile.setCollege(request.getCollege());
//     profile.setDegree(request.getDegree());
//     profile.setCurrentlyStudying(request.isCurrentlyStudying());

//     // Experience
//     profile.setCompanyName(request.getCompanyName());
//     profile.setPosition(request.getPosition());
//     profile.setCurrentlyWorking(request.isCurrentlyWorking());

//     // Location
//     profile.setCountry(request.getCountry());
//     profile.setState(request.getState());
//     profile.setCity(request.getCity());

//     // Contact
//     profile.setPhoneNumber(request.getPhoneNumber());
//     profile.setLinkedinUrl(request.getLinkedinUrl());
//     profile.setInstagramUrl(request.getInstagramUrl());

//     // Portfolio
//     profile.setWebsiteUrl(request.getWebsiteUrl());
//     profile.setPortfolioUrl(request.getPortfolioUrl());

//     Profile savedProfile = profileRepository.save(profile);

//     return mapToResponse(savedProfile);
// }
// private ProfileResponse mapToResponse(Profile profile) {

//     ProfileResponse response = new ProfileResponse();

//     response.setId(profile.getId());
//     response.setUserId(profile.getUserId());

//     // Media
//     response.setProfileImage(profile.getProfileImage());
//     response.setCoverImage(profile.getCoverImage());

//     // Basic Info
//     response.setFirstName(profile.getFirstName());
//     response.setLastName(profile.getLastName());
//     response.setGender(profile.getGender());

//     // About
//     response.setHeadline(profile.getHeadline());
//     response.setAbout(profile.getAbout());

//     // Education
//     response.setCollege(profile.getCollege());
//     response.setDegree(profile.getDegree());
//     response.setCurrentlyStudying(profile.isCurrentlyStudying());

//     // Experience
//     response.setCompanyName(profile.getCompanyName());
//     response.setPosition(profile.getPosition());
//     response.setCurrentlyWorking(profile.isCurrentlyWorking());

//     // Location
//     response.setCountry(profile.getCountry());
//     response.setState(profile.getState());
//     response.setCity(profile.getCity());

//     // Contact
//     response.setPhoneNumber(profile.getPhoneNumber());
//     response.setLinkedinUrl(profile.getLinkedinUrl());
//     response.setInstagramUrl(profile.getInstagramUrl());

//     // Portfolio
//     response.setWebsiteUrl(profile.getWebsiteUrl());
//     response.setPortfolioUrl(profile.getPortfolioUrl());

//     return response;
// }

// public ProfileResponse getProfileByUserId(String userId) {

//     Profile profile = profileRepository.findByUserId(userId)
//             .orElseThrow(() -> new RuntimeException("Profile not found"));

//     return mapToResponse(profile);
// }

// }



// frontend = backendn 


// package com.spring.ankur.chatapp_ankur.service;

// import com.spring.ankur.chatapp_ankur.dto.ProfileRequest;
// import com.spring.ankur.chatapp_ankur.dto.ProfileResponse;
// import com.spring.ankur.chatapp_ankur.entities.Profile;
// import com.spring.ankur.chatapp_ankur.repositories.ProfileRepository;
// import org.springframework.stereotype.Service;

// @Service
// public class ProfileService {

//     private final ProfileRepository profileRepository;

//     public ProfileService(ProfileRepository profileRepository) {
//         this.profileRepository = profileRepository;
//     }

//     public ProfileResponse createOrUpdateProfile(
//             String userId,
//             ProfileRequest request
//     ) {

//         Profile profile = profileRepository
//                 .findByUserId(userId)
//                 .orElse(new Profile());

//         profile.setUserId(userId);

//         // ========================
//         // SAFE STRING UPDATES
//         // (null + empty protection)
//         // ========================

//         if (request.getProfileImage() != null && !request.getProfileImage().isBlank())
//             profile.setProfileImage(request.getProfileImage());

//         if (request.getCoverImage() != null && !request.getCoverImage().isBlank())
//             profile.setCoverImage(request.getCoverImage());

//         if (request.getFirstName() != null && !request.getFirstName().isBlank())
//             profile.setFirstName(request.getFirstName());

//         if (request.getLastName() != null && !request.getLastName().isBlank())
//             profile.setLastName(request.getLastName());

//         if (request.getGender() != null && !request.getGender().isBlank())
//             profile.setGender(request.getGender());

//         if (request.getHeadline() != null && !request.getHeadline().isBlank())
//             profile.setHeadline(request.getHeadline());

//         if (request.getAbout() != null && !request.getAbout().isBlank())
//             profile.setAbout(request.getAbout());

//         if (request.getCollege() != null && !request.getCollege().isBlank())
//             profile.setCollege(request.getCollege());

//         if (request.getDegree() != null && !request.getDegree().isBlank())
//             profile.setDegree(request.getDegree());

//         if (request.getCompanyName() != null && !request.getCompanyName().isBlank())
//             profile.setCompanyName(request.getCompanyName());

//         if (request.getPosition() != null && !request.getPosition().isBlank())
//             profile.setPosition(request.getPosition());

//         if (request.getCountry() != null && !request.getCountry().isBlank())
//             profile.setCountry(request.getCountry());

//         if (request.getState() != null && !request.getState().isBlank())
//             profile.setState(request.getState());

//         if (request.getCity() != null && !request.getCity().isBlank())
//             profile.setCity(request.getCity());

//         if (request.getPhoneNumber() != null && !request.getPhoneNumber().isBlank())
//             profile.setPhoneNumber(request.getPhoneNumber());

//         if (request.getLinkedinUrl() != null && !request.getLinkedinUrl().isBlank())
//             profile.setLinkedinUrl(request.getLinkedinUrl());

//         if (request.getInstagramUrl() != null && !request.getInstagramUrl().isBlank())
//             profile.setInstagramUrl(request.getInstagramUrl());

//         if (request.getWebsiteUrl() != null && !request.getWebsiteUrl().isBlank())
//             profile.setWebsiteUrl(request.getWebsiteUrl());

//         if (request.getPortfolioUrl() != null && !request.getPortfolioUrl().isBlank())
//             profile.setPortfolioUrl(request.getPortfolioUrl());

//         // ========================
//         // SAFE BOOLEAN HANDLING
//         // (IMPORTANT FIX)
//         // ========================

//         profile.setCurrentlyStudying(request.isCurrentlyStudying());
//         profile.setCurrentlyWorking(request.isCurrentlyWorking());

//         // SAVE
//         Profile savedProfile = profileRepository.save(profile);

//         return mapToResponse(savedProfile);
//     }

//     // ========================
//     // MAPPER
//     // ========================
//     private ProfileResponse mapToResponse(Profile profile) {

//         ProfileResponse response = new ProfileResponse();

//         response.setId(profile.getId());
//         response.setUserId(profile.getUserId());

//         response.setProfileImage(profile.getProfileImage());
//         response.setCoverImage(profile.getCoverImage());

//         response.setFirstName(profile.getFirstName());
//         response.setLastName(profile.getLastName());
//         response.setGender(profile.getGender());

//         response.setHeadline(profile.getHeadline());
//         response.setAbout(profile.getAbout());

//         response.setCollege(profile.getCollege());
//         response.setDegree(profile.getDegree());
//         response.setCurrentlyStudying(profile.isCurrentlyStudying());

//         response.setCompanyName(profile.getCompanyName());
//         response.setPosition(profile.getPosition());
//         response.setCurrentlyWorking(profile.isCurrentlyWorking());

//         response.setCountry(profile.getCountry());
//         response.setState(profile.getState());
//         response.setCity(profile.getCity());

//         response.setPhoneNumber(profile.getPhoneNumber());
//         response.setLinkedinUrl(profile.getLinkedinUrl());
//         response.setInstagramUrl(profile.getInstagramUrl());

//         response.setWebsiteUrl(profile.getWebsiteUrl());
//         response.setPortfolioUrl(profile.getPortfolioUrl());

//         return response;
//     }

//     // ========================
//     // GET PROFILE
//     // ========================
//     public ProfileResponse getProfileByUserId(String userId) {

//         Profile profile = profileRepository.findByUserId(userId)
//                 .orElseThrow(() -> new RuntimeException("Profile not found"));

//         return mapToResponse(profile);
//     }
// }


// more advacmce 


// package com.spring.ankur.chatapp_ankur.service;

// import com.spring.ankur.chatapp_ankur.dto.ProfileRequest;
// import com.spring.ankur.chatapp_ankur.dto.ProfileResponse;
// import com.spring.ankur.chatapp_ankur.entities.Profile;
// import com.spring.ankur.chatapp_ankur.repositories.ProfileRepository;
// import org.springframework.stereotype.Service;

// @Service
// public class ProfileService {

//     private final ProfileRepository profileRepository;
//     private final CloudinaryService cloudinaryService;

//     public ProfileService(ProfileRepository profileRepository,
//                           CloudinaryService cloudinaryService) {
//         this.profileRepository = profileRepository;
//         this.cloudinaryService = cloudinaryService;
//     }

//     public ProfileResponse createOrUpdateProfile(String userId, ProfileRequest request) {

//         Profile profile = profileRepository
//                 .findByUserId(userId)
//                 .orElse(new Profile());

//         profile.setUserId(userId);

//         // ☁️ CLOUDINARY UPLOAD
//         if (request.getProfileImageFile() != null) {
//             String url = cloudinaryService.uploadImage(request.getProfileImageFile());
//             profile.setProfileImage(url);
//         }

//         if (request.getCoverImageFile() != null) {
//             String url = cloudinaryService.uploadImage(request.getCoverImageFile());
//             profile.setCoverImage(url);
//         }

//         // TEXT FIELDS (safe update)
//         if (request.getFirstName() != null) profile.setFirstName(request.getFirstName());
//         if (request.getLastName() != null) profile.setLastName(request.getLastName());
//         if (request.getGender() != null) profile.setGender(request.getGender());
//         if (request.getHeadline() != null) profile.setHeadline(request.getHeadline());
//         if (request.getAbout() != null) profile.setAbout(request.getAbout());

//         if (request.getCollege() != null) profile.setCollege(request.getCollege());
//         if (request.getDegree() != null) profile.setDegree(request.getDegree());

//         profile.setCurrentlyStudying(request.isCurrentlyStudying());

//         if (request.getCompanyName() != null) profile.setCompanyName(request.getCompanyName());
//         if (request.getPosition() != null) profile.setPosition(request.getPosition());

//         profile.setCurrentlyWorking(request.isCurrentlyWorking());

//         if (request.getCountry() != null) profile.setCountry(request.getCountry());
//         if (request.getState() != null) profile.setState(request.getState());
//         if (request.getCity() != null) profile.setCity(request.getCity());

//         if (request.getPhoneNumber() != null) profile.setPhoneNumber(request.getPhoneNumber());
//         if (request.getLinkedinUrl() != null) profile.setLinkedinUrl(request.getLinkedinUrl());
//         if (request.getInstagramUrl() != null) profile.setInstagramUrl(request.getInstagramUrl());

//         if (request.getWebsiteUrl() != null) profile.setWebsiteUrl(request.getWebsiteUrl());
//         if (request.getPortfolioUrl() != null) profile.setPortfolioUrl(request.getPortfolioUrl());

//         Profile saved = profileRepository.save(profile);

//         return mapToResponse(saved);
//     }

//     private ProfileResponse mapToResponse(Profile profile) {

//         ProfileResponse res = new ProfileResponse();

//         res.setId(profile.getId());
//         res.setUserId(profile.getUserId());

//         res.setProfileImage(profile.getProfileImage());
//         res.setCoverImage(profile.getCoverImage());

//         res.setFirstName(profile.getFirstName());
//         res.setLastName(profile.getLastName());
//         res.setGender(profile.getGender());

//         res.setHeadline(profile.getHeadline());
//         res.setAbout(profile.getAbout());

//         res.setCollege(profile.getCollege());
//         res.setDegree(profile.getDegree());
//         res.setCurrentlyStudying(profile.isCurrentlyStudying());

//         res.setCompanyName(profile.getCompanyName());
//         res.setPosition(profile.getPosition());
//         res.setCurrentlyWorking(profile.isCurrentlyWorking());

//         res.setCountry(profile.getCountry());
//         res.setState(profile.getState());
//         res.setCity(profile.getCity());

//         res.setPhoneNumber(profile.getPhoneNumber());
//         res.setLinkedinUrl(profile.getLinkedinUrl());
//         res.setInstagramUrl(profile.getInstagramUrl());

//         res.setWebsiteUrl(profile.getWebsiteUrl());
//         res.setPortfolioUrl(profile.getPortfolioUrl());

//         return res;
//     }

//     public ProfileResponse getProfileByUserId(String userId) {
//         Profile profile = profileRepository.findByUserId(userId)
//                 .orElseThrow(() -> new RuntimeException("Profile not found"));

//         return mapToResponse(profile);
//     }
// }

// // more advance 
// package com.spring.ankur.chatapp_ankur.service;

// import com.spring.ankur.chatapp_ankur.dto.ProfileRequest;
// import com.spring.ankur.chatapp_ankur.dto.ProfileResponse;
// import com.spring.ankur.chatapp_ankur.entities.Profile;
// import com.spring.ankur.chatapp_ankur.repositories.ProfileRepository;
// import org.springframework.stereotype.Service;

// @Service
// public class ProfileService {

//     private final ProfileRepository profileRepository;
//     private final CloudinaryService cloudinaryService;

//     public ProfileService(
//             ProfileRepository profileRepository,
//             CloudinaryService cloudinaryService
//     ) {
//         this.profileRepository = profileRepository;
//         this.cloudinaryService = cloudinaryService;
//     }

//     public ProfileResponse createOrUpdateProfile(
//             String userId,
//             ProfileRequest request
//     ) {

//         Profile profile = profileRepository
//                 .findByUserId(userId)
//                 .orElse(new Profile());

//         profile.setUserId(userId);

//         // =========================
//         // CLOUDINARY IMAGE UPLOADS
//         // =========================

//         if (request.getProfileImage() != null &&
//                 !request.getProfileImage().isEmpty()) {

//             String profileImageUrl =
//                     cloudinaryService.uploadImage(
//                             request.getProfileImage()
//                     );

//             profile.setProfileImage(profileImageUrl);
//         }

//         if (request.getCoverImage() != null &&
//                 !request.getCoverImage().isEmpty()) {

//             String coverImageUrl =
//                     cloudinaryService.uploadImage(
//                             request.getCoverImage()
//                     );

//             profile.setCoverImage(coverImageUrl);
//         }

// // =========================
// // BASIC INFO
// // =========================

// if (request.getFirstName() != null &&
//         !request.getFirstName().trim().isEmpty()) {
//     profile.setFirstName(request.getFirstName());
// }

// if (request.getLastName() != null &&
//         !request.getLastName().trim().isEmpty()) {
//     profile.setLastName(request.getLastName());
// }

// if (request.getGender() != null &&
//         !request.getGender().trim().isEmpty()) {
//     profile.setGender(request.getGender());
// }

// // =========================
// // ABOUT
// // =========================

// if (request.getHeadline() != null &&
//         !request.getHeadline().trim().isEmpty()) {
//     profile.setHeadline(request.getHeadline());
// }

// if (request.getAbout() != null &&
//         !request.getAbout().trim().isEmpty()) {
//     profile.setAbout(request.getAbout());
// }

// // =========================
// // EDUCATION
// // =========================

// if (request.getCollege() != null &&
//         !request.getCollege().trim().isEmpty()) {
//     profile.setCollege(request.getCollege());
// }

// if (request.getDegree() != null &&
//         !request.getDegree().trim().isEmpty()) {
//     profile.setDegree(request.getDegree());
// }

// profile.setCurrentlyStudying(
//         request.isCurrentlyStudying()
// );

// // =========================
// // EXPERIENCE
// // =========================

// if (request.getCompanyName() != null &&
//         !request.getCompanyName().trim().isEmpty()) {
//     profile.setCompanyName(request.getCompanyName());
// }

// if (request.getPosition() != null &&
//         !request.getPosition().trim().isEmpty()) {
//     profile.setPosition(request.getPosition());
// }

// profile.setCurrentlyWorking(
//         request.isCurrentlyWorking()
// );

// // =========================
// // LOCATION
// // =========================

// if (request.getCountry() != null &&
//         !request.getCountry().trim().isEmpty()) {
//     profile.setCountry(request.getCountry());
// }

// if (request.getState() != null &&
//         !request.getState().trim().isEmpty()) {
//     profile.setState(request.getState());
// }

// if (request.getCity() != null &&
//         !request.getCity().trim().isEmpty()) {
//     profile.setCity(request.getCity());
// }

// // =========================
// // CONTACT
// // =========================

// if (request.getPhoneNumber() != null &&
//         !request.getPhoneNumber().trim().isEmpty()) {
//     profile.setPhoneNumber(request.getPhoneNumber());
// }

// if (request.getLinkedinUrl() != null &&
//         !request.getLinkedinUrl().trim().isEmpty()) {
//     profile.setLinkedinUrl(request.getLinkedinUrl());
// }

// if (request.getInstagramUrl() != null &&
//         !request.getInstagramUrl().trim().isEmpty()) {
//     profile.setInstagramUrl(request.getInstagramUrl());
// }

// // =========================
// // WEBSITE & PORTFOLIO
// // =========================

// if (request.getWebsiteUrl() != null &&
//         !request.getWebsiteUrl().trim().isEmpty()) {
//     profile.setWebsiteUrl(request.getWebsiteUrl());
// }

// if (request.getPortfolioUrl() != null &&
//         !request.getPortfolioUrl().trim().isEmpty()) {
//     profile.setPortfolioUrl(request.getPortfolioUrl());
// }

//         Profile savedProfile =
//                 profileRepository.save(profile);

//         return mapToResponse(savedProfile);
//     }

//     private ProfileResponse mapToResponse(Profile profile) {

//         ProfileResponse response =
//                 new ProfileResponse();

//         response.setId(profile.getId());
//         response.setUserId(profile.getUserId());

//         response.setProfileImage(
//                 profile.getProfileImage()
//         );

//         response.setCoverImage(
//                 profile.getCoverImage()
//         );

//         response.setFirstName(
//                 profile.getFirstName()
//         );

//         response.setLastName(
//                 profile.getLastName()
//         );

//         response.setGender(
//                 profile.getGender()
//         );

//         response.setHeadline(
//                 profile.getHeadline()
//         );

//         response.setAbout(
//                 profile.getAbout()
//         );

//         response.setCollege(
//                 profile.getCollege()
//         );

//         response.setDegree(
//                 profile.getDegree()
//         );

//         response.setCurrentlyStudying(
//                 profile.isCurrentlyStudying()
//         );

//         response.setCompanyName(
//                 profile.getCompanyName()
//         );

//         response.setPosition(
//                 profile.getPosition()
//         );

//         response.setCurrentlyWorking(
//                 profile.isCurrentlyWorking()
//         );

//         response.setCountry(
//                 profile.getCountry()
//         );

//         response.setState(
//                 profile.getState()
//         );

//         response.setCity(
//                 profile.getCity()
//         );

//         response.setPhoneNumber(
//                 profile.getPhoneNumber()
//         );

//         response.setLinkedinUrl(
//                 profile.getLinkedinUrl()
//         );

//         response.setInstagramUrl(
//                 profile.getInstagramUrl()
//         );

//         response.setWebsiteUrl(
//                 profile.getWebsiteUrl()
//         );

//         response.setPortfolioUrl(
//                 profile.getPortfolioUrl()
//         );

//         return response;
//     }

//     public ProfileResponse getProfileByUserId(
//             String userId
//     ) {

//         Profile profile = profileRepository
//                 .findByUserId(userId)
//                 .orElseThrow(() ->
//                         new RuntimeException(
//                                 "Profile not found"
//                         )
//                 );

//         return mapToResponse(profile);
//     }


//     public ProfileResponse getProfileByUsername(String username) {

//     User user = userRepository.findByUsername(username)
//             .orElseThrow(() -> new RuntimeException("User not found"));

//     Profile profile = profileRepository.findByUserId(user.getId())
//             .orElseThrow(() -> new RuntimeException("Profile not found"));

//     return mapToResponse(profile);
// }
// }


// more advace  for both me and other person 


package com.spring.ankur.chatapp_ankur.service;

import com.spring.ankur.chatapp_ankur.dto.NetworkUserResponse;
import com.spring.ankur.chatapp_ankur.dto.ProfileRequest;
import com.spring.ankur.chatapp_ankur.dto.ProfileResponse;
import com.spring.ankur.chatapp_ankur.entities.Profile;
import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.repositories.ProfileRepository;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
import org.springframework.stereotype.Service;
import com.spring.ankur.chatapp_ankur.entities.Follow;
import com.spring.ankur.chatapp_ankur.entities.Connection;
import com.spring.ankur.chatapp_ankur.entities.ConnectionStatus;
import com.spring.ankur.chatapp_ankur.repositories.FollowRepository;
import com.spring.ankur.chatapp_ankur.repositories.ConnectionRepository;
import java.util.*;


@Service
public class ProfileService {

    private final ProfileRepository profileRepository;
    private final CloudinaryService cloudinaryService;
    private final UserRepository userRepository; // ✅ FIXED
    private final FollowRepository followRepository;
private final ConnectionRepository connectionRepository;
   public ProfileService(
        ProfileRepository profileRepository,
        CloudinaryService cloudinaryService,
        UserRepository userRepository,
        FollowRepository followRepository,
        ConnectionRepository connectionRepository
) {

    this.profileRepository = profileRepository;
    this.cloudinaryService = cloudinaryService;
    this.userRepository = userRepository;
    this.followRepository = followRepository;
    this.connectionRepository = connectionRepository;
}

    // =========================
    // CREATE / UPDATE OWN PROFILE
    // =========================
    public ProfileResponse createOrUpdateProfile(
            String userId,
            ProfileRequest request
    ) {

        Profile profile = profileRepository
                .findByUserId(userId)
                .orElse(new Profile());

        profile.setUserId(userId);

        // =========================
        // CLOUDINARY IMAGE UPLOADS
        // =========================
        if (request.getProfileImage() != null &&
                !request.getProfileImage().isEmpty()) {

            String profileImageUrl =
                    cloudinaryService.uploadImage(
                            request.getProfileImage()
                    );

            profile.setProfileImage(profileImageUrl);
        }

        if (request.getCoverImage() != null &&
                !request.getCoverImage().isEmpty()) {

            String coverImageUrl =
                    cloudinaryService.uploadImage(
                            request.getCoverImage()
                    );

            profile.setCoverImage(coverImageUrl);
        }

        // =========================
        // BASIC INFO
        // =========================
        if (request.getFirstName() != null &&
                !request.getFirstName().trim().isEmpty()) {
            profile.setFirstName(request.getFirstName());
        }

        if (request.getLastName() != null &&
                !request.getLastName().trim().isEmpty()) {
            profile.setLastName(request.getLastName());
        }

        if (request.getGender() != null &&
                !request.getGender().trim().isEmpty()) {
            profile.setGender(request.getGender());
        }

        // =========================
        // ABOUT
        // =========================
        if (request.getHeadline() != null &&
                !request.getHeadline().trim().isEmpty()) {
            profile.setHeadline(request.getHeadline());
        }

        if (request.getAbout() != null &&
                !request.getAbout().trim().isEmpty()) {
            profile.setAbout(request.getAbout());
        }

        // =========================
        // EDUCATION
        // =========================
        if (request.getCollege() != null &&
                !request.getCollege().trim().isEmpty()) {
            profile.setCollege(request.getCollege());
        }

        if (request.getDegree() != null &&
                !request.getDegree().trim().isEmpty()) {
            profile.setDegree(request.getDegree());
        }

        profile.setCurrentlyStudying(request.isCurrentlyStudying());

        // =========================
        // EXPERIENCE
        // =========================
        if (request.getCompanyName() != null &&
                !request.getCompanyName().trim().isEmpty()) {
            profile.setCompanyName(request.getCompanyName());
        }

        if (request.getPosition() != null &&
                !request.getPosition().trim().isEmpty()) {
            profile.setPosition(request.getPosition());
        }

        profile.setCurrentlyWorking(request.isCurrentlyWorking());

        // =========================
        // LOCATION
        // =========================
        if (request.getCountry() != null &&
                !request.getCountry().trim().isEmpty()) {
            profile.setCountry(request.getCountry());
        }

        if (request.getState() != null &&
                !request.getState().trim().isEmpty()) {
            profile.setState(request.getState());
        }

        if (request.getCity() != null &&
                !request.getCity().trim().isEmpty()) {
            profile.setCity(request.getCity());
        }

        // =========================
        // CONTACT
        // =========================
        if (request.getPhoneNumber() != null &&
                !request.getPhoneNumber().trim().isEmpty()) {
            profile.setPhoneNumber(request.getPhoneNumber());
        }

        if (request.getLinkedinUrl() != null &&
                !request.getLinkedinUrl().trim().isEmpty()) {
            profile.setLinkedinUrl(request.getLinkedinUrl());
        }

        if (request.getInstagramUrl() != null &&
                !request.getInstagramUrl().trim().isEmpty()) {
            profile.setInstagramUrl(request.getInstagramUrl());
        }

        // =========================
        // WEBSITE
        // =========================
        if (request.getWebsiteUrl() != null &&
                !request.getWebsiteUrl().trim().isEmpty()) {
            profile.setWebsiteUrl(request.getWebsiteUrl());
        }

        if (request.getPortfolioUrl() != null &&
                !request.getPortfolioUrl().trim().isEmpty()) {
            profile.setPortfolioUrl(request.getPortfolioUrl());
        }

        Profile savedProfile = profileRepository.save(profile);

        return mapToResponse(savedProfile);
    }

    // =========================
    // OWN PROFILE
    // =========================
    public ProfileResponse getProfileByUserId(String userId) {

        Profile profile = profileRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        return mapToResponse(profile);
    }

    // =========================
    // PUBLIC PROFILE (USERNAME → USERID)
    // =========================
    public ProfileResponse getProfileByUsername(String username) {

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Profile profile = profileRepository.findByUserId(user.getId())
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        return mapToResponse(profile);
    }

    // =========================
    // MAPPER
    // =========================
  private ProfileResponse mapToResponse(Profile profile) {

    ProfileResponse response = new ProfileResponse();

    User user = userRepository.findById(profile.getUserId())
            .orElseThrow(() -> new RuntimeException("User not found"));

    response.setId(profile.getId());
    response.setUserId(profile.getUserId());
    response.setUsername(user.getUsername());

    response.setProfileImage(profile.getProfileImage());
    response.setCoverImage(profile.getCoverImage());

    response.setFirstName(profile.getFirstName());
    response.setLastName(profile.getLastName());

    response.setGender(profile.getGender());
    response.setHeadline(profile.getHeadline());
    response.setAbout(profile.getAbout());

    response.setCollege(profile.getCollege());
    response.setDegree(profile.getDegree());
    response.setCurrentlyStudying(profile.isCurrentlyStudying());

    response.setCompanyName(profile.getCompanyName());
    response.setPosition(profile.getPosition());
    response.setCurrentlyWorking(profile.isCurrentlyWorking());

    response.setCountry(profile.getCountry());
    response.setState(profile.getState());
    response.setCity(profile.getCity());

    response.setPhoneNumber(profile.getPhoneNumber());
    response.setLinkedinUrl(profile.getLinkedinUrl());
    response.setInstagramUrl(profile.getInstagramUrl());

    response.setWebsiteUrl(profile.getWebsiteUrl());
    response.setPortfolioUrl(profile.getPortfolioUrl());

    return response;
}

// =========================
// FOLLOWING + CONNECTION NETWORK
// =========================
public List<NetworkUserResponse> getNetworkUsers(String userId){

    Set<String> userIds = new HashSet<>();


    // FOLLOWING USERS
    List<Follow> follows =
            followRepository.findByFollowerId(userId);


    for(Follow follow : follows){

        userIds.add(
            follow.getFollowingId()
        );

    }



    // CONNECTED USERS (SENDER)
    List<Connection> sent =
            connectionRepository
            .findBySenderIdAndStatus(
                userId,
                ConnectionStatus.CONNECTED
            );


    for(Connection c : sent){

        userIds.add(
            c.getReceiverId()
        );

    }




    // CONNECTED USERS (RECEIVER)
    List<Connection> received =
            connectionRepository
            .findByReceiverIdAndStatus(
                userId,
                ConnectionStatus.CONNECTED
            );


    for(Connection c : received){

        userIds.add(
            c.getSenderId()
        );

    }



    List<NetworkUserResponse> result =
            new ArrayList<>();


    for(String id : userIds){


        Profile profile =
            profileRepository
            .findByUserId(id)
            .orElse(null);


        User user =
            userRepository
            .findById(id)
            .orElse(null);


        if(user != null){

            result.add(
                new NetworkUserResponse(
                    user.getUsername(),
                    profile != null 
                    ? profile.getProfileImage()
                    : null
                )
            );

        }

    }


    return result;

}
}