package com.spring.ankur.chatapp_ankur.service;

import com.spring.ankur.chatapp_ankur.dto.CommunityMessageResponse;
import com.spring.ankur.chatapp_ankur.dto.SendCommunityMessageRequest;
import com.spring.ankur.chatapp_ankur.entities.Community;
import com.spring.ankur.chatapp_ankur.entities.CommunityMember;
import com.spring.ankur.chatapp_ankur.entities.CommunityMessage;
import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.repositories.CommunityMemberRepository;
import com.spring.ankur.chatapp_ankur.repositories.CommunityMessageRepository;
import com.spring.ankur.chatapp_ankur.repositories.CommunityRepository;
import com.spring.ankur.chatapp_ankur.repositories.ProfileRepository;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.security.Principal;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class CommunityMessageService {

    private final CommunityRepository communityRepository;

    private final CommunityMemberRepository communityMemberRepository;

    private final CommunityMessageRepository communityMessageRepository;

    private final UserRepository userRepository;

    private final ProfileRepository profileRepository;

    // =====================================================
    // SEND MESSAGE
    // =====================================================

    // @Transactional
    // public CommunityMessageResponse sendMessage(
    //         SendCommunityMessageRequest request
    // ) {

    @Transactional
public CommunityMessageResponse sendMessage(
        SendCommunityMessageRequest request,
        Principal principal
) {

        // String currentUserId =
        //         SecurityContextHolder
        //                 .getContext()
        //                 .getAuthentication()
        //                 .getName();
         String currentUserId = principal.getName();
        User user =
                userRepository.findById(currentUserId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "User not found."
                                )
                        );

        Community community =
                communityRepository
                        .findByCommunityId(
                                request.getCommunityId()
                        )
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Community not found."
                                )
                        );

        boolean isMember =
                communityMemberRepository
                        .existsByCommunityIdAndUserId(
                                community.getCommunityId(),
                                user.getId()
                        );

        if (!isMember) {

            throw new RuntimeException(
                    "Only community members can send messages."
            );

        }

        CommunityMessage message =
                CommunityMessage.builder()

                        .communityId(
                                community.getCommunityId()
                        )

                        .senderId(
                                user.getId()
                        )

                        .senderUsername(
                                user.getUsername()
                        )

                        .message(
                                request.getMessage().trim()
                        )

                        .sentAt(
                                LocalDateTime.now()
                        )

                        .edited(false)

                        .deleted(false)

                        .build();

        CommunityMessage savedMessage =
                communityMessageRepository.save(
                        message
                );

        return mapToResponse(savedMessage);

    }
        // =====================================================
    // GET COMMUNITY MESSAGES
    // =====================================================

    public java.util.List<CommunityMessageResponse> getCommunityMessages(
            String communityId
    ) {

        String currentUserId =
                SecurityContextHolder
                        .getContext()
                        .getAuthentication()
                        .getName();

        Community community =
                communityRepository
                        .findByCommunityId(communityId)
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Community not found."
                                )
                        );

        boolean isMember =
                communityMemberRepository
                        .existsByCommunityIdAndUserId(
                                community.getCommunityId(),
                                currentUserId
                        );

        if (!isMember) {

            throw new RuntimeException(
                    "Only community members can view messages."
            );

        }

        return communityMessageRepository
                .findByCommunityIdOrderBySentAtAsc(
                        communityId
                )
                .stream()
                .map(this::mapToResponse)
                .toList();

    }

    // =====================================================
    // RESPONSE MAPPER
    // =====================================================

    private CommunityMessageResponse mapToResponse(
            CommunityMessage message
    ) {

        var profile =
                profileRepository
                        .findByUserId(
                                message.getSenderId()
                        )
                        .orElse(null);

        return CommunityMessageResponse
                .builder()

                .id(
                        message.getId()
                )

                .communityId(
                        message.getCommunityId()
                )

                .senderId(
                        message.getSenderId()
                )

                .senderUsername(
                        message.getSenderUsername()
                )

                .senderProfileImage(
                        profile != null
                                ? profile.getProfileImage()
                                : ""
                )

                .message(
                        message.getMessage()
                )

                .sentAt(
                        message.getSentAt()
                )

                .edited(
                        message.isEdited()
                )

                .deleted(
                        message.isDeleted()
                )

                .messageType(
                        message.getMessageType()
                )

                .build();

    }

}