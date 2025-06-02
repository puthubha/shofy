package com.backend.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "faq_question_data")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class FaqQuestionData {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "faq_id")
        private Long id;
        
        @Column(name = "name")
        private String name;

        @Column(name = "email")
        private String email;

        @Column(name = "subject")
        private String subject;

        @Column(name = "message")
        private String message;
}
