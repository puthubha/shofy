package com.backend.backend.dto;

import com.backend.backend.entity.SignUpUserData;

import lombok.Data;

@Data
public class LoginResponse {
    private String emailId;
    private String name;
    private String role;

    public LoginResponse(SignUpUserData user) {
        this.emailId = user.getEmailId();
        this.name = user.getName();
        this.role = user.getRole();
    }
}
