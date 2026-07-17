package com.spring.ankur.chatapp_ankur.repositories;

import com.spring.ankur.chatapp_ankur.entities.Follow;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface FollowRepository extends MongoRepository<Follow, String> {

    // Check if one user follows another
    Optional<Follow> findByFollowerIdAndFollowingId(
            String followerId,
            String followingId
    );

    // Remove follow
    void deleteByFollowerIdAndFollowingId(
            String followerId,
            String followingId
    );

    // Count followers
    long countByFollowingId(String followingId);

    // Count following
    long countByFollowerId(String followerId);

    // Get all followers of a user
    List<Follow> findByFollowingId(String followingId);

    // Get all users followed by a user
    List<Follow> findByFollowerId(String followerId);

}