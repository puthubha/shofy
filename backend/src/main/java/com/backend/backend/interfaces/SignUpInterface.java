package com.backend.backend.interfaces;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.backend.entity.SignUpUserData;


@Repository
public interface SignUpInterface extends JpaRepository<SignUpUserData, Long> {
    Optional<SignUpUserData> findByEmailId(String emailId);
}
