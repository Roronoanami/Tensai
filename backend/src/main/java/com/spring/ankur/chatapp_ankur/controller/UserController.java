package com.spring.ankur.chatapp_ankur.controller;

import com.spring.ankur.chatapp_ankur.dto.LoginRequest;
import com.spring.ankur.chatapp_ankur.dto.RegisterRequest;
import com.spring.ankur.chatapp_ankur.dto.UserResponse;
import com.spring.ankur.chatapp_ankur.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    // Constructor Injection (clean architecture)
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // =========================
    // REGISTER API
    // =========================
    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(@RequestBody RegisterRequest request) {

        UserResponse response = userService.registerUser(request);
        return ResponseEntity.ok(response);
    }

    // =========================
    // LOGIN API
    // =========================
    @PostMapping("/login")
    public ResponseEntity<UserResponse> login(@RequestBody LoginRequest request) {

        UserResponse response = userService.loginUser(request);
        return ResponseEntity.ok(response);
    }

    // =========================
    // GET USER BY EMAIL
    // =========================
    @GetMapping("/email/{email}")
    public ResponseEntity<UserResponse> getUserByEmail(@PathVariable String email) {

        return ResponseEntity.ok(userService.getUserByEmail(email));
    }

    // =========================
    // LOGOUT API
    // =========================
    @PostMapping("/logout/{email}")
    public ResponseEntity<String> logout(@PathVariable String email) {

        userService.logoutUser(email);
        return ResponseEntity.ok("User logged out successfully");
    }
}