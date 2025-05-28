package com.backend.backend.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.backend.dto.LoginRequest;
import com.backend.backend.dto.LoginResponse;
import com.backend.backend.dto.UserDataResponse;
import com.backend.backend.entity.SignUpUserData;
import com.backend.backend.exceptionHandler.RuntimeConflictException;
import com.backend.backend.interfaces.SignUpInterface;

@Service
public class SignUpService {

    @Autowired
    private SignUpInterface signUpInterface;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public Map<String, Object> saveUserData(SignUpUserData userData) {
        Map<String, Object> response = new HashMap<>();

        Optional<SignUpUserData> existingUser = signUpInterface.findByEmailId(userData.getEmailId());
        
        if (existingUser.isPresent()) {
            throw new RuntimeConflictException("Email already exists");
        }

        SignUpUserData savedUser = signUpInterface.save(userData);
        response.put("status", true);
        response.put("message", "User registered successfully");
        response.put("data", savedUser);
        return response;
    }

    public Map<String, Object> getLoginData(LoginRequest loginData) {
        Map<String, Object> responce = new HashMap<>();

        Optional<SignUpUserData> existingUser = signUpInterface.findByEmailId(loginData.getEmailId());

        if (existingUser.isEmpty()) {
            responce.put("status", false);
            responce.put("message", "Email address not registered. Please sign up first.");
            return responce;
        }
        SignUpUserData user = existingUser.get();

        if (!passwordEncoder.matches(loginData.getPassword(), user.getPassword())) {
            responce.put("status", false);
            responce.put("message", "Invalid password.");
            return responce;
        }

        LoginResponse data = new LoginResponse(user);
        responce.put("status", true);
        responce.put("message", "User logged in successfully");
        responce.put("data", data);
        return responce;
    }

    public Map<String, Object> getAllUsersData() {
        Map<String, Object> responce = new HashMap<>();

        List<SignUpUserData> userData = signUpInterface.findAll();
        if (userData.isEmpty()) {
            responce.put("status", false);
            responce.put("message", "we don't have any users");
            return responce;
        }

        List<UserDataResponse> responceUserData = userData.stream()
                .map(user -> new UserDataResponse(user.getId(), user.getName(), user.getEmailId(), user.getRole()))
                .collect(Collectors.toList());
        responce.put("status", true);
        responce.put("message", "All users data fetched successfully");
        responce.put("data", responceUserData);
        return responce;
    }
}
