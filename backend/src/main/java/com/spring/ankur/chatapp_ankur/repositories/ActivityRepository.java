package com.spring.ankur.chatapp_ankur.repositories;

import com.spring.ankur.chatapp_ankur.entities.Activity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ActivityRepository extends MongoRepository<Activity, String> {

    /*
     * Get all activities of a user
     * Used in Profile Page
     */
    List<Activity> findByUserIdOrderByCreatedAtDesc(String userId);

    /*
     * Get activities by username
     * (Can be useful in some profile lookups)
     */
    List<Activity> findByUsernameOrderByCreatedAtDesc(String username);

    /*
     * Global Search
     *
     * Searches EVERY activity in MongoDB.
     *
     * It matches:
     *  - title
     *  - OR techStack
     *
     * Example:
     * keyword = "spring"
     *
     * Matches:
     *  Title = "Spring Boot Chat App"
     *  TechStack = "React, Spring Boot, MongoDB"
     */
    List<Activity> findByTitleContainingIgnoreCaseOrTechStackContainingIgnoreCase(
            String title,
            String techStack
    );
}