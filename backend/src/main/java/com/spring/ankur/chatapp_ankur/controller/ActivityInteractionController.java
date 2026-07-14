package com.spring.ankur.chatapp_ankur.controller;

import com.spring.ankur.chatapp_ankur.dto.LikeResponse;
import com.spring.ankur.chatapp_ankur.service.ActivityInteractionService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/activity")
public class ActivityInteractionController {


    private final ActivityInteractionService activityInteractionService;


    public ActivityInteractionController(
            ActivityInteractionService activityInteractionService
    ) {
        this.activityInteractionService = activityInteractionService;
    }



    @PostMapping("/{activityId}/like")
    public LikeResponse likeActivity(
            @PathVariable String activityId,
            Authentication authentication
    ) {
        return activityInteractionService.likeActivity(
                activityId,
                authentication
        );
    }



    @DeleteMapping("/{activityId}/like")
    public LikeResponse unlikeActivity(
            @PathVariable String activityId,
            Authentication authentication
    ) {
        return activityInteractionService.unlikeActivity(
                activityId,
                authentication
        );
    }



    @GetMapping("/{activityId}/like/status")
    public Map<String, Boolean> isLiked(
            @PathVariable String activityId,
            Authentication authentication
    ) {

        return Map.of(
                "liked",
                activityInteractionService.isLiked(
                        activityId,
                        authentication
                )
        );
    }






    @GetMapping("/{activityId}/like/count")
public Map<String, Long> getLikeCount(@PathVariable String activityId) {

    long count = activityInteractionService.getLikeCount(activityId);

    return Map.of(
            "count",
            count
    );
}

}