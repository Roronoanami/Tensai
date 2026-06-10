package com.spring.ankur.chatapp_ankur.repositories;

import java.util.Optional;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.spring.ankur.chatapp_ankur.entities.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    // Find user by email (used in login)
    Optional<User> findByEmail(String email);

    // Find user by username
    Optional<User> findByUsername(String username);

    // Check if email already exists
    boolean existsByEmail(String email);

    // Check if username already exists
    boolean existsByUsername(String username);

    // User search feature (Instagram/WhatsApp style)
    List<User> findByUsernameContainingIgnoreCase(String username);
}