package com.backend.backend.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.backend.backend.dto.FaqQuestion;
import com.backend.backend.entity.FaqQuestionData;
import com.backend.backend.interfaces.FaQuestionRepository;

@Service
public class FaQuestionService {

    @Autowired
    private FaQuestionRepository faQuestionRepository;

    public Map<String, Object> saveFaQuestionData(FaqQuestion faqQuestion) {
        Map<String, Object> response = new HashMap<>();

        FaqQuestionData faqQuestionData = new FaqQuestionData(null, faqQuestion.getName(), faqQuestion.getEmail(),
                faqQuestion.getSubject(), faqQuestion.getMessage());

        faQuestionRepository.save(faqQuestionData);
        response.put("status", true);
        response.put("message",
                "your question was sended sucsseesully into short time our suport team will cantect you.");
        return response;
    }

    public Map<String, Object> getAllFaQuestions() {
        Map<String, Object> response = new HashMap<>();
        List<FaqQuestionData> data = faQuestionRepository.findAll();

        if (data.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,
                    "No questions found in the system. Please check back later.");
        }

        response.put("status", true);
        response.put("message", "Successfully retrieved all questions from the system.");
        response.put("data", data);
        return response;
    }
}
