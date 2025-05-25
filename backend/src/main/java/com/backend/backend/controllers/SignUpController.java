package com.backend.backend.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.backend.dto.LoginRequest;
import com.backend.backend.entity.SignUpUserData;
import com.backend.backend.services.SignUpService;

@RestController
public class SignUpController {

    @Autowired
    private SignUpService signUpService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public Map<String, Object> saveUserData(@RequestBody SignUpUserData userData) {
        userData.setPassword(passwordEncoder.encode(userData.getPassword()));
        userData.setRole("user");
        
        return signUpService.saveUserData(userData);
    }

    @PostMapping("/login")
    public Map<String,Object> loginData(@RequestBody LoginRequest loginData) {
        return signUpService.getLoginData(loginData);
    }

}
