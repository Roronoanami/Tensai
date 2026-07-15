package com.spring.ankur.chatapp_ankur.controller;

import com.spring.ankur.chatapp_ankur.dto.CommentRequest;
import com.spring.ankur.chatapp_ankur.dto.CommentResponse;
import com.spring.ankur.chatapp_ankur.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    // ==========================
    // Add Comment
    // ==========================
    @PostMapping("/{activityId}")
    public ResponseEntity<CommentResponse> addComment(
            @PathVariable String activityId,
            @RequestBody CommentRequest request,
            Authentication authentication
    ) {

        return ResponseEntity.ok(
                commentService.addComment(activityId, request, authentication)
        );
    }

    // ==========================
    // Get All Comments
    // ==========================
    @GetMapping("/{activityId}")
    public ResponseEntity<List<CommentResponse>> getComments(
            @PathVariable String activityId
    ) {

        return ResponseEntity.ok(
                commentService.getComments(activityId)
        );
    }

    // ==========================
    // Delete Comment
    // ==========================
    @DeleteMapping("/{commentId}")
    public ResponseEntity<String> deleteComment(
            @PathVariable String commentId,
            Authentication authentication
    ) {

        commentService.deleteComment(commentId, authentication);

        return ResponseEntity.ok("Comment deleted successfully.");
    }

    // ==========================
    // Get Comment Count
    // ==========================
    @GetMapping("/{activityId}/count")
    public ResponseEntity<Long> getCommentCount(
            @PathVariable String activityId
    ) {

        return ResponseEntity.ok(
                commentService.getCommentCount(activityId)
        );
    }
}