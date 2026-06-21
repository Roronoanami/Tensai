// package com.spring.ankur.chatapp_ankur.repositories;

// import java.util.Optional;

// import org.springframework.data.mongodb.repository.MongoRepository;
// import org.springframework.stereotype.Repository;

// import com.spring.ankur.chatapp_ankur.entities.Otp;

// @Repository
// public interface OtpRepository extends MongoRepository<Otp, String> {

//     /**
//      * Find the OTP associated with an email address.
//      */
//     Optional<Otp> findByEmail(String email);

//     /**
//      * Check whether an OTP record exists for an email.
//      */
//     boolean existsByEmail(String email);

//     /**
//      * Delete the OTP after successful verification
//      * or before generating a new one.
//      */
//     void deleteByEmail(String email);
// }