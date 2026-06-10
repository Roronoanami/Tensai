// package com.spring.ankur.chatapp_ankur.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// public class SecurityConfig {

//     @Bean
//     public SecurityFilterChain securityFilterChain(
//             HttpSecurity http) throws Exception {

//         http
//                 .csrf(csrf -> csrf.disable())

//                 .authorizeHttpRequests(auth -> auth

//                         // WebSocket endpoint
//                         .requestMatchers("/chat").permitAll()

//                         // STOMP endpoints
//                         .requestMatchers("/app/**").permitAll()
//                         .requestMatchers("/topic/**").permitAll()

//                         // REST APIs
//                         .requestMatchers("/api/**").permitAll()

//                         // Learning mode:
//                         .anyRequest().permitAll()
//                 );

//         return http.build();
//     }
// }


package com.spring.ankur.chatapp_ankur.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    // =========================
    // SECURITY FILTER CHAIN
    // =========================
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/chat/**").permitAll()
                .requestMatchers("/app/**").permitAll()
                .requestMatchers("/topic/**").permitAll()
                .requestMatchers("/api/auth/**").permitAll() // for future login/register
                .anyRequest().authenticated()
            );

        return http.build();
    }

    // =========================
    // PASSWORD ENCODER (BCrypt)
    // =========================
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}