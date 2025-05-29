package com.backend.backend.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.backend.dto.FaqQuestion;
import com.backend.backend.services.FaQuestionService;

@RestController
public class faqQuestionController {

    @Autowired
    private FaQuestionService faQuestionService;

    @GetMapping("/faqQuestions") 
    private Map<String,Object> getAllFaQuestionData(){
        return faQuestionService.getAllFaQuestions();
    }

    @PostMapping("/faqQuestions") 
    private Map<String,Object> saveFaQuestionData(@RequestBody FaqQuestion faqQuestion){
        return faQuestionService.saveFaQuestionData(faqQuestion);
    }
}
