package com.backend.backend.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.backend.entity.SignUpUserData;


@Repository
public interface SignUpInterface extends JpaRepository<SignUpUserData, Long> {
    boolean existsByEmailId(String emailId);
}
