// package com.spring.ankur.chatapp_ankur.service;

// import java.nio.charset.StandardCharsets;
// import java.util.Date;

// import javax.crypto.SecretKey;

// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.stereotype.Service;

// import io.jsonwebtoken.Jwts;
// import io.jsonwebtoken.security.Keys;

// /**
//  * Service responsible for creating and validating JWT tokens.
//  *
//  * This class ONLY deals with JWT operations.
//  * It does NOT talk to the database or contain login logic.
//  */
// @Service
// public class JwtService {

//     /**
//      * Secret key loaded from application.yaml
//      */
//     @Value("${jwt.secret}")
//     private String jwtSecret;

//     /**
//      * Token expiration time (milliseconds)
//      */
//     @Value("${jwt.expiration}")
//     private long jwtExpiration;

//     /**
//      * Convert the configured secret string into a SecretKey object.
//      */
//     private SecretKey getSigningKey() {
//         return Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
//     }

//     /**
//      * Generate a JWT containing the user's email.
//      */
//       public String generateToken(String userId) {
//     Date now = new Date();
//     Date expiryDate = new Date(now.getTime() + jwtExpiration);

//     return Jwts.builder()
//             .subject(userId)           // Store the user ID as the subject
//             .issuedAt(now)
//             .expiration(expiryDate)
//             .signWith(getSigningKey())
//             .compact();
// }


//     /**
//  * Extract the user's email from the JWT token.
//  *
//  * Why?
//  * During token generation, we stored the email as the JWT "subject".
//  * This method reads it back after verifying the token signature.
//  */
// /**
//  * Extract the user ID stored in the JWT subject.
//  */
// public String extractUserId(String token) {

//     return Jwts.parser()
//             .verifyWith(getSigningKey())
//             .build()
//             .parseSignedClaims(token)
//             .getPayload()
//             .getSubject();
// }

// /**
//  * Check whether the token belongs to the expected user
//  * and has not expired.
//  */
// /**
//  * Verify that the token belongs to the expected user
//  * and has not expired.
//  */
// public boolean isTokenValid(String token, String expectedUserId) {

//     try {

//         // Read user ID stored inside the token
//         String tokenUserId = extractUserId(token);

//         // Read expiration time
//         Date expiration = Jwts.parser()
//                 .verifyWith(getSigningKey())
//                 .build()
//                 .parseSignedClaims(token)
//                 .getPayload()
//                 .getExpiration();

//         return tokenUserId.equals(expectedUserId)
//                 && expiration.after(new Date());

//     } catch (Exception ex) {
//         // Invalid signature, malformed token, expired token, etc.
//         return false;
//     }
// }

// }






///
/// 

// package com.spring.ankur.chatapp_ankur.service;

// import java.nio.charset.StandardCharsets;
// import java.util.Date;

// import javax.crypto.SecretKey;

// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.stereotype.Service;

// import io.jsonwebtoken.Claims;
// import io.jsonwebtoken.Jwts;
// import io.jsonwebtoken.security.Keys;
// import io.jsonwebtoken.SignatureAlgorithm;

// /**
//  * JWT SERVICE (CLEAN VERSION)
//  * --------------------------
//  * Handles ONLY:
//  * 1. Token generation
//  * 2. Token parsing
//  * 3. Token validation
//  *
//  * No DB, no business logic.
//  */
// @Service
// public class JwtService {

//     @Value("${jwt.secret}")
//     private String jwtSecret;

//     @Value("${jwt.expiration}")
//     private long jwtExpiration;

//     // =====================================================
//     // SIGNING KEY
//     // =====================================================
//     private SecretKey getSigningKey() {
//         return Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
//     }

//     // =====================================================
//     // GENERATE TOKEN
//     // =====================================================
//     public String generateToken(String userId) {

//         Date now = new Date();
//         Date expiryDate = new Date(now.getTime() + jwtExpiration);

//         return Jwts.builder()
//                 .subject(userId) // storing userId in token
//                 .issuedAt(now)
//                 .expiration(expiryDate)
//                 .signWith(getSigningKey(), SignatureAlgorithm.HS256)
//                 .compact();
//     }

//     // =====================================================
//     // EXTRACT ALL CLAIMS (CORE METHOD)
//     // =====================================================
//     private Claims extractAllClaims(String token) {
//         return Jwts.parser()
//                 .verifyWith(getSigningKey())
//                 .build()
//                 .parseSignedClaims(token)
//                 .getPayload();
//     }

//     // =====================================================
//     // EXTRACT USER ID
//     // =====================================================
//     public String extractUserId(String token) {
//         return extractAllClaims(token).getSubject();
//     }

//     // =====================================================
//     // CHECK TOKEN VALIDITY
//     // =====================================================
//     public boolean isTokenValid(String token, String expectedUserId) {

//         try {
//             Claims claims = extractAllClaims(token);

//             String tokenUserId = claims.getSubject();
//             Date expiration = claims.getExpiration();

//             return tokenUserId.equals(expectedUserId)
//                     && expiration.after(new Date());

//         } catch (Exception e) {
//             // invalid token, expired, malformed, etc.
//             return false;
//         }
//     }
// }






package com.spring.ankur.chatapp_ankur.service;

import java.nio.charset.StandardCharsets;
import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private long jwtExpiration;

    private SecretKey key() {
        return Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));
    }

    public String generateToken(String userId) {

        Date now = new Date();
        Date exp = new Date(now.getTime() + jwtExpiration);

        return Jwts.builder()
                .subject(userId)
                .issuedAt(now)
                .expiration(exp)
                .signWith(key())
                .compact();
    }

    public String extractUserId(String token) {
        return parse(token).getSubject();
    }

    public boolean validate(String token, String userId) {
        try {
            Claims claims = parse(token);
            return claims.getSubject().equals(userId)
                    && claims.getExpiration().after(new Date());
        } catch (Exception e) {
            return false;
        }
    }

    private Claims parse(String token) {
        return Jwts.parser()
                .verifyWith(key())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
}