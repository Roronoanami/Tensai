// package com.spring.ankur.chatapp_ankur.entities;

// import lombok.*;
// import org.springframework.data.mongodb.core.index.Indexed;
// import org.springframework.data.annotation.Id;
// import org.springframework.data.mongodb.core.mapping.Document;

// import java.time.LocalDateTime;

// @Document(collection = "users")
// @Getter
// @Setter
// @NoArgsConstructor
// @AllArgsConstructor
// public class User {

//     @Id
//     private String id;

//     private String username;
   
    
//      // Every email should be unique.
//      @Indexed(unique = true)
// private String email;
// // email verification 
// private boolean emailVerified = false;
//  // Store only BCrypt-hashed passwords here.
//     private String password;


//     private String profilePicture;
//     private String bio;
//     private boolean online = false;

//     private LocalDateTime lastSeen;

//     private LocalDateTime createdAt = LocalDateTime.now();
// }



package com.spring.ankur.chatapp_ankur.entities;

import lombok.*;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    private String id;

    private String username;
    private String email;
    private String password;

    private boolean emailVerified = true;
    private boolean online = false;

    private LocalDateTime lastSeen;
    private LocalDateTime createdAt;
}