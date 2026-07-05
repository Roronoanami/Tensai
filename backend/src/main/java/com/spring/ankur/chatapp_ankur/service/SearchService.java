package com.spring.ankur.chatapp_ankur.service;

import com.spring.ankur.chatapp_ankur.dto.SearchResponse;
import com.spring.ankur.chatapp_ankur.repositories.ActivityRepository;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SearchService {

    // Repository for User collection
    private final UserRepository userRepository;

    // Repository for Activity collection
    private final ActivityRepository activityRepository;

    /*
     * Main search method.
     *
     * Controller calls only this method.
     */
    public SearchResponse search(String keyword) {

        // Remove unnecessary spaces.
        keyword = keyword.trim();

        /*
         * Step 1
         * Search Users
         */
        // TODO

        /*
         * Step 2
         * Search Activities
         */
        // TODO

        /*
         * Step 3
         * Separate Posts and Projects
         */
        // TODO

        /*
         * Step 4
         * Convert Entities into DTOs
         */
        // TODO

        /*
         * Step 5
         * Create SearchResponse
         */
        SearchResponse response = new SearchResponse();

        // response.setUsers(...);
        // response.setPosts(...);
        // response.setProjects(...);

        return response;
    }

}