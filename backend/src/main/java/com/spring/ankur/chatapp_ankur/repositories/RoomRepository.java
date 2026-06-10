package com.spring.ankur.chatapp_ankur.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.spring.ankur.chatapp_ankur.entities.Room;

public interface RoomRepository extends MongoRepository<Room, String> {

    // Custom query method
    Room findByRoomId(String roomId);
}