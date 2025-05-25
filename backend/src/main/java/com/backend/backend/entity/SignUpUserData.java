package com.backend.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "signUp_user_data")
@Data
public class SignUpUserData {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id", unique = true)
    private Long id;
    
    @Column(name = "email_id")
    private String emailId;
    
    
    @Column(name = "password")
    private String password;

    @Column(name = "name")
    private String name;

    @Column(name = "role")
    private String role;
}
