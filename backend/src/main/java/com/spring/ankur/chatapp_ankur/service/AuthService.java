  
  
//   perfecct code at deplloyment 

  // package com.spring.ankur.chatapp_ankur.service;

// import java.time.LocalDateTime;

// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.stereotype.Service;
// import com.spring.ankur.chatapp_ankur.dto.AuthResponse;
// import com.spring.ankur.chatapp_ankur.dto.RegisterRequest;
// import com.spring.ankur.chatapp_ankur.dto.UserResponse;
// import com.spring.ankur.chatapp_ankur.dto.VerifyOtpRequest;
// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.entities.Otp;
// import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
// import com.spring.ankur.chatapp_ankur.repositories.OtpRepository;
// import com.spring.ankur.chatapp_ankur.service.JwtService;
// import com.spring.ankur.chatapp_ankur.dto.LoginRequest;

// /**
//  * AUTH SERVICE
//  * Handles:
//  * 1. User Registration
//  * 2. OTP Generation + Verification
//  */
// @Service
// public class AuthService {

//     private final UserRepository userRepository;
//     private final PasswordEncoder passwordEncoder;
//     private final OtpRepository otpRepository;
//     private final EmailService emailService;
//     private final JwtService jwtService;
//     // =========================
//     // Constructor Injection
//     // =========================
//     public AuthService(UserRepository userRepository,
//                    PasswordEncoder passwordEncoder,
//                    OtpRepository otpRepository,
//                    EmailService emailService,
//                    JwtService jwtService) {

//     this.userRepository = userRepository;
//     this.passwordEncoder = passwordEncoder;
//     this.otpRepository = otpRepository;
//     this.emailService = emailService;
//     this.jwtService = jwtService;
// }

//     // =====================================================
//     // REGISTER USER + GENERATE OTP
//     // =====================================================
//     public UserResponse register(RegisterRequest request) {

//         // =========================
//         // STEP 1: Normalize input
//         // =========================
//         String email = request.getEmail().trim().toLowerCase();
//         String username = request.getUsername().trim();

//         // =========================
//         // STEP 2: Validation
//         // =========================
//         if (userRepository.existsByEmail(email)) {
//             throw new RuntimeException("Email already exists");
//         }

//         if (userRepository.existsByUsername(username)) {
//             throw new RuntimeException("Username already exists");
//         }

//         // =========================
//         // STEP 3: Create User Entity
//         // =========================
//         User user = new User();
//         user.setUsername(username);
//         user.setEmail(email);

//         // NEVER store plain password
//         user.setPassword(passwordEncoder.encode(request.getPassword()));

//         user.setBio("");

//         // Email verification required
//         user.setEmailVerified(false);

//         user.setOnline(false);

//         user.setCreatedAt(LocalDateTime.now());
//         user.setLastSeen(LocalDateTime.now());

//         // =========================
//         // STEP 4: Save User
//         // =========================
//         User savedUser = userRepository.save(user);

//         // =========================
//         // STEP 5: Generate OTP
//         // =========================
//         String otp = emailService.generateOtp();

//         // Remove old OTP if exists
//         otpRepository.deleteByEmail(savedUser.getEmail());

//         // Create OTP entity
//         Otp otpEntity = new Otp();
//         otpEntity.setEmail(savedUser.getEmail());
//         otpEntity.setOtpCode(otp);
//         otpEntity.setCreatedAt(LocalDateTime.now());
//         otpEntity.setExpiresAt(LocalDateTime.now().plusMinutes(5));

//         // Save OTP
//         otpRepository.save(otpEntity);

//         // Send OTP via email
//         emailService.sendOtpEmail(savedUser.getEmail(), otp);

//         // =========================
// // STEP 6: Convert Entity -> DTO
// // =========================
// return mapToUserResponse(savedUser);
//     }

//     // =====================================================
//     // VERIFY OTP
//     // =====================================================
//     public String verifyOtp(VerifyOtpRequest request) {

//         // Normalize email
//         String email = request.getEmail().trim().toLowerCase();

//         // Find user
//         User user = userRepository.findByEmail(email)
//                 .orElseThrow(() -> new RuntimeException("User not found"));

//         // Find OTP
//         Otp storedOtp = otpRepository.findByEmail(email)
//                 .orElseThrow(() -> new RuntimeException("OTP not found"));

//         // Check expiry
//         if (storedOtp.getExpiresAt().isBefore(LocalDateTime.now())) {
//             throw new RuntimeException("OTP has expired");
//         }

//         // Check OTP match
//         if (!storedOtp.getOtpCode().equals(request.getOtp())) {
//             throw new RuntimeException("Invalid OTP");
//         }

//         // Mark email verified
//         user.setEmailVerified(true);
//         userRepository.save(user);

//         // Delete OTP after success
//         otpRepository.deleteByEmail(email);

//         return "Email verified successfully!";
//     }


//     /**
//  * LOGIN USER
//  * - verifies credentials
//  * - checks email verification
//  */
//     public AuthResponse login(LoginRequest request){

//     // Normalize email
//     String email = request.getEmail().trim().toLowerCase();

//     // Find user
//     User user = userRepository.findByEmail(email)
//             .orElseThrow(() -> new RuntimeException("Invalid email or password"));

//     // Check password
//     if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
//         throw new RuntimeException("Invalid email or password");
//     }

//     // Check email verification
//     if (!user.isEmailVerified()) {
//         throw new RuntimeException("Please verify your email before login");
//     }

//     // Mark user online (IMPORTANT for chat apps)
//     user.setOnline(true);
//     user.setLastSeen(LocalDateTime.now());
//     userRepository.save(user);

//     // Generate JWT using the immutable user ID
// String token = jwtService.generateToken(user.getId());
  

// // Build safe user DTO
// UserResponse userResponse = mapToUserResponse(user);  


// // Build authentication response
// AuthResponse response = new AuthResponse();
// response.setToken(token);
// response.setUser(userResponse);

// return response;
// }

// private UserResponse mapToUserResponse(User user) {

//     UserResponse response = new UserResponse();

//     response.setId(user.getId());
//     response.setUsername(user.getUsername());
//     response.setEmail(user.getEmail());
//     response.setBio(user.getBio());
//     response.setOnline(user.isOnline());
//     response.setLastSeen(user.getLastSeen());
//     response.setCreatedAt(user.getCreatedAt());

//     return response;
// }
// }




// wityout email otp 


package com.spring.ankur.chatapp_ankur.service;

import java.time.LocalDateTime;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.spring.ankur.chatapp_ankur.dto.AuthResponse;
import com.spring.ankur.chatapp_ankur.dto.LoginRequest;
import com.spring.ankur.chatapp_ankur.dto.RegisterRequest;
import com.spring.ankur.chatapp_ankur.dto.UserResponse;
import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       JwtService jwtService) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    // =========================
    // REGISTER
    // =========================
    public UserResponse register(RegisterRequest request) {

        String email = request.getEmail().trim().toLowerCase();
        String username = request.getUsername().trim();

        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("Email already exists");
        }

        if (userRepository.existsByUsername(username)) {
            throw new RuntimeException("Username already exists");
        }

        User user = new User();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(request.getPassword()));

        user.setEmailVerified(true);
        user.setOnline(false);
        user.setCreatedAt(LocalDateTime.now());
        user.setLastSeen(LocalDateTime.now());

        User saved = userRepository.save(user);

        return map(saved);
    }

    // =========================
    // LOGIN
    // =========================
    public AuthResponse login(LoginRequest request) {

        String email = request.getEmail().trim().toLowerCase();

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Invalid email or password"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid email or password");
        }

        user.setOnline(true);
        user.setLastSeen(LocalDateTime.now());
        userRepository.save(user);

        String token = jwtService.generateToken(user.getId());

        AuthResponse response = new AuthResponse();
        response.setToken(token);
        response.setUser(map(user));

        return response;
    }

    // =========================
    // MAPPER
    // =========================
    private UserResponse map(User user) {

        UserResponse res = new UserResponse();

        res.setId(user.getId());
        res.setUsername(user.getUsername());
        res.setEmail(user.getEmail());
        res.setOnline(user.isOnline());
        res.setLastSeen(user.getLastSeen());
        res.setCreatedAt(user.getCreatedAt());

        return res;
    }
}