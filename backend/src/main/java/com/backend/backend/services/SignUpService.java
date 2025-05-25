package com.backend.backend.services;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.backend.entity.SignUpUserData;
import com.backend.backend.exceptionHandler.EmailAlreadyExistsException;
import com.backend.backend.interfaces.SignUpInterface;

@Service
public class SignUpService {

    @Autowired
    private SignUpInterface signUpInterface;

    // public SignUpUserData saveUserData(SignUpUserData userData) {
    //     System.out.println(userData.toString());
    //     if(signUpInterface.existsByEmailId(userData.getEmailId())){
    //         throw new EmailAlreadyExistsException("Email already exists");
    //     }
    //     return signUpInterface.save(userData);

    // }

    public Map<String, Object> saveUserData(SignUpUserData userData) {
        Map<String, Object> response = new HashMap<>();

        if (signUpInterface.existsByEmailId(userData.getEmailId())) {
            response.put("status", false);
            response.put("message", "Email already exists");
            return response;
        }

        SignUpUserData savedUser = signUpInterface.save(userData);
        response.put("status", true);
        response.put("message", "User registered successfully");
        response.put("data", savedUser);
        return response;
    }
}
