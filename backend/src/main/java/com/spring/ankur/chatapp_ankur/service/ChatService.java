package com.spring.ankur.chatapp_ankur.service;
import java.time.Instant;
import java.util.List;
import com.spring.ankur.chatapp_ankur.dto.ChatRoomResponse;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.transaction.annotation.Transactional;
import com.spring.ankur.chatapp_ankur.dto.ChatMessageRequest;
import com.spring.ankur.chatapp_ankur.dto.ChatMessageResponse;
import com.spring.ankur.chatapp_ankur.entities.ChatMessage;
import com.spring.ankur.chatapp_ankur.entities.ChatRoom;
import com.spring.ankur.chatapp_ankur.entities.ConnectionStatus;
import com.spring.ankur.chatapp_ankur.entities.User;
import com.spring.ankur.chatapp_ankur.repositories.ChatMessageRepository;
import com.spring.ankur.chatapp_ankur.repositories.ChatRoomRepository;
import com.spring.ankur.chatapp_ankur.repositories.ConnectionRepository;
import com.spring.ankur.chatapp_ankur.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
@Service
@RequiredArgsConstructor
public class ChatService {

    private final ChatRoomRepository chatRoomRepository;
    private final ChatMessageRepository chatMessageRepository;
    private final UserRepository userRepository;
    private final ConnectionRepository connectionRepository;

    @Transactional
    public ChatMessageResponse sendMessage(ChatMessageRequest request) {

        String senderId = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        User sender = userRepository.findById(senderId)
                .orElseThrow(() -> new RuntimeException("Sender not found"));

        User receiver = userRepository.findByUsername(request.getReceiverUsername())
                .orElseThrow(() -> new RuntimeException("Receiver not found"));

        if (sender.getId().equals(receiver.getId())) {
            throw new RuntimeException("You cannot message yourself.");
        }

        if (!isConnected(sender, receiver)) {
            throw new RuntimeException("Users are not connected.");
        }

        String content = request.getContent().trim();

if (content.isEmpty()) {
    throw new RuntimeException("Message cannot be empty.");
}

if (content.length() > 1000) {
    throw new RuntimeException("Message cannot exceed 1000 characters.");
}

ChatRoom room = getOrCreateRoom(sender, receiver);

ChatMessage message = ChatMessage.builder()
        .roomId(room.getId())
        .senderUsername(sender.getUsername())
        .receiverUsername(receiver.getUsername())
        .content(content)
        .createdAt(Instant.now())
        .read(false)
        .build();

        ChatMessage saved = chatMessageRepository.save(message);

        return mapToResponse(saved);
    }

    // Helper methods will go here...


    private boolean isConnected(User sender, User receiver) {

    return connectionRepository
            .findBySenderIdAndReceiverIdAndStatus(
                    sender.getId(),
                    receiver.getId(),
                    ConnectionStatus.CONNECTED
            )
            .isPresent()

            ||

            connectionRepository
                    .findByReceiverIdAndSenderIdAndStatus(
                            sender.getId(),
                            receiver.getId(),
                            ConnectionStatus.CONNECTED
                    )
                    .isPresent();
}

private ChatRoom getOrCreateRoom(User user1, User user2) {

    // Sort usernames alphabetically
    String first = user1.getUsername().compareToIgnoreCase(user2.getUsername()) < 0
            ? user1.getUsername()
            : user2.getUsername();

    String second = user1.getUsername().compareToIgnoreCase(user2.getUsername()) < 0
            ? user2.getUsername()
            : user1.getUsername();

    // Check if room already exists
    return chatRoomRepository
            .findByUser1AndUser2(first, second)
            .orElseGet(() -> {

                ChatRoom room = ChatRoom.builder()
                        .user1(first)
                        .user2(second)
                        .createdAt(Instant.now())
                        .build();

                return chatRoomRepository.save(room);
            });
}

private ChatMessageResponse mapToResponse(ChatMessage message) {

    return ChatMessageResponse.builder()
            .id(message.getId())
            .roomId(message.getRoomId())
            .senderUsername(message.getSenderUsername())
            .receiverUsername(message.getReceiverUsername())
            .content(message.getContent())
            .createdAt(message.getCreatedAt())
            .read(message.isRead())
            .build();
}


public List<ChatMessageResponse> getChatHistory(String roomId) {

    String currentUserId = SecurityContextHolder
            .getContext()
            .getAuthentication()
            .getName();

    User currentUser = userRepository.findById(currentUserId)
            .orElseThrow(() -> new RuntimeException("User not found"));

    ChatRoom room = chatRoomRepository.findById(roomId)
            .orElseThrow(() -> new RuntimeException("Chat room not found"));

    if (!room.getUser1().equals(currentUser.getUsername())
            && !room.getUser2().equals(currentUser.getUsername())) {
        throw new RuntimeException("Access denied.");
    }

    return chatMessageRepository
            .findByRoomIdOrderByCreatedAtAsc(roomId)
            .stream()
            .map(this::mapToResponse)
            .toList();
}

public ChatRoomResponse getRoomWithUser(String username) {

    String currentUserId = SecurityContextHolder
            .getContext()
            .getAuthentication()
            .getName();

    User currentUser = userRepository.findById(currentUserId)
            .orElseThrow(() -> new RuntimeException("User not found"));

    User otherUser = userRepository.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));

    if (!isConnected(currentUser, otherUser)) {
        throw new RuntimeException("Users are not connected.");
    }

    ChatRoom room = getOrCreateRoom(currentUser, otherUser);

    return ChatRoomResponse.builder()
            .roomId(room.getId())
            .user1(room.getUser1())
            .user2(room.getUser2())
            .build();
}
}