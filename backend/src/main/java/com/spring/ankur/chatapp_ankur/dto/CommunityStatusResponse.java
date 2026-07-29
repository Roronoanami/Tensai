package com.spring.ankur.chatapp_ankur.dto;

public class CommunityStatusResponse {

    private boolean owner;
    private boolean member;
    private String role;

    public CommunityStatusResponse() {
    }

    public CommunityStatusResponse(boolean owner, boolean member, String role) {
        this.owner = owner;
        this.member = member;
        this.role = role;
    }

    public boolean isOwner() {
        return owner;
    }

    public void setOwner(boolean owner) {
        this.owner = owner;
    }

    public boolean isMember() {
        return member;
    }

    public void setMember(boolean member) {
        this.member = member;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}