// package com.spring.ankur.chatapp_ankur.dto;

// import com.spring.ankur.chatapp_ankur.enums.NotificationType;

// import java.time.LocalDateTime;

// public class NotificationResponse {

//     private String id;

//     private String senderUserId;

//     private String senderUsername;

//     private String senderProfileImage;
//     private String referenceId;
//     private NotificationType type;

//     private String message;

//     private boolean read;

//     private LocalDateTime createdAt;

//     public NotificationResponse() {
//     }

//     public NotificationResponse(
//             String id,
//             String senderUserId,
//             String senderUsername,
//             String senderProfileImage,
//             NotificationType type,
//             String message,
//             boolean read,
//             LocalDateTime createdAt
//     ) {
//         this.id = id;
//         this.senderUserId = senderUserId;
//         this.senderUsername = senderUsername;
//         this.senderProfileImage = senderProfileImage;
//         this.type = type;
//         this.message = message;
//         this.read = read;
//         this.createdAt = createdAt;
//     }

//     public String getId() {
//         return id;
//     }

//     public void setId(String id) {
//         this.id = id;
//     }

//     public String getSenderUserId() {
//         return senderUserId;
//     }

//     public void setSenderUserId(String senderUserId) {
//         this.senderUserId = senderUserId;
//     }

//     public String getSenderUsername() {
//         return senderUsername;
//     }

//     public void setSenderUsername(String senderUsername) {
//         this.senderUsername = senderUsername;
//     }

//     public String getSenderProfileImage() {
//         return senderProfileImage;
//     }

//     public void setSenderProfileImage(String senderProfileImage) {
//         this.senderProfileImage = senderProfileImage;
//     }

//     public NotificationType getType() {
//         return type;
//     }

//     public void setType(NotificationType type) {
//         this.type = type;
//     }

//     public String getMessage() {
//         return message;
//     }

//     public void setMessage(String message) {
//         this.message = message;
//     }

//     public boolean isRead() {
//         return read;
//     }

//     public void setRead(boolean read) {
//         this.read = read;
//     }

//     public LocalDateTime getCreatedAt() {
//         return createdAt;
//     }

//     public void setCreatedAt(LocalDateTime createdAt) {
//         this.createdAt = createdAt;
//     }
// }




package com.spring.ankur.chatapp_ankur.dto;

import com.spring.ankur.chatapp_ankur.enums.NotificationType;

import java.time.LocalDateTime;

public class NotificationResponse {

    private String id;

    private String senderUserId;

    private String senderUsername;

    private String senderProfileImage;

    // Used for actions like accepting connection request
    private String referenceId;

    private NotificationType type;

    private String message;

    private boolean read;

    private LocalDateTime createdAt;


    public NotificationResponse() {
    }


    public NotificationResponse(
            String id,
            String senderUserId,
            String senderUsername,
            String senderProfileImage,
            String referenceId,
            NotificationType type,
            String message,
            boolean read,
            LocalDateTime createdAt
    ) {
        this.id = id;
        this.senderUserId = senderUserId;
        this.senderUsername = senderUsername;
        this.senderProfileImage = senderProfileImage;
        this.referenceId = referenceId;
        this.type = type;
        this.message = message;
        this.read = read;
        this.createdAt = createdAt;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getSenderUserId() {
        return senderUserId;
    }

    public void setSenderUserId(String senderUserId) {
        this.senderUserId = senderUserId;
    }


    public String getSenderUsername() {
        return senderUsername;
    }

    public void setSenderUsername(String senderUsername) {
        this.senderUsername = senderUsername;
    }


    public String getSenderProfileImage() {
        return senderProfileImage;
    }

    public void setSenderProfileImage(String senderProfileImage) {
        this.senderProfileImage = senderProfileImage;
    }


    public String getReferenceId() {
        return referenceId;
    }

    public void setReferenceId(String referenceId) {
        this.referenceId = referenceId;
    }


    public NotificationType getType() {
        return type;
    }

    public void setType(NotificationType type) {
        this.type = type;
    }


    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


    public boolean isRead() {
        return read;
    }

    public void setRead(boolean read) {
        this.read = read;
    }


    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}