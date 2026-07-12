package com.spring.ankur.chatapp_ankur.dto;

public class ConnectionCountResponse {

    private long count;

    public ConnectionCountResponse() {
    }

    public ConnectionCountResponse(long count) {
        this.count = count;
    }

    public long getCount() {
        return count;
    }

    public void setCount(long count) {
        this.count = count;
    }
}