// package com.spring.ankur.chatapp_ankur.service;

// import com.spring.ankur.chatapp_ankur.dto.LikeResponse;
// import com.spring.ankur.chatapp_ankur.entities.ActivityLike;
// import com.spring.ankur.chatapp_ankur.entities.User;
// import com.spring.ankur.chatapp_ankur.repositories.ActivityLikeRepository;
// import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
// import org.springframework.security.core.Authentication;
// import org.springframework.stereotype.Service;
// import org.springframework.transaction.annotation.Transactional;


// @Service
// public class ActivityInteractionService {


//     private final ActivityLikeRepository activityLikeRepository;
//     private final UserRepository userRepository;


//     public ActivityInteractionService(
//             ActivityLikeRepository activityLikeRepository,
//             UserRepository userRepository
//     ){
//         this.activityLikeRepository = activityLikeRepository;
//         this.userRepository = userRepository;
//     }



//     @Transactional
//     public LikeResponse likeActivity(
//             String activityId,
//             Authentication authentication
//     ){

//         User user = userRepository
//                 .findByEmail(authentication.getName())
//                 .orElseThrow(() -> new RuntimeException("User not found"));


//         if(!activityLikeRepository
//                 .existsByActivityIdAndUserId(activityId,user.getId())){


//             ActivityLike like = new ActivityLike(
//                     activityId,
//                     user.getId()
//             );


//             activityLikeRepository.save(like);
//         }


//         long count =
//                 activityLikeRepository.countByActivityId(activityId);


//         return new LikeResponse(true,count);
//     }




//     @Transactional
//     public LikeResponse unlikeActivity(
//             String activityId,
//             Authentication authentication
//     ){

//         User user = userRepository
//                 .findByEmail(authentication.getName())
//                 .orElseThrow(() -> new RuntimeException("User not found"));



//         activityLikeRepository
//                 .deleteByActivityIdAndUserId(
//                         activityId,
//                         user.getId()
//                 );


//         long count =
//                 activityLikeRepository.countByActivityId(activityId);



//         return new LikeResponse(false,count);
//     }




//     public boolean isLiked(
//             String activityId,
//             Authentication authentication
//     ){

//         User user = userRepository
//                 .findByEmail(authentication.getName())
//                 .orElseThrow(() -> new RuntimeException("User not found"));


//         return activityLikeRepository
//                 .existsByActivityIdAndUserId(
//                         activityId,
//                         user.getId()
//                 );
//     }

// }



package com.spring.ankur.chatapp_ankur.service;

import com.spring.ankur.chatapp_ankur.dto.LikeResponse;
import com.spring.ankur.chatapp_ankur.entities.ActivityLike;
import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.repositories.ActivityLikeRepository;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ActivityInteractionService {

    private final ActivityLikeRepository activityLikeRepository;
    private final UserRepository userRepository;

    public ActivityInteractionService(
            ActivityLikeRepository activityLikeRepository,
            UserRepository userRepository
    ) {
        this.activityLikeRepository = activityLikeRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public LikeResponse likeActivity(
            String activityId,
            Authentication authentication
    ) {

        User user = userRepository
                .findById(authentication.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!activityLikeRepository.existsByActivityIdAndUserId(activityId, user.getId())) {

            ActivityLike like = new ActivityLike(
                    activityId,
                    user.getId()
            );

            activityLikeRepository.save(like);
        }

        long count = activityLikeRepository.countByActivityId(activityId);

        return new LikeResponse(true, count);
    }

    @Transactional
    public LikeResponse unlikeActivity(
            String activityId,
            Authentication authentication
    ) {

        User user = userRepository
                .findById(authentication.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        activityLikeRepository.deleteByActivityIdAndUserId(
                activityId,
                user.getId()
        );

        long count = activityLikeRepository.countByActivityId(activityId);

        return new LikeResponse(false, count);
    }

    public boolean isLiked(
            String activityId,
            Authentication authentication
    ) {

        User user = userRepository
                .findById(authentication.getName())
                .orElseThrow(() -> new RuntimeException("User not found"));

        return activityLikeRepository.existsByActivityIdAndUserId(
                activityId,
                user.getId()
        );
    }

    public long getLikeCount(String activityId) {
    return activityLikeRepository.countByActivityId(activityId);
}
}