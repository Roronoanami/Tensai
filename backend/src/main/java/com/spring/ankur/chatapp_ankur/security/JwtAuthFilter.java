


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



//     public JwtAuthFilter(
//             JwtService jwtService,
//             UserRepository userRepository
//     ) {

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




// if (
//     path.startsWith("/api/auth")
//     || path.startsWith("/api/profile/public")
//     || path.startsWith("/api/search")
//     || path.startsWith("/api/follow/followers")
//     || path.startsWith("/api/follow/following")
//     || path.matches("^/api/activity/.+/like/count$")
// ) {

//     filterChain.doFilter(request, response);
//     return;
// }




//         String authHeader = request.getHeader("Authorization");



       
//         if (
//                 authHeader == null
//                 ||
//                 !authHeader.startsWith("Bearer ")
//         ) {

//             filterChain.doFilter(request, response);
//             return;

//         }




//         try {


// String token = authHeader.substring(7);

// String userId = jwtService.extractUserId(token);

// System.out.println("JWT User ID = " + userId);

// if (jwtService.validate(token, userId)) {

//     User user = userRepository.findById(userId).orElse(null);

//     if (user != null &&
//         SecurityContextHolder.getContext().getAuthentication() == null) {

//         UsernamePasswordAuthenticationToken authentication =
//                 new UsernamePasswordAuthenticationToken(
//                         userId,
//                         null,
//                         Collections.emptyList()
//                 );

//         SecurityContextHolder.getContext().setAuthentication(authentication);

//         System.out.println("JWT AUTHENTICATED");
//     }
// }


//         }
//         catch(Exception e){


//             SecurityContextHolder.clearContext();


//         }





//         filterChain.doFilter(request,response);

//     }

// }










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



//     public JwtAuthFilter(
//             JwtService jwtService,
//             UserRepository userRepository
//     ) {

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




// if (
//     path.startsWith("/api/auth")
//     || path.startsWith("/api/profile/public")
//     || path.startsWith("/api/search")
//     || path.startsWith("/api/follow/followers")
//     || path.startsWith("/api/follow/following")
//     || path.matches("^/api/activity/.+/like/count$")
// ) {

//     filterChain.doFilter(request, response);
//     return;
// }




//         String authHeader = request.getHeader("Authorization");



       
//         if (
//                 authHeader == null
//                 ||
//                 !authHeader.startsWith("Bearer ")
//         ) {

//             filterChain.doFilter(request, response);
//             return;

//         }




//         try {


// String token = authHeader.substring(7);

// String userId = jwtService.extractUserId(token);

// System.out.println("JWT User ID = " + userId);

// boolean valid = jwtService.validate(token, userId);

// System.out.println("JWT VALID = " + valid);

// if (valid) {
//     User user = userRepository.findById(userId).orElse(null);

//     if (user != null &&
//         SecurityContextHolder.getContext().getAuthentication() == null) {

//         UsernamePasswordAuthenticationToken authentication =
//                 new UsernamePasswordAuthenticationToken(
//                         userId,
//                         null,
//                         Collections.emptyList()
//                 );

//         SecurityContextHolder.getContext().setAuthentication(authentication);

// System.out.println("JWT AUTHENTICATED");
// System.out.println("Authenticated User = " + authentication.getName());
//     }
// }


//         }
//         catch(Exception e){


//             SecurityContextHolder.clearContext();


//         }





//         filterChain.doFilter(request,response);

//     }

// }






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



//     public JwtAuthFilter(
//             JwtService jwtService,
//             UserRepository userRepository
//     ) {

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




// if (
//     path.startsWith("/api/auth")
//     || path.startsWith("/api/profile/public")
//     || path.startsWith("/api/search")
//     || path.startsWith("/api/follow/followers")
//     || path.startsWith("/api/follow/following")
//     || path.matches("^/api/activity/.+/like/count$")
//     || path.startsWith("/chat")
// ) {

//     filterChain.doFilter(request, response);
//     return;
// }




//         String authHeader = request.getHeader("Authorization");



       
//         if (
//                 authHeader == null
//                 ||
//                 !authHeader.startsWith("Bearer ")
//         ) {

//             filterChain.doFilter(request, response);
//             return;

//         }




//         try {


// String token = authHeader.substring(7);

// String userId = jwtService.extractUserId(token);

// System.out.println("JWT User ID = " + userId);

// boolean valid = jwtService.validate(token, userId);

// System.out.println("JWT VALID = " + valid);

// if (valid) {
//     User user = userRepository.findById(userId).orElse(null);

//     if (user != null &&
//         SecurityContextHolder.getContext().getAuthentication() == null) {

//         UsernamePasswordAuthenticationToken authentication =
//                 new UsernamePasswordAuthenticationToken(
//                         userId,
//                         null,
//                         Collections.emptyList()
//                 );

//         SecurityContextHolder.getContext().setAuthentication(authentication);

// System.out.println("JWT AUTHENTICATED");
// System.out.println("Authenticated User = " + authentication.getName());
//     }
// }


//         }
//         catch(Exception e){


//             SecurityContextHolder.clearContext();


//         }





//         filterChain.doFilter(request,response);

//     }

// }






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



    public JwtAuthFilter(
            JwtService jwtService,
            UserRepository userRepository
    ) {

        this.jwtService = jwtService;
        this.userRepository = userRepository;

    }



    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {



        String path = request.getRequestURI();




if (
    path.startsWith("/api/auth")
    || path.startsWith("/api/profile/public")
    || path.startsWith("/api/search")
    || path.startsWith("/api/follow/followers")
    || path.startsWith("/api/follow/following")
    || path.matches("^/api/activity/.+/like/count$")
    || path.startsWith("/chat")
) {

    filterChain.doFilter(request, response);
    return;
}




        String authHeader = request.getHeader("Authorization");



       
        if (
                authHeader == null
                ||
                !authHeader.startsWith("Bearer ")
        ) {

            filterChain.doFilter(request, response);
            return;

        }




        try {


String token = authHeader.substring(7);

String userId = jwtService.extractUserId(token);

System.out.println("JWT User ID = " + userId);

boolean valid = jwtService.validate(token, userId);

System.out.println("JWT VALID = " + valid);

if (valid) {
    User user = userRepository.findById(userId).orElse(null);

    if (user != null &&
        SecurityContextHolder.getContext().getAuthentication() == null) {

        UsernamePasswordAuthenticationToken authentication =
                new UsernamePasswordAuthenticationToken(
                        userId,
                        null,
                        Collections.emptyList()
                );

        SecurityContextHolder.getContext().setAuthentication(authentication);

System.out.println("JWT AUTHENTICATED");
System.out.println("Authenticated User = " + authentication.getName());
    }
}


        }
        catch(Exception e){


            SecurityContextHolder.clearContext();


        }





        filterChain.doFilter(request,response);

    }

}