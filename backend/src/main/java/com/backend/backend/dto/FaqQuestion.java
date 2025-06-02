package com.backend.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class FaqQuestion {

    @NotBlank(message = "name is required")
    private String name;
    
    @NotBlank(message = "email is required")
    private String email;
    
    @NotBlank(message = "subject is required")
    private String subject;
    
    @NotBlank(message = "message is required")
    private String message;

}

