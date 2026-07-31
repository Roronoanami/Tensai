package com.spring.ankur.chatapp_ankur.controller;

import com.spring.ankur.chatapp_ankur.dto.CommunityMessageResponse;
import com.spring.ankur.chatapp_ankur.dto.SendCommunityMessageRequest;
import com.spring.ankur.chatapp_ankur.service.CommunityMessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
 import org.springframework.messaging.handler.annotation.Payload;
import java.security.Principal;
@Controller
@RequiredArgsConstructor
public class CommunityChatController {

    private final CommunityMessageService communityMessageService;
    private final SimpMessagingTemplate messagingTemplate;


@MessageMapping("/community/{communityId}")
public void sendMessage(
        @DestinationVariable String communityId,
        SendCommunityMessageRequest request,
        Principal principal
){

    System.out.println(
        "CONTROLLER PRINCIPAL = "
        + (principal != null ? principal.getName() : "NULL")
    );

    System.out.println("WS MESSAGE RECEIVED");
    System.out.println(request.getMessage());

    request.setCommunityId(communityId);

    CommunityMessageResponse response =
            // communityMessageService.sendMessage(request);
           communityMessageService.sendMessage(
        request,
        principal
);
    messagingTemplate.convertAndSend(
            "/topic/community/" + communityId,
            response
    );
}
}