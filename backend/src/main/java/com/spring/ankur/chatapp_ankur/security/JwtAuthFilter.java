


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






// package com.spring.ankur.chatapp_ankur.security;

// import com.spring.ankur.chatapp_ankur.service.JwtService;
// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.repositories.UserRepository;

// import jakarta.servlet.FilterChain;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;

// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import java.util.List;
// import java.io.IOException;



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



//         // String path = request.getRequestURI();
// String path = request.getRequestURI();

// System.out.println("REQUEST PATH = " + path);
// System.out.println("AUTH HEADER = " + request.getHeader("Authorization"));



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

// // if (valid) {
// //     User user = userRepository.findById(userId).orElse(null);

// //     if (user != null &&
// //         SecurityContextHolder.getContext().getAuthentication() == null) {
// //           System.out.println(
// //     "AUTH USER = " +
// //     SecurityContextHolder
// //     .getContext()
// //     .getAuthentication()
// //     .getName()
// // );
// //         // UsernamePasswordAuthenticationToken authentication =
// //         //         new UsernamePasswordAuthenticationToken(
// //         //                 userId,
// //         //                 null,
// //         //                 Collections.emptyList()
// //         //         );
// //         UsernamePasswordAuthenticationToken authentication =
// //         new UsernamePasswordAuthenticationToken(
// //                 userId,
// //                 null,
// //                 List.of(
// //                     new SimpleGrantedAuthority("ROLE_USER")
// //                 )
// //         );

// //         SecurityContextHolder.getContext().setAuthentication(authentication);

// // System.out.println("JWT AUTHENTICATED");
// // System.out.println("Authenticated User = " + authentication.getName());
// //     }
// // }


// if (valid) {

//     User user = userRepository
//             .findById(userId)
//             .orElse(null);


//     if (user != null) {


//         UsernamePasswordAuthenticationToken authentication =
//                 new UsernamePasswordAuthenticationToken(
//                         userId,
//                         null,
//                         List.of(
//                             new SimpleGrantedAuthority("ROLE_USER")
//                         )
//                 );


//         SecurityContextHolder
//                 .getContext()
//                 .setAuthentication(authentication);



//         System.out.println("JWT AUTHENTICATED");
//         System.out.println(
//                 "Authenticated User = "
//                 + authentication.getName()
//         );

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

// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
// import com.spring.ankur.chatapp_ankur.service.JwtService;

// import jakarta.servlet.FilterChain;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;

// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.core.context.SecurityContextHolder;

// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import java.io.IOException;
// import java.util.List;


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
//     )
//             throws ServletException, IOException {


//         String path = request.getRequestURI();


//         System.out.println(
//                 "JWT FILTER PATH : " + path
//         );


//         // PUBLIC APIs

//         if(
//                 path.startsWith("/api/auth")
//                 ||
//                 path.startsWith("/api/profile/public")
//                 ||
//                 path.startsWith("/api/search")
//                 ||
//                 path.startsWith("/api/follow/followers")
//                 ||
//                 path.startsWith("/api/following")
//                 ||
//                 path.matches("^/api/activity/.+/like/count$")
//                 ||
//                 path.startsWith("/chat")
//         ){

//             filterChain.doFilter(request,response);
//             return;
//         }



//         String authHeader =
//                 request.getHeader("Authorization");



//         System.out.println(
//                 "AUTH HEADER : " + authHeader
//         );



//         if(
//                 authHeader == null ||
//                 !authHeader.startsWith("Bearer ")
//         ){

//             filterChain.doFilter(request,response);
//             return;

//         }



//         try {


//             String token =
//                     authHeader.substring(7);



//             String userId =
//                     jwtService.extractUserId(token);



//             System.out.println(
//                     "TOKEN USER ID : " + userId
//             );



//             boolean valid =
//                     jwtService.validate(
//                             token,
//                             userId
//                     );



//             System.out.println(
//                     "TOKEN VALID : " + valid
//             );



//             if(valid && 
//               SecurityContextHolder
//               .getContext()
//               .getAuthentication() == null
//             ){


//                 User user =
//                         userRepository
//                         .findById(userId)
//                         .orElse(null);



//                 if(user != null){


//                     UsernamePasswordAuthenticationToken authentication =
//                             new UsernamePasswordAuthenticationToken(
//                                     userId,
//                                     null,
//                                     List.of(
//                                         new SimpleGrantedAuthority(
//                                                 "ROLE_USER"
//                                         )
//                                     )
//                             );



//                     SecurityContextHolder
//                             .getContext()
//                             .setAuthentication(
//                                     authentication
//                             );



//                     System.out.println(
//                             "JWT LOGIN SUCCESS : "
//                             +
//                             authentication.getName()
//                     );


//                 }
//                 else {


//                     System.out.println(
//                             "USER NOT FOUND : "
//                             + userId
//                     );

//                 }


//             }



//         }
//         catch(Exception e){


//             System.out.println(
//                     "JWT ERROR : "
//                     + e.getMessage()
//             );


//             SecurityContextHolder
//                     .clearContext();

//         }



//         System.out.println(
//                 "FINAL AUTH : "
//                 +
//                 SecurityContextHolder
//                 .getContext()
//                 .getAuthentication()
//         );



//         filterChain.doFilter(
//                 request,
//                 response
//         );

//     }

// }





// package com.spring.ankur.chatapp_ankur.security;

// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
// import com.spring.ankur.chatapp_ankur.service.JwtService;

// import jakarta.servlet.FilterChain;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;

// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.authority.SimpleGrantedAuthority;
// import org.springframework.security.core.context.SecurityContextHolder;

// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import java.io.IOException;
// import java.util.List;


// @Component
// public class JwtAuthFilter extends OncePerRequestFilter {


//     private final JwtService jwtService;
//     private final UserRepository userRepository;


//     public JwtAuthFilter(
//             JwtService jwtService,
//             UserRepository userRepository
//     ){
//         this.jwtService = jwtService;
//         this.userRepository = userRepository;
//     }



//     @Override
//     protected void doFilterInternal(
//             HttpServletRequest request,
//             HttpServletResponse response,
//             FilterChain filterChain
//     )
//             throws ServletException, IOException {



//         String path = request.getRequestURI();
    

//         System.out.println("PATH : " + path);



//         // PUBLIC API

//         if(
//                 path.startsWith("/api/auth")
//                 ||
//                 path.startsWith("/api/profile/public")
//                 ||
//                 path.startsWith("/api/search")
//                 ||
//                 path.startsWith("/chat")
//         ){
//   System.out.println(
//     "FINAL AUTH = " +
//     SecurityContextHolder.getContext().getAuthentication()
// );
//             filterChain.doFilter(
//                     request,
//                     response
//             );

//             return;
//         }




//         String header =
//                 request.getHeader("Authorization");



//         System.out.println(
//                 "AUTH HEADER : " + header
//         );



//         if(header == null ||
//                 !header.startsWith("Bearer ")){

//             filterChain.doFilter(
//                     request,
//                     response
//             );

//             return;
//         }



//         try {


//             String token =
//                     header.substring(7);



//             String userId =
//                     jwtService.extractUserId(token);



//             boolean valid =
//                     jwtService.validate(
//                             token,
//                             userId
//                     );



//             System.out.println(
//                     "TOKEN VALID : " + valid
//             );



//             if(valid &&
//                     SecurityContextHolder
//                     .getContext()
//                     .getAuthentication()
//                     == null){


//                 User user =
//                         userRepository
//                         .findById(userId)
//                         .orElse(null);



//                 if(user != null){


//                     UsernamePasswordAuthenticationToken auth =

//                             new UsernamePasswordAuthenticationToken(
//                                     userId,
//                                     null,
//                                     List.of(
//                                         new SimpleGrantedAuthority(
//                                                 "ROLE_USER"
//                                         )
//                                     )
//                             );



//                     SecurityContextHolder
//                             .getContext()
//                             .setAuthentication(auth);



//                     System.out.println(
//                             "AUTH SUCCESS USER : "
//                             + userId
//                     );

//                 }

//             }



//         }
//         catch(Exception e){

//             System.out.println(
//                     "JWT ERROR : "
//                     + e.getMessage()
//             );

//             SecurityContextHolder.clearContext();

//         }




//         filterChain.doFilter(
//                 request,
//                 response
//         );

//     }

// }






package com.spring.ankur.chatapp_ankur.security;

import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
import com.spring.ankur.chatapp_ankur.service.JwtService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;


@Component
public class JwtAuthFilter extends OncePerRequestFilter {


    private final JwtService jwtService;
    private final UserRepository userRepository;


    public JwtAuthFilter(
            JwtService jwtService,
            UserRepository userRepository
    ){
        this.jwtService = jwtService;
        this.userRepository = userRepository;
    }



    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    )
            throws ServletException, IOException {



String path = request.getRequestURI();

System.out.println("PATH : " + path);
System.out.println("METHOD : " + request.getMethod());

        // PUBLIC API

        if(
                path.startsWith("/api/auth")
                ||
                path.startsWith("/api/profile/public")
                ||
                path.startsWith("/api/search")
                ||
                path.startsWith("/chat")
        ){
  System.out.println(
    "FINAL AUTH = " +
    SecurityContextHolder.getContext().getAuthentication()
);
            filterChain.doFilter(
                    request,
                    response
            );

            return;
        }




        String header =
                request.getHeader("Authorization");



        System.out.println(
                "AUTH HEADER : " + header
        );



        if(header == null ||
                !header.startsWith("Bearer ")){

            filterChain.doFilter(
                    request,
                    response
            );

            return;
        }



        try {


            String token =
                    header.substring(7);



            String userId =
                    jwtService.extractUserId(token);



            boolean valid =
                    jwtService.validate(
                            token,
                            userId
                    );



            System.out.println(
                    "TOKEN VALID : " + valid
            );



            if(valid &&
                    SecurityContextHolder
                    .getContext()
                    .getAuthentication()
                    == null){


                User user =
                        userRepository
                        .findById(userId)
                        .orElse(null);



                if(user != null){


                    UsernamePasswordAuthenticationToken auth =

                            new UsernamePasswordAuthenticationToken(
                                    userId,
                                    null,
                                    List.of(
                                        new SimpleGrantedAuthority(
                                                "ROLE_USER"
                                        )
                                    )
                            );



                    SecurityContextHolder
                            .getContext()
                            .setAuthentication(auth);



                    System.out.println(
                            "AUTH SUCCESS USER : "
                            + userId
                    );

                }

            }



        }
        catch(Exception e){

            System.out.println(
                    "JWT ERROR : "
                    + e.getMessage()
            );

            SecurityContextHolder.clearContext();

        }




        filterChain.doFilter(
                request,
                response
        );

    }

}