package com.spring.ankur.chatapp_ankur.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthResponse {
    
       /*
     * JWT token that the frontend will store
     * and send with future authenticated requests.
     */

    private String token;


      /*
     * Basic user information needed immediately
     * after login or registration.
     */

    private UserResponse user;
}
