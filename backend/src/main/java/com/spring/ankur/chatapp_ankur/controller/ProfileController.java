// package com.spring.ankur.chatapp_ankur.controller;

// import com.spring.ankur.chatapp_ankur.dto.ProfileRequest;
// import com.spring.ankur.chatapp_ankur.dto.ProfileResponse;
// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.service.ProfileService;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/api/profile")
// public class ProfileController {

//     private final ProfileService profileService;

//     public ProfileController(ProfileService profileService) {
//         this.profileService = profileService;
//     }

//     @PostMapping("/me")
//     public ResponseEntity<ProfileResponse> createOrUpdateMyProfile(
//             @RequestBody ProfileRequest request
//     ) {

//         Authentication authentication =
//                 SecurityContextHolder.getContext().getAuthentication();

//         User user = (User) authentication.getPrincipal();
//         String userId = user.getId();

//         ProfileResponse response =
//                 profileService.createOrUpdateProfile(userId, request);

//         return ResponseEntity.ok(response);
//     }

//     @GetMapping("/me")
//     public ResponseEntity<ProfileResponse> getMyProfile() {

//         Authentication authentication =
//                 SecurityContextHolder.getContext().getAuthentication();

//         User user = (User) authentication.getPrincipal();
//         String userId = user.getId();

//         ProfileResponse response =
//                 profileService.getProfileByUserId(userId);

//         return ResponseEntity.ok(response);
//     }

//     @GetMapping("/{userId}")
//     public ResponseEntity<ProfileResponse> getProfileByUserId(
//             @PathVariable String userId
//     ) {
//         ProfileResponse response =
//                 profileService.getProfileByUserId(userId);

//         return ResponseEntity.ok(response);
//     }
// }




// // best backend and frontend 
// package com.spring.ankur.chatapp_ankur.controller;

// import com.spring.ankur.chatapp_ankur.dto.ProfileRequest;
// import com.spring.ankur.chatapp_ankur.dto.ProfileResponse;
// import com.spring.ankur.chatapp_ankur.service.ProfileService;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/api/profile")
// public class ProfileController {

//     private final ProfileService profileService;

//     public ProfileController(ProfileService profileService) {
//         this.profileService = profileService;
//     }

//     // =========================
//     // CREATE / UPDATE PROFILE
//     // =========================
//     @PostMapping("/me")
//     public ResponseEntity<ProfileResponse> createOrUpdateMyProfile(
//             @RequestBody ProfileRequest request
//     ) {

//         Authentication authentication =
//                 SecurityContextHolder.getContext().getAuthentication();

//         if (authentication == null || authentication.getPrincipal() == null) {
//             throw new RuntimeException("Unauthorized");
//         }

//         String userId = (String) authentication.getPrincipal();

//         ProfileResponse response =
//                 profileService.createOrUpdateProfile(userId, request);

//         return ResponseEntity.ok(response);
//     }

//     // =========================
//     // GET MY PROFILE
//     // =========================
//     @GetMapping("/me")
//     public ResponseEntity<ProfileResponse> getMyProfile() {

//         Authentication authentication =
//                 SecurityContextHolder.getContext().getAuthentication();

//         if (authentication == null || authentication.getPrincipal() == null) {
//             throw new RuntimeException("Unauthorized");
//         }

//         String userId = (String) authentication.getPrincipal();

//         ProfileResponse response =
//                 profileService.getProfileByUserId(userId);

//         return ResponseEntity.ok(response);
//     }

//     // =========================
//     // GET ANY USER PROFILE
//     // =========================
//     @GetMapping("/public/{userId}")
//     public ResponseEntity<ProfileResponse> getProfileByUserId(
//             @PathVariable String userId
//     ) {
//         ProfileResponse response =
//                 profileService.getProfileByUserId(userId);

//         return ResponseEntity.ok(response);
//     }
// }


// mor4e advance 

// package com.spring.ankur.chatapp_ankur.controller;

// import com.spring.ankur.chatapp_ankur.dto.ProfileRequest;
// import com.spring.ankur.chatapp_ankur.dto.ProfileResponse;
// import com.spring.ankur.chatapp_ankur.service.ProfileService;
// import org.springframework.http.MediaType;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/api/profile")
// public class ProfileController {

//     private final ProfileService profileService;

//     public ProfileController(ProfileService profileService) {
//         this.profileService = profileService;
//     }

//     // ✅ IMPORTANT: multipart support for Cloudinary later
//     @PostMapping(value = "/me", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//     public ResponseEntity<ProfileResponse> createOrUpdateMyProfile(
//             @ModelAttribute ProfileRequest request
//     ) {

//         String userId = (String) SecurityContextHolder
//                 .getContext()
//                 .getAuthentication()
//                 .getPrincipal();

//         return ResponseEntity.ok(
//                 profileService.createOrUpdateProfile(userId, request)
//         );
//     }

//     @GetMapping("/me")
//     public ResponseEntity<ProfileResponse> getMyProfile() {

//         String userId = (String) SecurityContextHolder
//                 .getContext()
//                 .getAuthentication()
//                 .getPrincipal();

//         return ResponseEntity.ok(
//                 profileService.getProfileByUserId(userId)
//         );
//     }

//     @GetMapping("/public/{userId}")
//     public ResponseEntity<ProfileResponse> getProfileByUserId(
//             @PathVariable String userId
//     ) {
//         return ResponseEntity.ok(
//                 profileService.getProfileByUserId(userId)
//         );
//     }
// }



// new advance both me and other 

package com.spring.ankur.chatapp_ankur.controller;

import com.spring.ankur.chatapp_ankur.dto.ProfileRequest;
import com.spring.ankur.chatapp_ankur.dto.ProfileResponse;
import com.spring.ankur.chatapp_ankur.service.ProfileService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    // =========================
    // CREATE / UPDATE OWN PROFILE
    // =========================
    @PostMapping(value = "/me", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ProfileResponse> createOrUpdateMyProfile(
            @ModelAttribute ProfileRequest request
    ) {

        String userId = (String) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        return ResponseEntity.ok(
                profileService.createOrUpdateProfile(userId, request)
        );
    }

    // =========================
    // GET OWN PROFILE (JWT USER)
    // =========================
    @GetMapping("/me")
    public ResponseEntity<ProfileResponse> getMyProfile() {

        String userId = (String) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        return ResponseEntity.ok(
                profileService.getProfileByUserId(userId)
        );
    }

    // =========================
    // PUBLIC PROFILE (USERNAME BASED)
    // =========================
    @GetMapping("/public/username/{username}")
    public ResponseEntity<ProfileResponse> getProfileByUsername(
            @PathVariable String username
    ) {
        return ResponseEntity.ok(
                profileService.getProfileByUsername(username)
        );
    }
}