// package com.spring.ankur.chatapp_ankur.controller;

// import com.spring.ankur.chatapp_ankur.dto.CommunityMemberResponse;
// import com.spring.ankur.chatapp_ankur.dto.CommunityResponse;
// import com.spring.ankur.chatapp_ankur.dto.CreateCommunityRequest;
// import com.spring.ankur.chatapp_ankur.dto.JoinCommunityRequest;
// import com.spring.ankur.chatapp_ankur.service.CommunityService;
// import jakarta.validation.Valid;
// import lombok.RequiredArgsConstructor;

// import java.util.List;

// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/api/community")
// @RequiredArgsConstructor
// public class CommunityController {

//     private final CommunityService communityService;

//     // =========================================
//     // CREATE COMMUNITY
//     // =========================================

//     @PostMapping("/create")
//     public CommunityResponse createCommunity(
//             @Valid @RequestBody CreateCommunityRequest request
//     ) {

//         return communityService.createCommunity(request);

//     }

//     // =========================================
//     // JOIN COMMUNITY
//     // =========================================

// @PostMapping("/join")
// public CommunityResponse joinCommunity(
//         @Valid @RequestBody JoinCommunityRequest request
// ) {

//     System.out.println("JOIN CONTROLLER HIT");

//     return communityService.joinCommunity(request);
// }
     

//     @GetMapping("/{communityId}")
// public CommunityResponse getCommunity(
//         @PathVariable String communityId
// ) {
//     return communityService.getCommunity(communityId);
// }

// @GetMapping("/{communityId}/members")
// public List<CommunityMemberResponse> getMembers(
//         @PathVariable String communityId
// ){

//     return communityService.getMembers(communityId);

// }
// }






// package com.spring.ankur.chatapp_ankur.controller;

// import com.spring.ankur.chatapp_ankur.dto.CommunityMemberResponse;
// import com.spring.ankur.chatapp_ankur.dto.CommunityResponse;
// import com.spring.ankur.chatapp_ankur.dto.CommunityStatusResponse;
// import com.spring.ankur.chatapp_ankur.dto.CreateCommunityRequest;
// import com.spring.ankur.chatapp_ankur.dto.JoinCommunityRequest;
// import com.spring.ankur.chatapp_ankur.service.CommunityService;
// import jakarta.validation.Valid;
// import lombok.RequiredArgsConstructor;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.core.Authentication;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/community")
// @RequiredArgsConstructor
// public class CommunityController {

//     private final CommunityService communityService;

//     // =========================================
//     // CREATE COMMUNITY
//     // =========================================

//     @PostMapping("/create")
//     public CommunityResponse createCommunity(
//             @Valid @RequestBody CreateCommunityRequest request
//     ) {
//         return communityService.createCommunity(request);
//     }

// // =========================================
// // JOIN COMMUNITY
// // =========================================

// @PostMapping("/join")
// public CommunityResponse joinCommunity(
//         @Valid @RequestBody JoinCommunityRequest request,
//         Authentication authentication
// ) {

//     System.out.println("========== JOIN CONTROLLER HIT ==========");


//     if(authentication == null){

//         System.out.println(
//             "AUTHENTICATION IS NULL"
//         );

//     }
//     else{

//         System.out.println(
//             "AUTH USER = "
//             + authentication.getName()
//         );

//     }


//     System.out.println(
//         "COMMUNITY ID = "
//         + request.getCommunityId()
//     );


//     return communityService.joinCommunity(request);
// }
//     // =========================================
//     // GET COMMUNITY
//     // =========================================

//     @GetMapping("/{communityId}")
//     public CommunityResponse getCommunity(
//             @PathVariable String communityId
//     ) {
//         return communityService.getCommunity(communityId);
//     }

//     // =========================================
//     // GET COMMUNITY MEMBERS
//     // =========================================

//     @GetMapping("/{communityId}/members")
//     public List<CommunityMemberResponse> getMembers(
//             @PathVariable String communityId
//     ) {
//         return communityService.getMembers(communityId);
//     }

//     // =========================================
//     // GET COMMUNITY STATUS
//     // =========================================
// //      @GetMapping("/status/{communityId}")
// // public ResponseEntity<?> getCommunityStatus(
// //         @PathVariable String communityId,
// //         Authentication authentication
// // ) {

// //     System.out.println("STATUS ENDPOINT HIT");

// //     System.out.println(
// //         "AUTH = " +
// //         authentication
// //     );

// //     return ResponseEntity.ok(
// //             communityService.getCommunityStatus(
// //                     communityId,
// //                     authentication.getName()
// //             )
// //     );
// // }


// @GetMapping("/status/{communityId}")
// public ResponseEntity<?> getCommunityStatus(
//         @PathVariable String communityId,
//         Authentication authentication
// ) {

//     try {

//         System.out.println("STATUS ENDPOINT HIT");
//         System.out.println("AUTH = " + authentication);

//         CommunityStatusResponse response =
//                 communityService.getCommunityStatus(
//                         communityId,
//                         authentication.getName()
//                 );

//         System.out.println("STATUS RESPONSE = " + response);

//         return ResponseEntity.ok(response);

//     } catch (Exception e) {

//         e.printStackTrace();   // <-- VERY IMPORTANT

//         return ResponseEntity.badRequest().body(e.getMessage());
//     }
// }

// }


package com.spring.ankur.chatapp_ankur.controller;

import com.spring.ankur.chatapp_ankur.dto.CommunityMemberResponse;
import com.spring.ankur.chatapp_ankur.dto.CommunityResponse;
import com.spring.ankur.chatapp_ankur.dto.CommunityStatusResponse;
import com.spring.ankur.chatapp_ankur.dto.CreateCommunityRequest;
import com.spring.ankur.chatapp_ankur.dto.JoinCommunityRequest;
import com.spring.ankur.chatapp_ankur.service.CommunityService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.List;

@RestController
@RequestMapping("/api/community")
@RequiredArgsConstructor
public class CommunityController {

    private final CommunityService communityService;

    // =========================================
    // CREATE COMMUNITY
    // =========================================

    @PostMapping("/create")
    public CommunityResponse createCommunity(
            @Valid @RequestBody CreateCommunityRequest request
    ) {
        return communityService.createCommunity(request);
    }

    // =========================================
    // JOIN COMMUNITY
    // =========================================

    @PostMapping("/join")
    public CommunityResponse joinCommunity(
            @Valid @RequestBody JoinCommunityRequest request,
            Authentication authentication
    ) {

        System.out.println("========== JOIN CONTROLLER HIT ==========");

        if (authentication == null) {

            System.out.println("AUTHENTICATION IS NULL");

        } else {

            System.out.println("AUTH USER = " + authentication.getName());

        }

        System.out.println("COMMUNITY ID = " + request.getCommunityId());

        return communityService.joinCommunity(request);
    }

    // =========================================
    // GET COMMUNITY
    // =========================================

    @GetMapping("/{communityId}")
    public CommunityResponse getCommunity(
            @PathVariable String communityId
    ) {
        return communityService.getCommunity(communityId);
    }

    // =========================================
    // GET COMMUNITY MEMBERS
    // =========================================

    @GetMapping("/{communityId}/members")
    public List<CommunityMemberResponse> getMembers(
            @PathVariable String communityId
    ) {
        return communityService.getMembers(communityId);
    }

    // =========================================
    // GET COMMUNITY STATUS
    // =========================================

    @GetMapping("/status/{communityId}")
    public ResponseEntity<?> getCommunityStatus(
            @PathVariable String communityId,
            Authentication authentication
    ) {

        try {

            System.out.println("======================================");
            System.out.println("STATUS ENDPOINT HIT");

            if (authentication == null) {
                System.out.println("AUTHENTICATION = NULL");
                return ResponseEntity.status(401)
                        .body("Authentication is null");
            }

            System.out.println("AUTH USER = " + authentication.getName());

            CommunityStatusResponse response =
                    communityService.getCommunityStatus(
                            communityId,
                            authentication.getName()
                    );

            System.out.println("STATUS RESPONSE CREATED");
            System.out.println("OWNER  = " + response.isOwner());
            System.out.println("MEMBER = " + response.isMember());
            System.out.println("ROLE   = " + response.getRole());
            System.out.println("======================================");

            return ResponseEntity.ok(response);

        } catch (Exception e) {

            System.out.println("========== STATUS ERROR ==========");
            e.printStackTrace();
            System.out.println("==================================");

        //     return ResponseEntity.badRequest()
        //             .body(e.getMessage());
        return ResponseEntity.badRequest().body(
    Map.of("message", e.getMessage())
);
        }
    }
}