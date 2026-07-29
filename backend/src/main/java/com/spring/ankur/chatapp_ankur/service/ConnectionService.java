

package com.spring.ankur.chatapp_ankur.service;
import com.spring.ankur.chatapp_ankur.dto.ConnectionCountResponse;

import com.spring.ankur.chatapp_ankur.dto.ConnectionStatusResponse;
import com.spring.ankur.chatapp_ankur.entities.Connection;
import com.spring.ankur.chatapp_ankur.entities.ConnectionStatus;
import com.spring.ankur.chatapp_ankur.entities.Notification;
import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.enums.NotificationType;
import com.spring.ankur.chatapp_ankur.repositories.ConnectionRepository;
import com.spring.ankur.chatapp_ankur.repositories.NotificationRepository;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ConnectionService {

    private final ConnectionRepository connectionRepository;
    private final UserRepository userRepository;
    private final NotificationService notificationService;
    private final NotificationRepository notificationRepository;

    public ConnectionService(
            ConnectionRepository connectionRepository,
            UserRepository userRepository,
            NotificationService notificationService,
            NotificationRepository notificationRepository
    ) {
        this.connectionRepository = connectionRepository;
        this.userRepository = userRepository;
        this.notificationService = notificationService;
        this.notificationRepository = notificationRepository;
    }

    // ========================================
    // SEND CONNECTION REQUEST
    // ========================================
    public void sendRequest(String senderId, String receiverUsername) {

        User sender = userRepository.findById(senderId)
                .orElseThrow(() -> new RuntimeException("Sender not found"));

        User receiver = userRepository.findByUsername(receiverUsername)
                .orElseThrow(() -> new RuntimeException("Receiver not found"));

        if (sender.getId().equals(receiver.getId())) {
            throw new RuntimeException("You cannot connect with yourself.");
        }

        boolean exists =
                connectionRepository
                        .findBySenderIdAndReceiverId(sender.getId(), receiver.getId())
                        .isPresent()
                        ||
                connectionRepository
                        .findBySenderIdAndReceiverId(receiver.getId(), sender.getId())
                        .isPresent();

        if (exists) {
            throw new RuntimeException("Connection already exists.");
        }

        Connection connection = new Connection();

        connection.setSenderId(sender.getId());
        connection.setSenderUsername(sender.getUsername());

        connection.setReceiverId(receiver.getId());
        connection.setReceiverUsername(receiver.getUsername());

        connection.setStatus(ConnectionStatus.PENDING);
        connection.setCreatedAt(LocalDateTime.now());

        connectionRepository.save(connection);

        notificationService.createNotification(
                sender.getId(),
                receiver.getId(),
                NotificationType.CONNECTION_REQUEST,
                sender.getUsername() + " sent you a connection request.",
                connection.getId()
        );
    }

    // ========================================
    // ACCEPT REQUEST
    // ========================================
    public void acceptRequest(
            String receiverId,
            String connectionId
    ) {

        Connection connection = connectionRepository.findById(connectionId)
                .orElseThrow(() -> new RuntimeException("Connection request not found"));

        if (!connection.getReceiverId().equals(receiverId)) {
            throw new RuntimeException("You cannot accept this request.");
        }

        connection.setStatus(ConnectionStatus.CONNECTED);

        connectionRepository.save(connection);

        // Delete the old connection request notification
        List<Notification> notifications =
                notificationRepository.findByReceiverUserIdOrderByCreatedAtDesc(receiverId);

        for (Notification notification : notifications) {

            if (notification.getType() == NotificationType.CONNECTION_REQUEST
                    && connectionId.equals(notification.getReferenceId())) {

                notificationRepository.delete(notification);
                break;
            }
        }

        // Notify sender that request was accepted
        notificationService.createNotification(
                receiverId,
                connection.getSenderId(),
                NotificationType.CONNECTION_ACCEPTED,
                "Your connection request was accepted.",
                connection.getId()
        );
    }

    // ========================================
    // REJECT REQUEST
    // ========================================
    public void rejectRequest(
            String receiverId,
            String connectionId
    ) {

        Connection connection = connectionRepository.findById(connectionId)
                .orElseThrow(() -> new RuntimeException("Connection request not found"));

        if (!connection.getReceiverId().equals(receiverId)) {
            throw new RuntimeException("You cannot reject this request.");
        }

        connection.setStatus(ConnectionStatus.REJECTED);

        connectionRepository.save(connection);

        // Delete notification
        List<Notification> notifications =
                notificationRepository.findByReceiverUserIdOrderByCreatedAtDesc(receiverId);

        for (Notification notification : notifications) {

            if (notification.getType() == NotificationType.CONNECTION_REQUEST
                    && connectionId.equals(notification.getReferenceId())) {

                notificationRepository.delete(notification);
                break;
            }
        }
    }

    // ========================================
    // CONNECTION STATUS
    // ========================================
    public ConnectionStatusResponse getConnectionStatus(
            String userId,
            String username
    ) {

        User otherUser = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Connection connection =
                connectionRepository
                        .findBySenderIdAndReceiverId(userId, otherUser.getId())
                        .orElse(
                                connectionRepository
                                        .findBySenderIdAndReceiverId(otherUser.getId(), userId)
                                        .orElse(null)
                        );

        if (connection == null) {
            return new ConnectionStatusResponse("NONE");
        }

        return new ConnectionStatusResponse(connection.getStatus().name());
    }

    // ========================================
    // GET PENDING REQUESTS
    // ========================================
    public List<Connection> getPendingRequests(String userId) {

        return connectionRepository.findByReceiverIdAndStatus(
                userId,
                ConnectionStatus.PENDING
        );
    }

    public ConnectionCountResponse getConnectionCount(String username) {

    User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));

    long sent = connectionRepository.countBySenderIdAndStatus(
            user.getId(),
            ConnectionStatus.CONNECTED
    );

    long received = connectionRepository.countByReceiverIdAndStatus(
            user.getId(),
            ConnectionStatus.CONNECTED
    );

    return new ConnectionCountResponse(sent + received);
}
}