package com.spring.ankur.chatapp_ankur.repositories;

import com.spring.ankur.chatapp_ankur.entities.Notification;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NotificationRepository extends MongoRepository<Notification, String> {

    // All notifications of a user (latest first)
    List<Notification> findByReceiverUserIdOrderByCreatedAtDesc(String receiverUserId);

    // Unread notifications
    List<Notification> findByReceiverUserIdAndReadFalseOrderByCreatedAtDesc(
            String receiverUserId
    );

    // Unread notification count
    long countByReceiverUserIdAndReadFalse(String receiverUserId);

}