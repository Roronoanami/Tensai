// package com.spring.ankur.chatapp_ankur.security;

// import java.util.List;

// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.messaging.Message;
// import org.springframework.messaging.MessageChannel;
// import org.springframework.messaging.simp.stomp.StompCommand;
// import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
// import org.springframework.messaging.support.ChannelInterceptor;
// import org.springframework.stereotype.Component;

// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
// import com.spring.ankur.chatapp_ankur.service.JwtService;

// import lombok.RequiredArgsConstructor;

// @Component
// @RequiredArgsConstructor
// public class JwtChannelInterceptor implements ChannelInterceptor {

//     private final JwtService jwtService;
//     private final UserRepository userRepository;

//     @Override
//     public Message<?> preSend(Message<?> message, MessageChannel channel) {

//         StompHeaderAccessor accessor =
//                 StompHeaderAccessor.wrap(message);

//         // 👇 ADD THIS
//         System.out.println("STOMP COMMAND = " + accessor.getCommand());

//         if (StompCommand.CONNECT.equals(accessor.getCommand())) {

//             String authHeader = accessor.getFirstNativeHeader("Authorization");

//             if (authHeader == null || !authHeader.startsWith("Bearer ")) {
//                 throw new IllegalArgumentException("Missing JWT Token");
//             }

//             String token = authHeader.substring(7);

//             String userId = jwtService.extractUserId(token);

//             if (!jwtService.validate(token, userId)) {
//                 throw new IllegalArgumentException("Invalid JWT Token");
//             }

// User user = userRepository.findById(userId)
//         .orElseThrow(() -> new IllegalArgumentException("User not found"));


// accessor.setUser(
//         new UsernamePasswordAuthenticationToken(
//                 user.getId(),
//                 null,
//                 List.of()
//         )
// );

// System.out.println("WebSocket User = " + user.getUsername());
           
//         }
//         return message;
//     }
// }

// package com.spring.ankur.chatapp_ankur.security;

// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
// import com.spring.ankur.chatapp_ankur.service.JwtService;
// import lombok.RequiredArgsConstructor;
// import org.springframework.messaging.Message;
// import org.springframework.messaging.MessageChannel;
// import org.springframework.messaging.simp.stomp.StompCommand;
// import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
// import org.springframework.messaging.support.ChannelInterceptor;
// import org.springframework.stereotype.Component;

// import java.security.Principal;

// @Component
// @RequiredArgsConstructor
// public class JwtChannelInterceptor implements ChannelInterceptor {

//     private final JwtService jwtService;
//     private final UserRepository userRepository;

//    @Override
// public Message<?> preSend(Message<?> message, MessageChannel channel) {

//     StompHeaderAccessor accessor = StompHeaderAccessor.wrap(message);

//     System.out.println("STOMP Command = " + accessor.getCommand());

//     if (StompCommand.CONNECT.equals(accessor.getCommand())) {

//         String authHeader = accessor.getFirstNativeHeader("Authorization");

//         if (authHeader == null || !authHeader.startsWith("Bearer ")) {
//             throw new IllegalArgumentException("Missing JWT Token");
//         }

//         String token = authHeader.substring(7);

//         String userId = jwtService.extractUserId(token);

//         if (!jwtService.validate(token, userId)) {
//             throw new IllegalArgumentException("Invalid JWT Token");
//         }

//         User user = userRepository.findById(userId)
//                 .orElseThrow(() -> new IllegalArgumentException("User not found"));

//         accessor.setUser(new Principal() {
//             @Override
//             public String getName() {
//                 return user.getId();
//             }
//         });

//         System.out.println("After setUser = " + accessor.getUser());
//         System.out.println("Principal Name = " + accessor.getUser().getName());

//     } else {

//         System.out.println("Current User = " + accessor.getUser());

//     }

//     return message;
// }
// }




package com.spring.ankur.chatapp_ankur.security;

import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
import com.spring.ankur.chatapp_ankur.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JwtChannelInterceptor implements ChannelInterceptor {

    private final JwtService jwtService;
    private final UserRepository userRepository;

    @Override
    public Message<?> preSend(Message<?> message, MessageChannel channel) {

        StompHeaderAccessor accessor =
                StompHeaderAccessor.wrap(message);

        if (StompCommand.CONNECT.equals(accessor.getCommand())) {

            String authHeader = accessor.getFirstNativeHeader("Authorization");

            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                throw new IllegalArgumentException("Missing JWT Token");
            }

            String token = authHeader.substring(7);

            String userId = jwtService.extractUserId(token);

            if (!jwtService.validate(token, userId)) {
                throw new IllegalArgumentException("Invalid JWT Token");
            }

            User user = userRepository.findById(userId)
                    .orElseThrow(() -> new IllegalArgumentException("User not found"));

            accessor.setUser(() -> user.getId());
        }

        return message;
    }
}