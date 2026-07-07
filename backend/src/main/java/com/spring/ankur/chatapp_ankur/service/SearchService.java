// package com.spring.ankur.chatapp_ankur.service;

// import com.spring.ankur.chatapp_ankur.dto.SearchResponse;
// import com.spring.ankur.chatapp_ankur.repositories.ActivityRepository;
// import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
// import lombok.RequiredArgsConstructor;
// import org.springframework.stereotype.Service;

// @Service
// @RequiredArgsConstructor
// public class SearchService {

//     // Repository for User collection
//     private final UserRepository userRepository;

//     // Repository for Activity collection
//     private final ActivityRepository activityRepository;

//     /*
//      * Main search method.
//      *
//      * Controller calls only this method.
//      */
//     public SearchResponse search(String keyword) {

//         // Remove unnecessary spaces.
//         keyword = keyword.trim();

//         /*
//          * Step 1
//          * Search Users
//          */
//         // TODO

//         /*
//          * Step 2
//          * Search Activities
//          */
//         // TODO

//         /*
//          * Step 3
//          * Separate Posts and Projects
//          */
//         // TODO

//         /*
//          * Step 4
//          * Convert Entities into DTOs
//          */
//         // TODO

//         /*
//          * Step 5
//          * Create SearchResponse
//          */
//         SearchResponse response = new SearchResponse();

//         // response.setUsers(...);
//         // response.setPosts(...);
//         // response.setProjects(...);

//         return response;
//     }

// }






package com.spring.ankur.chatapp_ankur.service;

import com.spring.ankur.chatapp_ankur.dto.ActivitySearchResponse;
import com.spring.ankur.chatapp_ankur.dto.SearchResponse;
import com.spring.ankur.chatapp_ankur.dto.UserSearchResponse;
import com.spring.ankur.chatapp_ankur.entities.Activity;
import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.repositories.ActivityRepository;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SearchService {

    private final UserRepository userRepository;
    private final ActivityRepository activityRepository;

    public SearchResponse search(String keyword) {

        keyword = keyword.trim();

        List<User> users = searchUsers(keyword);
        List<Activity> activities = searchActivities(keyword);

        return buildSearchResponse(users, activities);
    }

    /*
     * Search users by username
     */
    private List<User> searchUsers(String keyword) {

        return userRepository.findByUsernameContainingIgnoreCase(keyword);
    }

    /*
     * Search activities by title OR tech stack
     */
    private List<Activity> searchActivities(String keyword) {

        return activityRepository
                .findByTitleContainingIgnoreCaseOrTechStackContainingIgnoreCase(
                        keyword,
                        keyword
                );
    }

    /*
     * Convert entities into DTOs
     */
    private SearchResponse buildSearchResponse(
            List<User> users,
            List<Activity> activities) {

        List<UserSearchResponse> userResponses = new ArrayList<>();
        List<ActivitySearchResponse> postResponses = new ArrayList<>();
        List<ActivitySearchResponse> projectResponses = new ArrayList<>();

        // Users
        for (User user : users) {

            UserSearchResponse dto = new UserSearchResponse();

            dto.setId(user.getId());
            dto.setUsername(user.getUsername());

            // Your User entity doesn't contain these yet
            dto.setProfilePicture(null);
            dto.setBio(null);

            userResponses.add(dto);
        }

        // Activities
        for (Activity activity : activities) {

            ActivitySearchResponse dto = new ActivitySearchResponse();

            dto.setId(activity.getId());
            dto.setUserId(activity.getUserId());
            dto.setUsername(activity.getUsername());
            dto.setType(activity.getType());
            dto.setTitle(activity.getTitle());
            dto.setDescription(activity.getDescription());
            dto.setImageUrl(activity.getImageUrl());
            dto.setTechStack(activity.getTechStack());

            if ("post".equalsIgnoreCase(activity.getType())) {

                postResponses.add(dto);

            } else if ("project".equalsIgnoreCase(activity.getType())) {

                projectResponses.add(dto);
            }
        }

        SearchResponse response = new SearchResponse();

        response.setUsers(userResponses);
        response.setPosts(postResponses);
        response.setProjects(projectResponses);

        return response;
    }
}