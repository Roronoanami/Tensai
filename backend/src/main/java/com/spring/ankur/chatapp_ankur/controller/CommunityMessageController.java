package com.spring.ankur.chatapp_ankur.controller;

import com.spring.ankur.chatapp_ankur.dto.CommunityMessageResponse;
import com.spring.ankur.chatapp_ankur.dto.SendCommunityMessageRequest;
import com.spring.ankur.chatapp_ankur.service.CommunityMessageService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.security.Principal;
@RestController
@RequestMapping("/api/community/messages")
@RequiredArgsConstructor
public class CommunityMessageController {

    private final CommunityMessageService communityMessageService;

    // =====================================================
    // SEND MESSAGE
    // =====================================================
@PostMapping("/send")
public CommunityMessageResponse sendMessage(

        @Valid
        @RequestBody
        SendCommunityMessageRequest request,
        
        Principal principal

) {

    return communityMessageService.sendMessage(
            request,
            principal
    );

}

    // =====================================================
    // GET ALL MESSAGES
    // =====================================================

    @GetMapping("/{communityId}")
    public List<CommunityMessageResponse> getMessages(

            @PathVariable
            String communityId

    ) {

        return communityMessageService.getCommunityMessages(
                communityId
        );

    }

}