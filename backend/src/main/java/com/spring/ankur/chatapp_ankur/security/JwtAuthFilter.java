// package com.spring.ankur.chatapp_ankur.security;

// import com.spring.ankur.chatapp_ankur.service.JwtService;
// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
// import jakarta.servlet.FilterChain;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import java.io.IOException;
// import java.util.Collections;

// @Component
// public class JwtAuthFilter extends OncePerRequestFilter {

//     private final JwtService jwtService;
//     private final UserRepository userRepository;

//     public JwtAuthFilter(JwtService jwtService, UserRepository userRepository) {
//         this.jwtService = jwtService;
//         this.userRepository = userRepository;
//     }

//     @Override
//     protected void doFilterInternal(
//             HttpServletRequest request,
//             HttpServletResponse response,
//             FilterChain filterChain
//     ) throws ServletException, IOException {

//         String path = request.getRequestURI();

//         // ✅ skip auth endpoints
//         if (path.startsWith("/api/auth")) {
//             filterChain.doFilter(request, response);
//             return;
//         }

//         String authHeader = request.getHeader("Authorization");

//         if (authHeader == null || !authHeader.startsWith("Bearer ")) {
//             filterChain.doFilter(request, response);
//             return;
//         }

//         try {
//             String token = authHeader.substring(7);

//             String userId = jwtService.extractUserId(token);

//             User user = userRepository.findById(userId).orElse(null);

//             if (user != null &&
//                 SecurityContextHolder.getContext().getAuthentication() == null) {

//                UsernamePasswordAuthenticationToken auth =
//     new UsernamePasswordAuthenticationToken(
//         user.getId(),   // ✅ store ONLY userId
//         null,
//         Collections.emptyList()
//     );

//                 SecurityContextHolder.getContext().setAuthentication(auth);
//             }

//         } catch (Exception e) {
//             SecurityContextHolder.clearContext();
//         }

//         filterChain.doFilter(request, response);
//     }
// }



// frontend + backend 

// package com.spring.ankur.chatapp_ankur.security;

// import com.spring.ankur.chatapp_ankur.service.JwtService;
// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
// import jakarta.servlet.FilterChain;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import java.io.IOException;
// import java.util.Collections;

// @Component
// public class JwtAuthFilter extends OncePerRequestFilter {

//     private final JwtService jwtService;
//     private final UserRepository userRepository;

//     public JwtAuthFilter(JwtService jwtService, UserRepository userRepository) {
//         this.jwtService = jwtService;
//         this.userRepository = userRepository;
//     }
// @Override
// protected void doFilterInternal(
//         HttpServletRequest request,
//         HttpServletResponse response,
//         FilterChain filterChain
// ) throws ServletException, IOException {

//     if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {
//         filterChain.doFilter(request, response);
//         return;
//     }

//     String path = request.getRequestURI();

//     // if (path.startsWith("/api/auth")) {
//     //     filterChain.doFilter(request, response);
//     //     return;
//     // }

//     if (path.startsWith("/api/auth")) {
//     filterChain.doFilter(request, response);
//     return;
// }

// if (path.startsWith("/api/profile/public")) {
//     filterChain.doFilter(request, response);
//     return;
// }
//     String authHeader = request.getHeader("Authorization");

//     if (authHeader == null || !authHeader.startsWith("Bearer ")) {
//         filterChain.doFilter(request, response);
//         return;
//     }

//     try {
//         String token = authHeader.substring(7);

//         String userId = jwtService.extractUserId(token);

//         if (!jwtService.validate(token, userId)) {
//             SecurityContextHolder.clearContext();
//             filterChain.doFilter(request, response);
//             return;
//         }

//         if (SecurityContextHolder.getContext().getAuthentication() == null) {

//             User user = userRepository.findById(userId).orElse(null);

//             if (user != null) {
//                 UsernamePasswordAuthenticationToken auth =
//                         new UsernamePasswordAuthenticationToken(
//                                 userId,
//                                 null,
//                                 Collections.emptyList()
//                         );

//                 SecurityContextHolder.getContext().setAuthentication(auth);
//             }
//         }

//     } catch (Exception e) {
//         SecurityContextHolder.clearContext();
//     }

//     filterChain.doFilter(request, response);
// }

// }


// more advance 

// package com.spring.ankur.chatapp_ankur.security;

// import com.spring.ankur.chatapp_ankur.service.JwtService;
// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
// import jakarta.servlet.FilterChain;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import java.io.IOException;
// import java.util.Collections;

// @Component
// public class JwtAuthFilter extends OncePerRequestFilter {

//     private final JwtService jwtService;
//     private final UserRepository userRepository;

//     public JwtAuthFilter(JwtService jwtService, UserRepository userRepository) {
//         this.jwtService = jwtService;
//         this.userRepository = userRepository;
//     }

//     @Override
//     protected void doFilterInternal(
//             HttpServletRequest request,
//             HttpServletResponse response,
//             FilterChain filterChain
//     ) throws ServletException, IOException {

//         String path = request.getRequestURI();
//         String method = request.getMethod();

//         // ===============================
//         // 1. SKIP OPTIONS (CORS preflight)
//         // ===============================
//         if ("OPTIONS".equalsIgnoreCase(method)) {
//             filterChain.doFilter(request, response);
//             return;
//         }

//         // ===============================
//         // 2. PUBLIC ROUTES (NO AUTH NEEDED)
//         // ===============================
//         if (isPublicRoute(path)) {
//             filterChain.doFilter(request, response);
//             return;
//         }

//         // ===============================
//         // 3. READ TOKEN
//         // ===============================
//         String authHeader = request.getHeader("Authorization");

//         if (authHeader == null || !authHeader.startsWith("Bearer ")) {
//             filterChain.doFilter(request, response);
//             return;
//         }

//         try {
//             String token = authHeader.substring(7);

//             String userId = jwtService.extractUserId(token);

//             if (!jwtService.validate(token, userId)) {
//                 SecurityContextHolder.clearContext();
//                 filterChain.doFilter(request, response);
//                 return;
//             }

//             if (SecurityContextHolder.getContext().getAuthentication() == null) {

//                 User user = userRepository.findById(userId).orElse(null);

//                 if (user != null) {
//                     UsernamePasswordAuthenticationToken auth =
//                             new UsernamePasswordAuthenticationToken(
//                                     userId,
//                                     null,
//                                     Collections.emptyList()
//                             );

//                     SecurityContextHolder.getContext().setAuthentication(auth);
//                 }
//             }

//         } catch (Exception e) {
//             SecurityContextHolder.clearContext();
//         }

//         filterChain.doFilter(request, response);
//     }

//     // ===============================
//     // CENTRALIZED PUBLIC ROUTES
//     // ===============================
//     private boolean isPublicRoute(String path) {
//         return path.startsWith("/api/auth")
//                 || path.startsWith("/api/profile/public");
//     }
// }



// more advance 


package com.spring.ankur.chatapp_ankur.security;

import com.spring.ankur.chatapp_ankur.service.JwtService;
import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserRepository userRepository;

    public JwtAuthFilter(JwtService jwtService, UserRepository userRepository) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");

        // ❌ no token → just continue (DO NOT BLOCK)
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        try {
            String token = authHeader.substring(7);
            String userId = jwtService.extractUserId(token);

            if (jwtService.validate(token, userId)) {

                User user = userRepository.findById(userId).orElse(null);

                if (user != null && SecurityContextHolder.getContext().getAuthentication() == null) {

                    UsernamePasswordAuthenticationToken auth =
                            new UsernamePasswordAuthenticationToken(
                                    userId,
                                    null,
                                    Collections.emptyList()
                            );

                    SecurityContextHolder.getContext().setAuthentication(auth);
                }
            }

        } catch (Exception e) {
            SecurityContextHolder.clearContext();
        }

        filterChain.doFilter(request, response);
    }
}