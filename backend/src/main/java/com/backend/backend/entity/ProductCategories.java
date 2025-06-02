package com.backend.backend.entity;
// import jakarta.validation.constraints.NotBlank;
// import jakarta.validation.constraints.NotBlank;
// import jakarta.validation.constraints.NotNull;

// import org.springframework.validation.annotation.Validated;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "product_categories")
@AllArgsConstructor
@NoArgsConstructor
public class ProductCategories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private Long categoryId;

    @Column(name = "category_name")
    private String categoryName;

    @Lob
    @Column(name = "category_image", columnDefinition = "LONGTEXT")
    private String categoryImage;

}
