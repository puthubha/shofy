package com.backend.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserDataResponse {
    private Long userId;
    private String name;
    private String email;
    private String role;
}
