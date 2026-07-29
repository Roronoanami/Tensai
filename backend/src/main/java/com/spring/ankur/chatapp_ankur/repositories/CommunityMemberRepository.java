package com.spring.ankur.chatapp_ankur.repositories;

import com.spring.ankur.chatapp_ankur.entities.CommunityMember;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface CommunityMemberRepository
        extends MongoRepository<CommunityMember, String> {
    
    List<CommunityMember> findByCommunityId(String communityId);

    Optional<CommunityMember> findByCommunityIdAndUserId(
            String communityId,
            String userId
    );

    long countByCommunityId(String communityId);

    boolean existsByCommunityIdAndUserId(
            String communityId,
            String userId
    );
}