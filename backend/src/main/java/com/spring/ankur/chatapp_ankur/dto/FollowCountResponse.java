package com.spring.ankur.chatapp_ankur.dto;

public class FollowCountResponse {

    private long count;

    public FollowCountResponse() {
    }

    public FollowCountResponse(long count) {
        this.count = count;
    }

    public long getCount() {
        return count;
    }

    public void setCount(long count) {
        this.count = count;
    }
}