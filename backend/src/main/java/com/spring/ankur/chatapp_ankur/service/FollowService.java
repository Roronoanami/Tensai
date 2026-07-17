// package com.spring.ankur.chatapp_ankur.service;
// import com.spring.ankur.chatapp_ankur.enums.NotificationType;
// import com.spring.ankur.chatapp_ankur.dto.FollowCountResponse;
// import com.spring.ankur.chatapp_ankur.dto.FollowStatusResponse;
// import com.spring.ankur.chatapp_ankur.entities.Follow;
// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.repositories.FollowRepository;
// import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
// import org.springframework.stereotype.Service;

// @Service
// public class FollowService {

//     private final FollowRepository followRepository;
//     private final UserRepository userRepository;
//     private final NotificationService notificationService;

//     public FollowService(
//         FollowRepository followRepository,
//         UserRepository userRepository,
//         NotificationService notificationService
// ) {
//     this.followRepository = followRepository;
//     this.userRepository = userRepository;
//     this.notificationService = notificationService;
// }

//     // =========================
//     // FOLLOW USER
//     // =========================
//     public void followUser(String followerId, String username) {

//         User targetUser = userRepository.findByUsername(username)
//                 .orElseThrow(() -> new RuntimeException("User not found"));

//         // Cannot follow yourself
//         if (followerId.equals(targetUser.getId())) {
//             throw new RuntimeException("You cannot follow yourself.");
//         }

//         // Already following
//         boolean alreadyFollowing = followRepository
//                 .findByFollowerIdAndFollowingId(
//                         followerId,
//                         targetUser.getId()
//                 )
//                 .isPresent();

//         if (alreadyFollowing) {
//             throw new RuntimeException("Already following this user.");
//         }

//         Follow follow = new Follow(
//                 followerId,
//                 targetUser.getId()
//         );

//         followRepository.save(follow);
//         notificationService.createNotification(
//         follower.getId(),
//         following.getId(),
//         NotificationType.FOLLOW,
//         follower.getUsername()+" started following you.",
//         null
// );
//     }

//     // =========================
//     // UNFOLLOW USER
//     // =========================
//     public void unfollowUser(String followerId, String username) {

//         User targetUser = userRepository.findByUsername(username)
//                 .orElseThrow(() -> new RuntimeException("User not found"));

//         followRepository.deleteByFollowerIdAndFollowingId(
//                 followerId,
//                 targetUser.getId()
//         );
//     }

//     // =========================
//     // FOLLOW STATUS
//     // =========================
//     public FollowStatusResponse isFollowing(
//             String followerId,
//             String username
//     ) {

//         User targetUser = userRepository.findByUsername(username)
//                 .orElseThrow(() -> new RuntimeException("User not found"));

//         boolean following = followRepository
//                 .findByFollowerIdAndFollowingId(
//                         followerId,
//                         targetUser.getId()
//                 )
//                 .isPresent();

//         return new FollowStatusResponse(following);
//     }

//     // =========================
//     // FOLLOWERS COUNT
//     // =========================
//     public FollowCountResponse getFollowersCount(String username) {

//         User targetUser = userRepository.findByUsername(username)
//                 .orElseThrow(() -> new RuntimeException("User not found"));

//         long count = followRepository.countByFollowingId(
//                 targetUser.getId()
//         );

//         return new FollowCountResponse(count);
//     }

//     // =========================
//     // FOLLOWING COUNT
//     // =========================
//     public FollowCountResponse getFollowingCount(String username) {

//         User targetUser = userRepository.findByUsername(username)
//                 .orElseThrow(() -> new RuntimeException("User not found"));

//         long count = followRepository.countByFollowerId(
//                 targetUser.getId()
//         );

//         return new FollowCountResponse(count);
//     }
// }






package com.spring.ankur.chatapp_ankur.service;

import com.spring.ankur.chatapp_ankur.enums.NotificationType;
import com.spring.ankur.chatapp_ankur.dto.FollowCountResponse;
import com.spring.ankur.chatapp_ankur.dto.FollowStatusResponse;
import com.spring.ankur.chatapp_ankur.entities.Follow;
import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.repositories.FollowRepository;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;

import org.springframework.stereotype.Service;
@Service
public class FollowService {


    private final FollowRepository followRepository;
    private final UserRepository userRepository;
    private final NotificationService notificationService;



    public FollowService(
            FollowRepository followRepository,
            UserRepository userRepository,
            NotificationService notificationService
    ) {

        this.followRepository = followRepository;
        this.userRepository = userRepository;
        this.notificationService = notificationService;

    }





    // =========================
    // FOLLOW USER
    // =========================

    public void followUser(
            String followerId,
            String username
    ) {


        User targetUser =
                userRepository.findByUsername(username)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "User not found"
                                )
                        );



        // Cannot follow yourself

        if(followerId.equals(targetUser.getId())){

            throw new RuntimeException(
                    "You cannot follow yourself."
            );

        }





        // Already following

        boolean alreadyFollowing =
                followRepository
                        .findByFollowerIdAndFollowingId(
                                followerId,
                                targetUser.getId()
                        )
                        .isPresent();



        if(alreadyFollowing){

            throw new RuntimeException(
                    "Already following this user."
            );

        }





        Follow follow =
                new Follow(
                        followerId,
                        targetUser.getId()
                );



        followRepository.save(follow);





        // Get follower details for notification

        User follower =
                userRepository.findById(followerId)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Follower not found"
                                )
                        );





        // Create notification

        notificationService.createNotification(

                follower.getId(),

                targetUser.getId(),

                NotificationType.FOLLOW,

                follower.getUsername()
                        + " started following you.",

                null

        );

    }








    // =========================
    // UNFOLLOW USER
    // =========================

    public void unfollowUser(
            String followerId,
            String username
    ) {


        User targetUser =
                userRepository.findByUsername(username)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "User not found"
                                )
                        );



        followRepository.deleteByFollowerIdAndFollowingId(

                followerId,

                targetUser.getId()

        );

    }








    // =========================
    // FOLLOW STATUS
    // =========================

    public FollowStatusResponse isFollowing(
            String followerId,
            String username
    ) {


        User targetUser =
                userRepository.findByUsername(username)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "User not found"
                                )
                        );



        boolean following =
                followRepository
                        .findByFollowerIdAndFollowingId(
                                followerId,
                                targetUser.getId()
                        )
                        .isPresent();



        return new FollowStatusResponse(
                following
        );

    }








    // =========================
    // FOLLOWERS COUNT
    // =========================

    public FollowCountResponse getFollowersCount(
            String username
    ) {


        User targetUser =
                userRepository.findByUsername(username)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "User not found"
                                )
                        );



        long count =
                followRepository.countByFollowingId(
                        targetUser.getId()
                );



        return new FollowCountResponse(
                count
        );

    }








    // =========================
    // FOLLOWING COUNT
    // =========================

    public FollowCountResponse getFollowingCount(
            String username
    ) {


        User targetUser =
                userRepository.findByUsername(username)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "User not found"
                                )
                        );



        long count =
                followRepository.countByFollowerId(
                        targetUser.getId()
                );



        return new FollowCountResponse(
                count
        );

    }

    

}