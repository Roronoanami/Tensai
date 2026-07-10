package com.spring.ankur.chatapp_ankur.controller;

import com.spring.ankur.chatapp_ankur.dto.NotificationResponse;
import com.spring.ankur.chatapp_ankur.service.NotificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

    private final NotificationService notificationService;

    public NotificationController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    // ==========================================================
    // GET MY NOTIFICATIONS
    // ==========================================================
    @GetMapping
    public ResponseEntity<List<NotificationResponse>> getMyNotifications() {

        String userId = (String) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        return ResponseEntity.ok(
                notificationService.getMyNotifications(userId)
        );
    }

    // ==========================================================
    // GET UNREAD COUNT
    // ==========================================================
    @GetMapping("/unread-count")
    public ResponseEntity<Map<String, Long>> getUnreadCount() {

        String userId = (String) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        long count = notificationService.getUnreadCount(userId);

        return ResponseEntity.ok(
                Map.of("count", count)
        );
    }

    // ==========================================================
    // MARK ONE AS READ
    // ==========================================================
    @PutMapping("/{notificationId}/read")
    public ResponseEntity<Void> markAsRead(
            @PathVariable String notificationId
    ) {

        notificationService.markAsRead(notificationId);

        return ResponseEntity.ok().build();
    }

    // ==========================================================
    // MARK ALL AS READ
    // ==========================================================
    @PutMapping("/read-all")
    public ResponseEntity<Void> markAllAsRead() {

        String userId = (String) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

        notificationService.markAllAsRead(userId);

        return ResponseEntity.ok().build();
    }

}