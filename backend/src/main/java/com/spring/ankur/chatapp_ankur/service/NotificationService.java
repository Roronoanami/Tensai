// package com.spring.ankur.chatapp_ankur.service;

// import com.spring.ankur.chatapp_ankur.dto.NotificationResponse;
// import com.spring.ankur.chatapp_ankur.entities.Notification;
// import com.spring.ankur.chatapp_ankur.entities.Profile;
// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.enums.NotificationType;
// import com.spring.ankur.chatapp_ankur.repositories.NotificationRepository;
// import com.spring.ankur.chatapp_ankur.repositories.ProfileRepository;
// import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
// import org.springframework.stereotype.Service;

// import java.util.List;
// import java.util.stream.Collectors;

// @Service
// public class NotificationService {

//     private final NotificationRepository notificationRepository;
//     private final UserRepository userRepository;
//     private final ProfileRepository profileRepository;

//     public NotificationService(
//             NotificationRepository notificationRepository,
//             UserRepository userRepository,
//             ProfileRepository profileRepository
//     ) {
//         this.notificationRepository = notificationRepository;
//         this.userRepository = userRepository;
//         this.profileRepository = profileRepository;
//     }

//     // ==========================================================
//     // CREATE NOTIFICATION
//     // ==========================================================
    
//     public void createNotification(
// String senderUserId,
// String receiverUserId,
// NotificationType type,
// String message,
// String referenceId
// )
//     {

        
//         Notification notification =
// new Notification(
// receiverUserId,
// senderUserId,
// type,
// message
// );

// notification.setReferenceId(referenceId);
//     }

//     // ==========================================================
//     // GET MY NOTIFICATIONS
//     // ==========================================================
//     public List<NotificationResponse> getMyNotifications(String userId) {

//         List<Notification> notifications =
//                 notificationRepository.findByReceiverUserIdOrderByCreatedAtDesc(userId);

//         return notifications.stream().map(notification -> {

//             User sender =
//                     userRepository.findById(notification.getSenderUserId())
//                             .orElse(null);

//             Profile profile = null;

//             if (sender != null) {
//                 profile = profileRepository.findByUserId(sender.getId()).orElse(null);
//             }

//             NotificationResponse response = new NotificationResponse();

//             response.setId(notification.getId());

//             response.setSenderUserId(notification.getSenderUserId());

//             response.setSenderUsername(
//                     sender != null ? sender.getUsername() : null
//             );

//             response.setSenderProfileImage(
//                     profile != null ? profile.getProfileImage() : null
//             );

//             response.setType(notification.getType());

//             response.setMessage(notification.getMessage());

//             response.setRead(notification.isRead());

//             response.setCreatedAt(notification.getCreatedAt());

//             return response;

//         }).collect(Collectors.toList());
//     }

//     // ==========================================================
//     // MARK ONE AS READ
//     // ==========================================================
//     public void markAsRead(String notificationId) {

//         Notification notification =
//                 notificationRepository.findById(notificationId)
//                         .orElseThrow(() -> new RuntimeException("Notification not found"));

//         notification.setRead(true);

//         notificationRepository.save(notification);
//     }

//     // ==========================================================
//     // MARK ALL AS READ
//     // ==========================================================
//     public void markAllAsRead(String userId) {

//         List<Notification> notifications =
//                 notificationRepository.findByReceiverUserIdAndReadFalseOrderByCreatedAtDesc(userId);

//         for (Notification notification : notifications) {

//             notification.setRead(true);

//         }

//         notificationRepository.saveAll(notifications);
//     }

//     // ==========================================================
//     // UNREAD COUNT
//     // ==========================================================
//     public long getUnreadCount(String userId) {

//         return notificationRepository.countByReceiverUserIdAndReadFalse(userId);

//     }

// }




package com.spring.ankur.chatapp_ankur.service;

import com.spring.ankur.chatapp_ankur.dto.NotificationResponse;
import com.spring.ankur.chatapp_ankur.entities.Notification;
import com.spring.ankur.chatapp_ankur.entities.Profile;
import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.enums.NotificationType;
import com.spring.ankur.chatapp_ankur.repositories.NotificationRepository;
import com.spring.ankur.chatapp_ankur.repositories.ProfileRepository;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NotificationService {

    private final NotificationRepository notificationRepository;
    private final UserRepository userRepository;
    private final ProfileRepository profileRepository;


    public NotificationService(
            NotificationRepository notificationRepository,
            UserRepository userRepository,
            ProfileRepository profileRepository
    ) {
        this.notificationRepository = notificationRepository;
        this.userRepository = userRepository;
        this.profileRepository = profileRepository;
    }


    // ==========================================================
    // CREATE NOTIFICATION
    // ==========================================================

    public void createNotification(
            String senderUserId,
            String receiverUserId,
            NotificationType type,
            String message,
            String referenceId
    ) {


        Notification notification =
                new Notification(
                        receiverUserId,
                        senderUserId,
                        type,
                        message
                );


        notification.setReferenceId(referenceId);


        // SAVE TO DATABASE
        notificationRepository.save(notification);

    }



    // ==========================================================
    // GET MY NOTIFICATIONS
    // ==========================================================

    public List<NotificationResponse> getMyNotifications(String userId) {


        List<Notification> notifications =
                notificationRepository
                        .findByReceiverUserIdOrderByCreatedAtDesc(userId);



        return notifications.stream().map(notification -> {


            User sender =
                    userRepository
                            .findById(notification.getSenderUserId())
                            .orElse(null);



            Profile profile = null;


            if(sender != null){

                profile =
                        profileRepository
                                .findByUserId(sender.getId())
                                .orElse(null);

            }



            NotificationResponse response =
                    new NotificationResponse();



            response.setId(notification.getId());


            // for accept connection request
            response.setReferenceId(
                    notification.getReferenceId()
            );


            response.setSenderUserId(
                    notification.getSenderUserId()
            );


            response.setSenderUsername(
                    sender != null
                            ? sender.getUsername()
                            : null
            );


            response.setSenderProfileImage(
                    profile != null
                            ? profile.getProfileImage()
                            : null
            );


            response.setType(
                    notification.getType()
            );


            response.setMessage(
                    notification.getMessage()
            );


            response.setRead(
                    notification.isRead()
            );


            response.setCreatedAt(
                    notification.getCreatedAt()
            );


            return response;


        }).collect(Collectors.toList());

    }




    // ==========================================================
    // MARK ONE AS READ
    // ==========================================================

    public void markAsRead(String notificationId) {


        Notification notification =
                notificationRepository
                        .findById(notificationId)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Notification not found"
                                )
                        );



        notification.setRead(true);


        notificationRepository.save(notification);

    }




    // ==========================================================
    // MARK ALL AS READ
    // ==========================================================

    public void markAllAsRead(String userId) {


        List<Notification> notifications =
                notificationRepository
                        .findByReceiverUserIdAndReadFalseOrderByCreatedAtDesc(
                                userId
                        );



        for(Notification notification : notifications){

            notification.setRead(true);

        }



        notificationRepository.saveAll(notifications);

    }




    // ==========================================================
    // UNREAD COUNT
    // ==========================================================

    public long getUnreadCount(String userId) {


        return notificationRepository
                .countByReceiverUserIdAndReadFalse(userId);

    }

}