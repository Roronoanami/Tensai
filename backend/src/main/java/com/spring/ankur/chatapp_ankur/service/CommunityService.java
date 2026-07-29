package com.spring.ankur.chatapp_ankur.service;

import java.time.Instant;
import java.util.List;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.spring.ankur.chatapp_ankur.repositories.ProfileRepository;
import com.spring.ankur.chatapp_ankur.dto.CommunityMemberResponse;
import com.spring.ankur.chatapp_ankur.dto.CommunityResponse;
import com.spring.ankur.chatapp_ankur.dto.CreateCommunityRequest;
import com.spring.ankur.chatapp_ankur.dto.JoinCommunityRequest;
import com.spring.ankur.chatapp_ankur.entities.Community;
import com.spring.ankur.chatapp_ankur.entities.CommunityMember;
import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.repositories.CommunityMemberRepository;
import com.spring.ankur.chatapp_ankur.repositories.CommunityRepository;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommunityService {

    private final CommunityRepository communityRepository;
    private final CommunityMemberRepository communityMemberRepository;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
     private final ProfileRepository profileRepository;

    // ===================================================
    // CREATE COMMUNITY
    // ===================================================

    @Transactional
    public CommunityResponse createCommunity(
            CreateCommunityRequest request
    ) {

        String currentUserId = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        User owner = userRepository.findById(currentUserId)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        validateCreateRequest(request);

        if (communityRepository.existsByCommunityId(
                request.getCommunityId())) {

            throw new RuntimeException(
                    "Community ID already exists.");
        }

        String encodedPassword = "";

        if (request.isPrivateCommunity()) {

            encodedPassword = passwordEncoder.encode(
                    request.getPassword());

        }

        Community community = Community.builder()
                .communityId(request.getCommunityId().trim())
                .communityName(request.getCommunityName().trim())
                .description(request.getDescription())
                .rules(request.getRules())
                .privateCommunity(request.isPrivateCommunity())
                .password(encodedPassword)
                .ownerId(owner.getId())
                .ownerUsername(owner.getUsername())
                .communityImage("")
                .maxMembers(request.getMaxMembers())
                .currentMembers(1)
                .createdAt(Instant.now())
                .build();

        Community savedCommunity =
                communityRepository.save(community);

        CommunityMember ownerMember =
                CommunityMember.builder()
                        .communityId(savedCommunity.getCommunityId())
                        .userId(owner.getId())
                        .username(owner.getUsername())
                        .role("OWNER")
                        .joinedAt(Instant.now())
                        .build();

        communityMemberRepository.save(ownerMember);

        return mapToResponse(savedCommunity);

    }

    // ===================================================
    // JOIN COMMUNITY
    // ===================================================

    @Transactional
    public CommunityResponse joinCommunity(
            JoinCommunityRequest request
    ) {

        String currentUserId = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        User user = userRepository.findById(currentUserId)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));

        Community community =
                communityRepository
                        .findByCommunityId(
                                request.getCommunityId())
                        .orElseThrow(() ->
                                new RuntimeException(
                                        "Community not found"));

        if (communityMemberRepository.existsByCommunityIdAndUserId(
                community.getCommunityId(),
                user.getId())) {

            throw new RuntimeException(
                    "You are already a member.");
        }

        if (community.getCurrentMembers()
                >= community.getMaxMembers()) {

            throw new RuntimeException(
                    "Community is full.");
        }

if (community.isPrivateCommunity()) {

    if (request.getPassword() == null
            || request.getPassword().isBlank()) {

        throw new RuntimeException(
                "Password is required.");
    }

    boolean matched =
            passwordEncoder.matches(
                    request.getPassword(),
                    community.getPassword()
            );

    if (!matched) {

        throw new RuntimeException(
                "Invalid password.");
    }
}   
        CommunityMember member =
                CommunityMember.builder()
                        .communityId(community.getCommunityId())
                        .userId(user.getId())
                        .username(user.getUsername())
                        .role("MEMBER")
                        .joinedAt(Instant.now())
                        .build();

        // communityMemberRepository.save(member);

        // community.setCurrentMembers(
        //         community.getCurrentMembers() + 1);

        // communityRepository.save(community);

        // return mapToResponse(community);

        communityMemberRepository.save(member);

community.setCurrentMembers(
        community.getCurrentMembers() + 1
);

Community updatedCommunity =
        communityRepository.save(community);

return mapToResponse(updatedCommunity);

    }
        // ===================================================
    // VALIDATION
    // ===================================================

    private void validateCreateRequest(
            CreateCommunityRequest request
    ) {

        if (request.getCommunityId() == null
                || request.getCommunityId().trim().isEmpty()) {

            throw new RuntimeException(
                    "Community ID is required.");
        }

        if (request.getCommunityName() == null
                || request.getCommunityName().trim().isEmpty()) {

            throw new RuntimeException(
                    "Community name is required.");
        }

        if (request.getCommunityId().contains(" ")) {

            throw new RuntimeException(
                    "Community ID cannot contain spaces.");
        }

        if (request.getCommunityName().length() > 50) {

            throw new RuntimeException(
                    "Community name cannot exceed 50 characters.");
        }

        if (request.getDescription() != null
                && request.getDescription().length() > 300) {

            throw new RuntimeException(
                    "Description cannot exceed 300 characters.");
        }
             if (request.getRules() != null
        && request.getRules().length() > 500) {

    throw new RuntimeException(
            "Rules cannot exceed 500 characters.");
}
        if (request.isPrivateCommunity()) {

            if (request.getPassword() == null
                    || request.getPassword().trim().isEmpty()) {

                throw new RuntimeException(
                        "Password is required for private communities.");
            }

            if (request.getPassword().length() < 4) {

                throw new RuntimeException(
                        "Password must be at least 4 characters.");
            }
        }

        if (request.getMaxMembers() != 20
                && request.getMaxMembers() != 50
                && request.getMaxMembers() != 100
                && request.getMaxMembers() != 200
                && request.getMaxMembers() != 500
                && request.getMaxMembers() != 1000) {

            throw new RuntimeException(
                    "Invalid maximum members.");
        }

    }

    // ===================================================
    // MAPPER
    // ===================================================

    private CommunityResponse mapToResponse(
            Community community
    ) {

        return CommunityResponse.builder()
                .id(community.getId())
                .communityId(community.getCommunityId())
                .communityName(community.getCommunityName())
                .description(community.getDescription())
                .rules(community.getRules())
                .privateCommunity(community.isPrivateCommunity())
                // .privateCommunity(false)
                .ownerUsername(community.getOwnerUsername())
                .communityImage(community.getCommunityImage())
                .currentMembers(community.getCurrentMembers())
                .maxMembers(community.getMaxMembers())
                .build();

    }


//     public CommunityResponse getCommunity(String communityId) {

//     Community community = communityRepository
//             .findByCommunityId(communityId)
//             .orElseThrow(() ->
//                     new RuntimeException("Community not found")
//             );


//     return CommunityResponse.builder()
//             .communityId(community.getCommunityId())
//             .communityName(community.getCommunityName())
//             .description(community.getDescription())
//             .rules(community.getRules())
//             .communityImage(community.getCommunityImage())
//             .ownerUsername(community.getOwnerUsername())
//             .currentMembers(community.getCurrentMembers())
//             .maxMembers(community.getMaxMembers())
//             .privateCommunity(community.isPrivateCommunity())
//             .build();
// }

// }

public CommunityResponse getCommunity(String communityId) {

    Community community = communityRepository
            .findByCommunityId(communityId)
            .orElseThrow(() ->
                    new RuntimeException("Community not found")
            );


    System.out.println("FETCHED ID: " + community.getId());


    return CommunityResponse.builder()
            .id(community.getId())
            .communityId(community.getCommunityId())
            .communityName(community.getCommunityName())
            .description(community.getDescription())
            .rules(community.getRules())
            .communityImage(community.getCommunityImage())
            .ownerUsername(community.getOwnerUsername())
            .currentMembers(community.getCurrentMembers())
            .maxMembers(community.getMaxMembers())
            .privateCommunity(community.isPrivateCommunity())
            .build();
}

public List<CommunityMemberResponse> getMembers(String communityId){

    List<CommunityMember> members =
            communityMemberRepository
                    .findByCommunityId(communityId);


    return members.stream()
            .map(member -> {

                var profile =
                        profileRepository
                        .findByUserId(member.getUserId())
                        .orElse(null);


                return CommunityMemberResponse.builder()

                        .userId(member.getUserId())

                        .username(member.getUsername())

                        .firstName(
                                profile != null
                                ? profile.getFirstName()
                                : ""
                        )

                        .lastName(
                                profile != null
                                ? profile.getLastName()
                                : ""
                        )

                        .profileImage(
                                profile != null
                                ? profile.getProfileImage()
                                : ""
                        )

                        .role(member.getRole())

                        .build();

            })
            .toList();
}

}