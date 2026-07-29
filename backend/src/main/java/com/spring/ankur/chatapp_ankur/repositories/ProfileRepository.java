// package com.spring.ankur.chatapp_ankur.repositories;

// import com.spring.ankur.chatapp_ankur.entities.Profile;
// import org.springframework.data.mongodb.repository.MongoRepository;

// import java.util.Optional;

// public interface ProfileRepository extends MongoRepository<Profile, String> {

//     /**
//      * Find profile using owner's userId
//      *
//      * Example:
//      * User
//      * id = "123"
//      *
//      * Profile
//      * userId = "123"
//      */
//     Optional<Profile> findByUserId(String userId);

// }



package com.spring.ankur.chatapp_ankur.repositories;

import com.spring.ankur.chatapp_ankur.entities.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ProfileRepository extends MongoRepository<Profile, String> {

    /**
     * Find profile using owner's userId
     *
     * Example:
     * User
     * id = "123"
     *
     * Profile
     * userId = "123"
     */
    Optional<Profile> findByUserId(String userId);

}