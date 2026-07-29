package com.spring.ankur.chatapp_ankur.controller;

import com.spring.ankur.chatapp_ankur.dto.CommunityMemberResponse;
import com.spring.ankur.chatapp_ankur.dto.CommunityResponse;
import com.spring.ankur.chatapp_ankur.dto.CreateCommunityRequest;
import com.spring.ankur.chatapp_ankur.dto.JoinCommunityRequest;
import com.spring.ankur.chatapp_ankur.service.CommunityService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.web.bind.annotation.*;

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
        @Valid @RequestBody JoinCommunityRequest request
) {

    System.out.println("JOIN CONTROLLER HIT");

    return communityService.joinCommunity(request);
}
     

    @GetMapping("/{communityId}")
public CommunityResponse getCommunity(
        @PathVariable String communityId
) {
    return communityService.getCommunity(communityId);
}

@GetMapping("/{communityId}/members")
public List<CommunityMemberResponse> getMembers(
        @PathVariable String communityId
){

    return communityService.getMembers(communityId);

}
}
