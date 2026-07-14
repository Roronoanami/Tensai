package com.spring.ankur.chatapp_ankur.repositories;

import com.spring.ankur.chatapp_ankur.entities.ActivityLike;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ActivityLikeRepository 
        extends MongoRepository<ActivityLike, String> {


    boolean existsByActivityIdAndUserId(
            String activityId,
            String userId
    );


    long countByActivityId(
            String activityId
    );


    void deleteByActivityIdAndUserId(
            String activityId,
            String userId
    );
}