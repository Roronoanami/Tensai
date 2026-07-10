package com.spring.ankur.chatapp_ankur.repositories;

import com.spring.ankur.chatapp_ankur.entities.Connection;
import com.spring.ankur.chatapp_ankur.entities.ConnectionStatus;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface ConnectionRepository extends MongoRepository<Connection, String> {

    // Find connection between two users
    Optional<Connection> findBySenderIdAndReceiverId(
            String senderId,
            String receiverId
    );


    // Pending requests received
    List<Connection> findByReceiverIdAndStatus(
            String receiverId,
            ConnectionStatus status
    );


    // Pending requests sent OR connected users where sender is user
    List<Connection> findBySenderIdAndStatus(
            String senderId,
            ConnectionStatus status
    );


    // Count connections where user is sender
    long countBySenderIdAndStatus(
            String senderId,
            ConnectionStatus status
    );


    // Count connections where user is receiver
    long countByReceiverIdAndStatus(
            String receiverId,
            ConnectionStatus status
    );


    // Delete connection
    void deleteBySenderIdAndReceiverId(
            String senderId,
            String receiverId
    );
}