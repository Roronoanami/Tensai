package com.spring.ankur.chatapp_ankur.repositories;

import com.spring.ankur.chatapp_ankur.entities.CommunityMessage;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CommunityMessageRepository
        extends MongoRepository<CommunityMessage, String> {

    List<CommunityMessage> findByCommunityIdOrderBySentAtAsc(
            String communityId
    );

}