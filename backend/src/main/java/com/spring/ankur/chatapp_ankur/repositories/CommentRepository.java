package com.spring.ankur.chatapp_ankur.repositories;

import com.spring.ankur.chatapp_ankur.entities.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
public interface CommentRepository extends MongoRepository<Comment,String>{

    List<Comment> findByActivityIdOrderByCreatedAtAsc(String activityId);

    long countByActivityId(String activityId);
}