// package com.spring.ankur.chatapp_ankur.service;
// import org.springframework.mail.SimpleMailMessage;
// import org.springframework.mail.javamail.JavaMailSender;
// import org.springframework.stereotype.Service;

// @Service
// public class EmailService {

//     // Spring component responsible for sending emails
//     private final JavaMailSender mailSender;

//     // Constructor injection
//     public EmailService(JavaMailSender mailSender) {
//         this.mailSender = mailSender;
//     }

//     /**
//      * Sends an OTP email to the specified address.
//      *
//      * @param toEmail recipient email
//      * @param otp      one-time password to include
//      */
//     public void sendOtpEmail(String toEmail, String otp) {

//         // Create a simple email message
//         SimpleMailMessage message = new SimpleMailMessage();

//         // Recipient
//         message.setTo(toEmail);

//         // Email subject
//         message.setSubject("Verify Your Email");

//         // Email body
//         message.setText(
//                 "Your verification code is: " + otp
//                         + "\n\nThis code will expire in a few minutes."
//         );

//         // Send the email
//         mailSender.send(message);
//     }

//     /**
//  * Generates a random 6-digit OTP.
//  */
// public String generateOtp() {

//     int otp = 100000 + (int) (Math.random() * 900000);

//     return String.valueOf(otp);
// }
// }