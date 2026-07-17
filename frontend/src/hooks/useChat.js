import { useEffect, useRef, useState } from "react";

import {
    connectSocket,
    subscribeRoom,
    sendMessageSocket,
    disconnectSocket,
} from "@/services/chatService";

export default function useChat(roomId, token) {

    const [messages, setMessages] = useState([]);

    const subscriptionRef = useRef(null);

    useEffect(() => {

        if (!roomId || !token) return;

        connectSocket(token, () => {

            subscriptionRef.current = subscribeRoom(
                roomId,
                (message) => {

                    setMessages((prev) => [...prev, message]);

                }
            );

        });

        return () => {

            subscriptionRef.current?.unsubscribe();

            disconnectSocket();

        };

    }, [roomId, token]);

    const sendMessage = (receiverUsername, content) => {

        if (!content.trim()) return;

        sendMessageSocket(receiverUsername, content);

    };

    return {
        messages,
        setMessages,
        sendMessage,
    };
}