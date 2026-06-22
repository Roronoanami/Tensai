package com.spring.ankur.chatapp_ankur.service;

import com.spring.ankur.chatapp_ankur.dto.ActivityRequest;
import com.spring.ankur.chatapp_ankur.dto.ActivityResponse;
import com.spring.ankur.chatapp_ankur.entities.Activity;
import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.repositories.ActivityRepository;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ActivityService {

    private final ActivityRepository activityRepository;
    private final UserRepository userRepository;
    private final CloudinaryService cloudinaryService;

    public ActivityService(
            ActivityRepository activityRepository,
            UserRepository userRepository,
            CloudinaryService cloudinaryService
    ) {
        this.activityRepository = activityRepository;
        this.userRepository = userRepository;
        this.cloudinaryService = cloudinaryService;
    }

    // ================= CREATE =================
    public ActivityResponse create(String userId, ActivityRequest req) {

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Activity a = new Activity();
        a.setUserId(userId);
        a.setUsername(user.getUsername());

        a.setType(req.getType());
        a.setTitle(req.getTitle());
        a.setDescription(req.getDescription());
        a.setTechStack(req.getTechStack());
        a.setCreatedAt(LocalDateTime.now());

        if (req.getImage() != null && !req.getImage().isEmpty()) {
            String url = cloudinaryService.uploadImage(req.getImage());
            a.setImageUrl(url);
        }

        return map(activityRepository.save(a));
    }

    // ================= MY ACTIVITIES =================
    public List<ActivityResponse> getMyActivities(String userId) {
        return activityRepository
                .findByUserIdOrderByCreatedAtDesc(userId)
                .stream()
                .map(this::map)
                .toList();
    }

    // ================= OTHER USER (USERNAME BASED) =================
    public List<ActivityResponse> getUserActivitiesByUsername(String username) {

        return activityRepository
                .findByUsernameOrderByCreatedAtDesc(username)
                .stream()
                .map(this::map)
                .toList();
    }

    // ================= UPDATE =================
    public ActivityResponse update(String id, String userId, ActivityRequest req) {

        Activity a = activityRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Activity not found"));

        if (!a.getUserId().equals(userId)) {
            throw new RuntimeException("Not allowed");
        }

        if (req.getTitle() != null) a.setTitle(req.getTitle());
        if (req.getDescription() != null) a.setDescription(req.getDescription());
        if (req.getTechStack() != null) a.setTechStack(req.getTechStack());

        return map(activityRepository.save(a));
    }

    // ================= DELETE =================
    public void delete(String id, String userId) {

        Activity a = activityRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Activity not found"));

        if (!a.getUserId().equals(userId)) {
            throw new RuntimeException("Not allowed");
        }

        activityRepository.delete(a);
    }

    // ================= MAPPER =================
    private ActivityResponse map(Activity a) {

        ActivityResponse r = new ActivityResponse();
        r.setId(a.getId());
        r.setUserId(a.getUserId());
        r.setUsername(a.getUsername());
        r.setType(a.getType());
        r.setTitle(a.getTitle());
        r.setDescription(a.getDescription());
        r.setImageUrl(a.getImageUrl());
        r.setTechStack(a.getTechStack());
        r.setCreatedAt(a.getCreatedAt());

        return r;
    }
}