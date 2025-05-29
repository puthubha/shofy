package com.backend.backend.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.backend.entity.FaqQuestionData;

public interface FaQuestionRepository extends JpaRepository<FaqQuestionData,Long>{

}
