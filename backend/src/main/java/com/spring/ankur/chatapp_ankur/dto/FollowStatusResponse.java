package com.spring.ankur.chatapp_ankur.dto;

public class FollowStatusResponse {

    private boolean following;

    public FollowStatusResponse() {
    }

    public FollowStatusResponse(boolean following) {
        this.following = following;
    }

    public boolean isFollowing() {
        return following;
    }

    public void setFollowing(boolean following) {
        this.following = following;
    }
}