// package com.spring.ankur.chatapp_ankur.entities;

// import com.spring.ankur.chatapp_ankur.enums.NotificationType;
// import org.springframework.data.annotation.Id;
// import org.springframework.data.mongodb.core.mapping.Document;

// import java.time.LocalDateTime;

// @Document(collection = "notifications")
// public class Notification {

//     @Id
//     private String id;

//     // User receiving the notification
//     private String receiverUserId;

//     // User who triggered the notification
//     private String senderUserId;

//     private NotificationType type;
//     private String referenceId;
//     private String message;

//     private boolean read = false;

//     private LocalDateTime createdAt = LocalDateTime.now();

//     public Notification() {
//     }

//     public Notification(
//             String receiverUserId,
//             String senderUserId,
//             NotificationType type,
//             String message
//     ) {
//         this.receiverUserId = receiverUserId;
//         this.senderUserId = senderUserId;
//         this.type = type;
//         this.message = message;
//         this.read = false;
//         this.createdAt = LocalDateTime.now();
//     }

//     public String getId() {
//         return id;
//     }

//     public void setId(String id) {
//         this.id = id;
//     }

//     public String getReceiverUserId() {
//         return receiverUserId;
//     }

//     public void setReceiverUserId(String receiverUserId) {
//         this.receiverUserId = receiverUserId;
//     }

//     public String getSenderUserId() {
//         return senderUserId;
//     }

//     public void setSenderUserId(String senderUserId) {
//         this.senderUserId = senderUserId;
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





package com.spring.ankur.chatapp_ankur.entities;

import com.spring.ankur.chatapp_ankur.enums.NotificationType;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "notifications")
public class Notification {

    @Id
    private String id;

    // User receiving the notification
    private String receiverUserId;

    // User who triggered the notification
    private String senderUserId;

    private NotificationType type;

    // Used for actions like accepting connection request
    private String referenceId;

    private String message;

    private boolean read = false;

    private LocalDateTime createdAt = LocalDateTime.now();


    public Notification() {
    }


    public Notification(
            String receiverUserId,
            String senderUserId,
            NotificationType type,
            String message
    ) {
        this.receiverUserId = receiverUserId;
        this.senderUserId = senderUserId;
        this.type = type;
        this.message = message;
        this.read = false;
        this.createdAt = LocalDateTime.now();
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


    public String getReceiverUserId() {
        return receiverUserId;
    }

    public void setReceiverUserId(String receiverUserId) {
        this.receiverUserId = receiverUserId;
    }


    public String getSenderUserId() {
        return senderUserId;
    }

    public void setSenderUserId(String senderUserId) {
        this.senderUserId = senderUserId;
    }


    public NotificationType getType() {
        return type;
    }

    public void setType(NotificationType type) {
        this.type = type;
    }


    public String getReferenceId() {
        return referenceId;
    }

    public void setReferenceId(String referenceId) {
        this.referenceId = referenceId;
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