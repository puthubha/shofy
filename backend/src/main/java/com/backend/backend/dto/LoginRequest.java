package com.backend.backend.dto;

import lombok.Data;

@Data
public class LoginRequest {

    private String emailId;
    private String password;

}
