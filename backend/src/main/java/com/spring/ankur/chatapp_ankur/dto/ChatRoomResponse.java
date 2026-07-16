package com.spring.ankur.chatapp_ankur.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ChatRoomResponse {

    private String roomId;

    private String user1;

    private String user2;

}