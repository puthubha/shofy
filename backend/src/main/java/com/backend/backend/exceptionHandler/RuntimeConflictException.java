package com.backend.backend.exceptionHandler;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class RuntimeConflictException extends RuntimeException {
    public RuntimeConflictException(String message) {
        super(message);
    }
}
