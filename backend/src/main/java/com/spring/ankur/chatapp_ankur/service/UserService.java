// package com.spring.ankur.chatapp_ankur.service;

// import com.spring.ankur.chatapp_ankur.dto.RegisterRequest;
// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
// import org.springframework.stereotype.Service;

// import java.time.LocalDateTime;

// @Service
// public class UserService {

//     private final UserRepository userRepository;

//     // Constructor Injection (best practice)
//     public UserService(UserRepository userRepository) {
//         this.userRepository = userRepository;
//     }

//     // ======================================
//     // REGISTER USER (CORE BUSINESS LOGIC)
//     // ======================================
//     public User registerUser(RegisterRequest request) {

//         // 1. Validate email uniqueness
//         if (userRepository.existsByEmail(request.getEmail())) {
//             throw new RuntimeException("Email already exists");
//         }

//         // 2. Validate username uniqueness
//         if (userRepository.existsByUsername(request.getUsername())) {
//             throw new RuntimeException("Username already exists");
//         }

//         // 3. Convert DTO → Entity
//         User user = new User();
//         user.setUsername(request.getUsername());
//         user.setEmail(request.getEmail());

//         // ⚠️ TEMPORARY: plain password (we will replace with BCrypt later)
//         user.setPassword(request.getPassword());

//         user.setBio(request.getBio());
//         user.setProfilePicture(null);

//         // 4. System-generated fields
//         user.setOnline(false);
//         user.setLastSeen(LocalDateTime.now());
//         user.setCreatedAt(LocalDateTime.now());

//         // 5. Save to database
//         return userRepository.save(user);
//     }

//     // ======================================
//     // GET USER BY EMAIL
//     // ======================================
//     public User getUserByEmail(String email) {

//         return userRepository.findByEmail(email)
//                 .orElseThrow(() -> new RuntimeException("User not found"));
//     }

//     // ======================================
//     // LOGIN CHECK (basic version - NO JWT yet)
//     // ======================================
//     public User loginUser(String email, String password) {

//         User user = userRepository.findByEmail(email)
//                 .orElseThrow(() -> new RuntimeException("Invalid email"));

//         if (!user.getPassword().equals(password)) {
//             throw new RuntimeException("Invalid password");
//         }

//         // update online status
//         user.setOnline(true);
//         user.setLastSeen(LocalDateTime.now());

//         return userRepository.save(user);
//     }

//     // ======================================
//     // LOGOUT USER
//     // ======================================
//     public void logoutUser(String email) {

//         User user = getUserByEmail(email);

//         user.setOnline(false);
//         user.setLastSeen(LocalDateTime.now());

//         userRepository.save(user);
//     }
// }




///////////////////////////
/// ////////////////////////
/// _________More advance -------
/// ///////////////
/// //////////////////////////
/// ///////////////
/// 
package com.spring.ankur.chatapp_ankur.service;

import com.spring.ankur.chatapp_ankur.dto.LoginRequest;
import com.spring.ankur.chatapp_ankur.dto.RegisterRequest;
import com.spring.ankur.chatapp_ankur.dto.UserResponse;
import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
 

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    // =========================
    // SINGLE CLEAN CONSTRUCTOR
    // =========================
    public UserService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    // =========================
    // REGISTER USER
    // =========================
    public UserResponse registerUser(RegisterRequest request) {

        validateRegister(request);

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());

        // ✅ BCrypt password (SECURE)
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        user.setBio(request.getBio());

        user.setOnline(false);
        user.setCreatedAt(LocalDateTime.now());
        user.setLastSeen(LocalDateTime.now());

        return mapToResponse(userRepository.save(user));
    }

    // =========================
    // LOGIN USER
    // =========================
    public UserResponse loginUser(LoginRequest request) {

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Invalid email"));

        // ✅ FIX: BCrypt comparison (IMPORTANT)
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        user.setOnline(true);
        user.setLastSeen(LocalDateTime.now());

        return mapToResponse(userRepository.save(user));
    }

    // =========================
    // LOGOUT
    // =========================
    public void logoutUser(String email) {

        User user = getUserEntityByEmail(email);

        user.setOnline(false);
        user.setLastSeen(LocalDateTime.now());

        userRepository.save(user);
    }

    // =========================
    // GET USER
    // =========================
    public UserResponse getUserByEmail(String email) {

        return mapToResponse(getUserEntityByEmail(email));
    }

    // =========================
    // REGISTER VALIDATION
    // =========================
    private void validateRegister(RegisterRequest request) {

        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already exists");
        }
    }

    // =========================
    // COMMON FETCH
    // =========================
    private User getUserEntityByEmail(String email) {

        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    // =========================
    // MAPPER
    // =========================
    private UserResponse mapToResponse(User user) {

        UserResponse response = new UserResponse();

        response.setId(user.getId());
        response.setUsername(user.getUsername());
        response.setEmail(user.getEmail());
        response.setBio(user.getBio());
        response.setOnline(user.isOnline());
        response.setLastSeen(user.getLastSeen());
        response.setCreatedAt(user.getCreatedAt());

        return response;
    }
}