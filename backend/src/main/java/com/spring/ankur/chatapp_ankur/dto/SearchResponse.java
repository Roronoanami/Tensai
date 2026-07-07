// package com.spring.ankur.chatapp_ankur.dto;

// import java.util.List;

// public class SearchResponse {
//     private List<UserSearchResponse> users;

// private List<ActivitySearchResponse> posts;

// private List<ActivitySearchResponse> projects;
// }

package com.spring.ankur.chatapp_ankur.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SearchResponse {

    private List<UserSearchResponse> users;

    private List<ActivitySearchResponse> posts;

    private List<ActivitySearchResponse> projects;
}