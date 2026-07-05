package com.spring.ankur.chatapp_ankur.controller;

import com.spring.ankur.chatapp_ankur.dto.SearchResponse;
import com.spring.ankur.chatapp_ankur.service.SearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/search")
@RequiredArgsConstructor
public class SearchController {

    // Controller never talks to Repository directly.
    // It only communicates with the Service layer.
    private final SearchService searchService;

    /*
     * Example Request:
     *
     * GET /api/search?q=spring
     *
     * q = "spring"
     */
    @GetMapping
    public SearchResponse search(@RequestParam String q) {

        // Pass the keyword to the service.
        // The service will perform all searching.
        return searchService.search(q);
    }

}