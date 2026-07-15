package com.spring.ankur.chatapp_ankur.service;

import com.spring.ankur.chatapp_ankur.dto.CommentRequest;
import com.spring.ankur.chatapp_ankur.dto.CommentResponse;
import com.spring.ankur.chatapp_ankur.entities.Activity;
import com.spring.ankur.chatapp_ankur.entities.Comment;
import com.spring.ankur.chatapp_ankur.entities.Profile;
import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.repositories.ActivityRepository;
import com.spring.ankur.chatapp_ankur.repositories.CommentRepository;
import com.spring.ankur.chatapp_ankur.repositories.ProfileRepository;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final ActivityRepository activityRepository;
    private final UserRepository userRepository;
    private final ProfileRepository profileRepository;

    // ==========================
    // Add Comment
    // ==========================
    public CommentResponse addComment(
            String activityId,
            CommentRequest request,
            Authentication authentication
    ) {

        Activity activity = activityRepository.findById(activityId)
                .orElseThrow(() -> new RuntimeException("Activity not found"));

        // User user = userRepository.findByEmail(authentication.getName())
        //         .orElseThrow(() -> new RuntimeException("User not found"));

        User user = userRepository.findById(authentication.getName())
        .orElseThrow(() -> new RuntimeException("User not found"));

        Profile profile = profileRepository.findByUserId(user.getId())
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        Comment comment = Comment.builder()
                .activityId(activity.getId())
                .userId(user.getId())
                .username(user.getUsername())
                .profileImage(profile.getProfileImage())
                .content(request.getContent())
                .createdAt(LocalDateTime.now())
                .build();

        Comment savedComment = commentRepository.save(comment);

        return CommentResponse.builder()
                .id(savedComment.getId())
                .username(savedComment.getUsername())
                .profileImage(savedComment.getProfileImage())
                .content(savedComment.getContent())
                .createdAt(savedComment.getCreatedAt())
                .build();
    }

    // ==========================
    // Get Comments
    // ==========================
    public List<CommentResponse> getComments(String activityId) {

        activityRepository.findById(activityId)
                .orElseThrow(() -> new RuntimeException("Activity not found"));

        return commentRepository.findByActivityIdOrderByCreatedAtAsc(activityId)
                .stream()
                .map(comment -> CommentResponse.builder()
                        .id(comment.getId())
                        .username(comment.getUsername())
                        .profileImage(comment.getProfileImage())
                        .content(comment.getContent())
                        .createdAt(comment.getCreatedAt())
                        .build())
                .toList();
    }

    // ==========================
    // Delete Comment
    // ==========================
    public void deleteComment(
            String commentId,
            Authentication authentication
    ) {

        User user = userRepository.findByEmail(authentication.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new RuntimeException("Comment not found"));

        if (!comment.getUserId().equals(user.getId())) {
            throw new RuntimeException("You are not allowed to delete this comment.");
        }

        commentRepository.delete(comment);
    }

    // ==========================
    // Comment Count
    // ==========================
    public long getCommentCount(String activityId) {

        return commentRepository.countByActivityId(activityId);
    }

}