// package com.spring.ankur.chatapp_ankur.entities;

// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// import org.springframework.data.annotation.Id;
// import org.springframework.data.mongodb.core.index.Indexed;
// import org.springframework.data.mongodb.core.mapping.Document;

// import java.time.LocalDateTime;

// /**
//  * Stores temporary OTPs for email verification.
//  *
//  * Each document represents the latest OTP issued for an email address.
//  */
// @Document(collection = "otps")
// @Getter
// @Setter
// @NoArgsConstructor
// @AllArgsConstructor
// public class Otp {

//     /**
//      * MongoDB document ID.
//      */
//     @Id
//     private String id;

//     /**
//      * Email address associated with this OTP.
//      */
//     @Indexed
//     private String email;

//     /**
//      * The generated OTP code.
//      * Example: "483921"
//      */
//     private String otpCode;

//     /**
//      * Time after which the OTP should no longer be accepted.
//      */
//     private LocalDateTime expiresAt;

//     /**
//      * When this OTP record was created.
//      */
//     private LocalDateTime createdAt = LocalDateTime.now();
// }