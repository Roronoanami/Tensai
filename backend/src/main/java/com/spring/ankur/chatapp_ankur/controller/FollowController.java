package com.spring.ankur.chatapp_ankur.controller;

import com.spring.ankur.chatapp_ankur.dto.FollowCountResponse;
import com.spring.ankur.chatapp_ankur.dto.FollowStatusResponse;
import com.spring.ankur.chatapp_ankur.service.FollowService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/follow")
public class FollowController {

    private final FollowService followService;

    public FollowController(FollowService followService) {
        this.followService = followService;
    }

    // =========================
    // FOLLOW USER
    // =========================
    @PostMapping("/{username}")
    public ResponseEntity<String> followUser(
            @PathVariable String username
    ) {

        String followerId = (String) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        followService.followUser(followerId, username);

        return ResponseEntity.ok("User followed successfully.");
    }

    // =========================
    // UNFOLLOW USER
    // =========================
    @DeleteMapping("/{username}")
    public ResponseEntity<String> unfollowUser(
            @PathVariable String username
    ) {

        String followerId = (String) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        followService.unfollowUser(followerId, username);

        return ResponseEntity.ok("User unfollowed successfully.");
    }

    // =========================
    // FOLLOW STATUS
    // =========================
    @GetMapping("/status/{username}")
    public ResponseEntity<FollowStatusResponse> getFollowStatus(
            @PathVariable String username
    ) {

        String followerId = (String) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        return ResponseEntity.ok(
                followService.isFollowing(followerId, username)
        );
    }

    // =========================
    // FOLLOWERS COUNT
    // =========================
    @GetMapping("/followers/{username}")
    public ResponseEntity<FollowCountResponse> getFollowersCount(
            @PathVariable String username
    ) {

        return ResponseEntity.ok(
                followService.getFollowersCount(username)
        );
    }

    // =========================
    // FOLLOWING COUNT
    // =========================
    @GetMapping("/following/{username}")
    public ResponseEntity<FollowCountResponse> getFollowingCount(
            @PathVariable String username
    ) {

        return ResponseEntity.ok(
                followService.getFollowingCount(username)
        );
    }


}