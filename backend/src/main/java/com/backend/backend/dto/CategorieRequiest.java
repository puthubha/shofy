package com.backend.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CategorieRequiest {

    @NotBlank(message = "Category Image is required")
    private String categoryImage;

    @NotBlank(message = "Category name is required")
    private String categoryName;
}
