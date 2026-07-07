package com.spring.ankur.chatapp_ankur.dto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserSearchResponse {
    
private String id;
private String username;
private String profilePicture;
private String bio;
}
