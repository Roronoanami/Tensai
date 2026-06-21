

///////////////////////////
/// ////////////////////////
/// _________More advance -------
/// ///////////////
/// //////////////////////////
/// ///////////////
/// 
/// 
// 

// package com.spring.ankur.chatapp_ankur.service;

// import com.spring.ankur.chatapp_ankur.dto.UserResponse;
// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.repositories.UserRepository;


// import org.springframework.stereotype.Service;

// import java.time.LocalDateTime;
 

// @Service
// public class UserService {

//     private final UserRepository userRepository;
  

//     // =========================
//     // SINGLE CLEAN CONSTRUCTOR
//     // =========================
//   public UserService(UserRepository userRepository) {
//     this.userRepository = userRepository;
// }

//     // =========================
//     // LOGOUT
//     // =========================
//     public void logoutUser(String email) {

//         User user = getUserEntityByEmail(email);

//         user.setOnline(false);
//         user.setLastSeen(LocalDateTime.now());

//         userRepository.save(user);
//     }

//     // =========================
//     // GET USER
//     // =========================
//     public UserResponse getUserByEmail(String email) {

//         return mapToResponse(getUserEntityByEmail(email));
//     }



//     // =========================
//     // COMMON FETCH
//     // =========================
//     private User getUserEntityByEmail(String email) {

//         return userRepository.findByEmail(email)
//                 .orElseThrow(() -> new RuntimeException("User not found"));
//     }

//     // =========================
//     // MAPPER
//     // =========================
//     private UserResponse mapToResponse(User user) {

//         UserResponse response = new UserResponse();

//         response.setId(user.getId());
//         response.setUsername(user.getUsername());
//         response.setEmail(user.getEmail());
//         response.setBio(user.getBio());
//         response.setOnline(user.isOnline());
//         response.setLastSeen(user.getLastSeen());
//         response.setCreatedAt(user.getCreatedAt());

//         return response;
//     }
// }