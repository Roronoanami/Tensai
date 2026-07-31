
package com.spring.ankur.chatapp_ankur.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class SendCommunityMessageRequest {

    @NotBlank(message = "Community ID is required.")
    private String communityId;

    @NotBlank(message = "Message cannot be empty.")
    private String message;

}