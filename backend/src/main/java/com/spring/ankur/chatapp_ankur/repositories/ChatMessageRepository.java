package com.spring.ankur.chatapp_ankur.repositories;

import com.spring.ankur.chatapp_ankur.entities.ChatMessage;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ChatMessageRepository extends MongoRepository<ChatMessage, String> {

    List<ChatMessage> findByRoomIdOrderByCreatedAtAsc(String roomId);

    List<ChatMessage> findByRoomIdOrderByCreatedAtDesc(
            String roomId,
            Pageable pageable
    );

    long countByReceiverUsernameAndReadFalse(String receiverUsername);

    // NEW
    long countByRoomIdAndReceiverUsernameAndReadFalse(
            String roomId,
            String receiverUsername
    );
}