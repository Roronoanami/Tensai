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




//version2 


// package com.spring.ankur.chatapp_ankur.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// public class SecurityConfig {

//     // =========================
//     // SECURITY FILTER CHAIN
//     // =========================
//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

//         http
//             .csrf(csrf -> csrf.disable())
//             .authorizeHttpRequests(auth -> auth
//                 .requestMatchers("/chat/**").permitAll()
//                 .requestMatchers("/app/**").permitAll()
//                 .requestMatchers("/topic/**").permitAll()
//                 .requestMatchers("/api/auth/**").permitAll() // for future login/register
//                 .anyRequest().authenticated()
//             );

//         return http.build();
//     }

//     // =========================
//     // PASSWORD ENCODER (BCrypt)
//     // =========================
//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }
// }


//version3 

// package com.spring.ankur.chatapp_ankur.config;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.http.SessionCreationPolicy;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// public class SecurityConfig {

//     // =========================
//     // SECURITY FILTER CHAIN
//     // =========================
//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

//         http
//             // Disable CSRF for stateless APIs (JWT)
//             .csrf(csrf -> csrf.disable())

//             // IMPORTANT: JWT = stateless
//             .sessionManagement(session ->
//                 session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//             )

//             .authorizeHttpRequests(auth -> auth

//                 // Public auth endpoints
//                 .requestMatchers("/api/auth/**").permitAll()

//                 // WebSocket/STOMP endpoints (for now open)
//                 .requestMatchers("/chat/**").permitAll()
//                 .requestMatchers("/app/**").permitAll()
//                 .requestMatchers("/topic/**").permitAll()

//                 // Everything else protected
//                 .anyRequest().authenticated()
//             );

//         return http.build();
//     }

//     // =========================
//     // PASSWORD ENCODER
//     // =========================
//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }
// }


//older veriosn 

// package com.spring.ankur.chatapp_ankur.config;

// import com.spring.ankur.chatapp_ankur.security.JwtAuthFilter;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.http.SessionCreationPolicy;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

// @Configuration
// public class SecurityConfig {

//     private final JwtAuthFilter jwtAuthFilter;

//     public SecurityConfig(JwtAuthFilter jwtAuthFilter) {
//         this.jwtAuthFilter = jwtAuthFilter;
//     }

//    @Bean
// public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

//     http
//         .csrf(csrf -> csrf.disable())
//         .authorizeHttpRequests(auth -> auth
//             .anyRequest().permitAll()
//         );

//     return http.build();
// }

//     // 🔥 THIS IS WHAT YOU ARE MISSING
//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }
// }


//new version 



// package com.spring.ankur.chatapp_ankur.config;

// import com.spring.ankur.chatapp_ankur.security.JwtAuthFilter;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.http.SessionCreationPolicy;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
// import org.springframework.web.cors.CorsConfiguration;
// import org.springframework.web.cors.CorsConfigurationSource;
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

// import java.util.List;

// @Configuration
// public class SecurityConfig {

//     private final JwtAuthFilter jwtAuthFilter;

//     public SecurityConfig(JwtAuthFilter jwtAuthFilter) {
//         this.jwtAuthFilter = jwtAuthFilter;
//     }

//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

//         http
//             .csrf(csrf -> csrf.disable())

//             // ✅ IMPORTANT: use real CORS config
//             .cors(cors -> cors.configurationSource(corsConfigurationSource()))

//             .sessionManagement(session ->
//                 session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//             )

// //            .authorizeHttpRequests(auth -> auth
// //     .requestMatchers("/api/auth/**").permitAll()

// //     // ✅ PUBLIC PROFILE (no login required)
// //     .requestMatchers("/api/profile/public/**").permitAll()

// //     // 🔒 ONLY OWN PROFILE
// //     .requestMatchers("/api/profile/me").authenticated()

// //     // everything else secured
// //     .anyRequest().authenticated()
// // );

// .authorizeHttpRequests(auth -> auth
//     .requestMatchers("/api/auth/**").permitAll()
//     .requestMatchers("/api/profile/public/**").permitAll()
//     .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll() // 🔥 ADD THIS
//     .requestMatchers("/api/profile/me").authenticated()
//     .anyRequest().authenticated()
// );

//         http.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

//         return http.build();
//     }

//     // ✅ THIS IS THE MISSING PIECE (fixes CORS + preflight 403)
//     @Bean
//     public CorsConfigurationSource corsConfigurationSource() {

//         CorsConfiguration config = new CorsConfiguration();

//         config.setAllowedOrigins(List.of("http://localhost:3000"));
//         config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
//         config.setAllowedHeaders(List.of("*"));
//         config.setAllowCredentials(true);

//         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//         source.registerCorsConfiguration("/**", config);

//         return source;
//     }

//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }
// }



// more advance 

// package com.spring.ankur.chatapp_ankur.config;

// import com.spring.ankur.chatapp_ankur.security.JwtAuthFilter;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.http.HttpMethod;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.http.SessionCreationPolicy;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
// import org.springframework.web.cors.CorsConfiguration;
// import org.springframework.web.cors.CorsConfigurationSource;
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

// import java.util.List;

// @Configuration
// public class SecurityConfig {

//     private final JwtAuthFilter jwtAuthFilter;

//     public SecurityConfig(JwtAuthFilter jwtAuthFilter) {
//         this.jwtAuthFilter = jwtAuthFilter;
//     }

//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

//         http
//             // ================= CSRF =================
//             .csrf(csrf -> csrf.disable())

//             // ================= CORS =================
//             .cors(cors -> cors.configurationSource(corsConfigurationSource()))

//             // ================= SESSION (JWT = STATELESS) =================
//             .sessionManagement(session ->
//                 session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//             )

//             // ================= AUTH RULES =================
//             .authorizeHttpRequests(auth -> auth
//                 .requestMatchers("/api/auth/**").permitAll()
//                 .requestMatchers("/api/profile/public/**").permitAll()
//                 .requestMatchers("/api/profile/me").authenticated()
//                 .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
//                 .anyRequest().authenticated()
//             );

//         // ================= JWT FILTER =================
//         http.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

//         return http.build();
//     }

//     // ================= CORS CONFIG =================
//     @Bean
//     public CorsConfigurationSource corsConfigurationSource() {

//         CorsConfiguration config = new CorsConfiguration();

//         config.setAllowedOrigins(List.of("http://localhost:3000"));

//         // safer than "*", avoids weird preflight issues
//         config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));

//         config.setAllowedHeaders(List.of("*"));

//         config.setAllowCredentials(true);

//         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//         source.registerCorsConfiguration("/**", config);

//         return source;
//     }

//     // ================= PASSWORD =================
//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();
//     }
// }



// most advance 



package com.spring.ankur.chatapp_ankur.config;

import com.spring.ankur.chatapp_ankur.security.JwtAuthFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class SecurityConfig {

    private final JwtAuthFilter jwtAuthFilter;

    public SecurityConfig(JwtAuthFilter jwtAuthFilter) {
        this.jwtAuthFilter = jwtAuthFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
            .csrf(csrf -> csrf.disable())
            .cors(cors -> cors.configurationSource(corsConfigurationSource()))
            .sessionManagement(session ->
                session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            )
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/profile/public/**").permitAll()
                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .requestMatchers("/api/profile/me").authenticated()
                .anyRequest().authenticated()
            );

        http.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {

        CorsConfiguration config = new CorsConfiguration();

        config.setAllowedOrigins(List.of("http://localhost:3000"));

        // 🔥 IMPORTANT FIX (this is your missing piece)
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));

        config.setAllowedHeaders(List.of("*"));

        config.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return source;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}