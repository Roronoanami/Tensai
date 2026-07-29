package com.spring.ankur.chatapp_ankur.repositories;

import com.spring.ankur.chatapp_ankur.entities.Community;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface CommunityRepository
        extends MongoRepository<Community, String> {

    Optional<Community> findByCommunityId(String communityId);

    boolean existsByCommunityId(String communityId);
}