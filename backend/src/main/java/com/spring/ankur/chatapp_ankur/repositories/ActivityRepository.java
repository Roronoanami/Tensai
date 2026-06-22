package com.spring.ankur.chatapp_ankur.repositories;

import com.spring.ankur.chatapp_ankur.entities.Activity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ActivityRepository extends MongoRepository<Activity, String> {

List<Activity> findByUserIdOrderByCreatedAtDesc(String userId);

List<Activity> findByUsernameOrderByCreatedAtDesc(String username);
}