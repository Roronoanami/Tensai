// package com.spring.ankur.chatapp_ankur.controller;

// import com.spring.ankur.chatapp_ankur.dto.ConnectionStatusResponse;
// import com.spring.ankur.chatapp_ankur.entities.Connection;
// import com.spring.ankur.chatapp_ankur.service.ConnectionService;

// import org.springframework.http.ResponseEntity;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/connection")
// public class ConnectionController {

//     private final ConnectionService connectionService;


//     public ConnectionController(
//             ConnectionService connectionService
//     ) {
//         this.connectionService = connectionService;
//     }



//     // =====================================
//     // SEND CONNECTION REQUEST
//     // =====================================
//     @PostMapping("/request/{username}")
//     public ResponseEntity<?> sendRequest(
//             @PathVariable String username
//     ) {

//         String senderId =
//                 (String) SecurityContextHolder
//                         .getContext()
//                         .getAuthentication()
//                         .getPrincipal();


//         connectionService.sendRequest(
//                 senderId,
//                 username
//         );


//         return ResponseEntity.ok(
//                 "Connection request sent"
//         );
//     }



//     // =====================================
//     // ACCEPT REQUEST
//     // =====================================
//     @PutMapping("/accept/{connectionId}")
//     public ResponseEntity<?> acceptRequest(
//             @PathVariable String connectionId
//     ) {

//         String userId =
//                 (String) SecurityContextHolder
//                         .getContext()
//                         .getAuthentication()
//                         .getPrincipal();


//         connectionService.acceptRequest(
//                 userId,
//                 connectionId
//         );


//         return ResponseEntity.ok(
//                 "Connection accepted"
//         );
//     }



//     // =====================================
//     // REJECT REQUEST
//     // =====================================
//     @PutMapping("/reject/{connectionId}")
//     public ResponseEntity<?> rejectRequest(
//             @PathVariable String connectionId
//     ) {

//         String userId =
//                 (String) SecurityContextHolder
//                         .getContext()
//                         .getAuthentication()
//                         .getPrincipal();


//         connectionService.rejectRequest(
//                 userId,
//                 connectionId
//         );


//         return ResponseEntity.ok(
//                 "Connection rejected"
//         );
//     }



//     // =====================================
//     // CHECK CONNECTION STATUS
//     // =====================================
//     @GetMapping("/status/{username}")
//     public ResponseEntity<ConnectionStatusResponse> getStatus(
//             @PathVariable String username
//     ) {

//         String userId =
//                 (String) SecurityContextHolder
//                         .getContext()
//                         .getAuthentication()
//                         .getPrincipal();


//         return ResponseEntity.ok(
//                 connectionService.getConnectionStatus(
//                         userId,
//                         username
//                 )
//         );
//     }



//     // =====================================
//     // GET MY CONNECTION REQUESTS
//     // =====================================
//     @GetMapping("/requests")
//     public ResponseEntity<List<Connection>> getRequests() {


//         String userId =
//                 (String) SecurityContextHolder
//                         .getContext()
//                         .getAuthentication()
//                         .getPrincipal();


//         return ResponseEntity.ok(
//                 connectionService.getPendingRequests(userId)
//         );
//     }

// }








package com.spring.ankur.chatapp_ankur.controller;

import com.spring.ankur.chatapp_ankur.dto.ConnectionStatusResponse;
import com.spring.ankur.chatapp_ankur.entities.Connection;
import com.spring.ankur.chatapp_ankur.service.ConnectionService;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/connection")
public class ConnectionController {


    private final ConnectionService connectionService;


    public ConnectionController(
            ConnectionService connectionService
    ) {
        this.connectionService = connectionService;
    }



    private String getCurrentUserId(){

        return (String) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();

    }



    // =====================================
    // SEND CONNECTION REQUEST
    // =====================================

    @PostMapping("/request/{username}")
    public ResponseEntity<?> sendRequest(
            @PathVariable String username
    ){

        connectionService.sendRequest(
                getCurrentUserId(),
                username
        );


        return ResponseEntity.ok(
                "Connection request sent"
        );

    }





    // =====================================
    // ACCEPT CONNECTION REQUEST
    // =====================================

    @PutMapping("/accept/{connectionId}")
    public ResponseEntity<?> acceptRequest(
            @PathVariable String connectionId
    ){

        connectionService.acceptRequest(
                getCurrentUserId(),
                connectionId
        );


        return ResponseEntity.ok(
                "Connection accepted"
        );

    }





    // =====================================
    // REJECT CONNECTION REQUEST
    // =====================================

    @PutMapping("/reject/{connectionId}")
    public ResponseEntity<?> rejectRequest(
            @PathVariable String connectionId
    ){

        connectionService.rejectRequest(
                getCurrentUserId(),
                connectionId
        );


        return ResponseEntity.ok(
                "Connection rejected"
        );

    }





    // =====================================
    // CONNECTION STATUS
    // =====================================

    @GetMapping("/status/{username}")
    public ResponseEntity<ConnectionStatusResponse> getStatus(
            @PathVariable String username
    ){

        return ResponseEntity.ok(

                connectionService.getConnectionStatus(
                        getCurrentUserId(),
                        username
                )

        );

    }





    // =====================================
    // RECEIVED CONNECTION REQUESTS
    // =====================================

    @GetMapping("/requests")
    public ResponseEntity<List<Connection>> getRequests(){


        return ResponseEntity.ok(

                connectionService.getPendingRequests(
                        getCurrentUserId()
                )

        );

    }

}