package com.spring.ankur.chatapp_ankur.dto;

public class ConnectionStatusResponse {

    private String status;

    public ConnectionStatusResponse() {
    }

    public ConnectionStatusResponse(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}