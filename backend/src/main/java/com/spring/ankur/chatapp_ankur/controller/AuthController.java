
package com.spring.ankur.chatapp_ankur.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.spring.ankur.chatapp_ankur.dto.AuthResponse;
import com.spring.ankur.chatapp_ankur.dto.LoginRequest;

import com.spring.ankur.chatapp_ankur.dto.RegisterRequest;
import com.spring.ankur.chatapp_ankur.dto.UserResponse;
import com.spring.ankur.chatapp_ankur.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")   // dev only (we'll secure later)
public class AuthController {

    private final AuthService authService;

    // Constructor injection
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    /**
     * REGISTER USER
     */
    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(
            @RequestBody RegisterRequest request) {

        UserResponse response = authService.register(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    /**
     * LOGIN USER
     */
    @PostMapping("/login")
     public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
     return ResponseEntity.ok(authService.login(request));
    }
}
