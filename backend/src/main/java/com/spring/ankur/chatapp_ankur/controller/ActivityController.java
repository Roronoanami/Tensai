// package com.spring.ankur.chatapp_ankur.controller;

// import com.spring.ankur.chatapp_ankur.dto.ActivityRequest;
// import com.spring.ankur.chatapp_ankur.dto.ActivityResponse;
// import com.spring.ankur.chatapp_ankur.service.ActivityService;
// import org.springframework.http.MediaType;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/activity")
// public class ActivityController {

//     private final ActivityService activityService;

//     public ActivityController(ActivityService activityService) {
//         this.activityService = activityService;
//     }

//     // CREATE
//     @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//     public ResponseEntity<ActivityResponse> create(
//             @RequestParam String userId,
//             @ModelAttribute ActivityRequest req
//     ) {
//         return ResponseEntity.ok(activityService.create(userId, req));
//     }

//     // MY ACTIVITIES
//     @GetMapping("/me")
//     public ResponseEntity<List<ActivityResponse>> myActivities(
//             @RequestParam String userId
//     ) {
//         return ResponseEntity.ok(activityService.getMyActivities(userId));
//     }

//     // OTHER USER ACTIVITIES (FIXED)
//     @GetMapping("/user/{username}")
//     public ResponseEntity<List<ActivityResponse>> getUserActivity(
//             @PathVariable String username
//     ) {
//         return ResponseEntity.ok(
//                 activityService.getUserActivitiesByUsername(username)
//         );
//     }

//     // UPDATE
//     @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
//     public ResponseEntity<ActivityResponse> update(
//             @PathVariable String id,
//             @RequestParam String userId,
//             @ModelAttribute ActivityRequest req
//     ) {
//         return ResponseEntity.ok(activityService.update(id, userId, req));
//     }

//     // DELETE
//     @DeleteMapping("/{id}")
//     public ResponseEntity<Void> delete(
//             @PathVariable String id,
//             @RequestParam String userId
//     ) {
//         activityService.delete(id, userId);
//         return ResponseEntity.ok().build();
//     }
// }



package com.spring.ankur.chatapp_ankur.controller;

import com.spring.ankur.chatapp_ankur.dto.ActivityRequest;
import com.spring.ankur.chatapp_ankur.dto.ActivityResponse;
import com.spring.ankur.chatapp_ankur.service.ActivityService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/activity")
public class ActivityController {

    private final ActivityService activityService;

    public ActivityController(ActivityService activityService) {
        this.activityService = activityService;
    }

    // CREATE
    @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ActivityResponse> create(
            @RequestParam String userId,
            @ModelAttribute ActivityRequest req
    ) {
        return ResponseEntity.ok(activityService.create(userId, req));
    }

    // MY ACTIVITIES
    @GetMapping("/me")
    public ResponseEntity<List<ActivityResponse>> myActivities(
            @RequestParam String userId
    ) {
        System.out.println("========== ACTIVITY REQUEST RECEIVED ==========");
        System.out.println("User ID: " + userId);

        return ResponseEntity.ok(activityService.getMyActivities(userId));
    }

    // OTHER USER ACTIVITIES
    @GetMapping("/user/{username}")
    public ResponseEntity<List<ActivityResponse>> getUserActivity(
            @PathVariable String username
    ) {
        return ResponseEntity.ok(
                activityService.getUserActivitiesByUsername(username)
        );
    }

    // UPDATE
    @PutMapping(value = "/{id}", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<ActivityResponse> update(
            @PathVariable String id,
            @RequestParam String userId,
            @ModelAttribute ActivityRequest req
    ) {
        return ResponseEntity.ok(activityService.update(id, userId, req));
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable String id,
            @RequestParam String userId
    ) {
        activityService.delete(id, userId);
        return ResponseEntity.ok().build();
    }
}