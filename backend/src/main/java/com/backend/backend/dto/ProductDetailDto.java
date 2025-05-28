package com.backend.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ProductDetailDto {

    @NotBlank(message = "Product name is required")
    private String productName;

    @NotNull(message = "Product price is required")
    private Double price;

    private Double discountPrice;

    @NotBlank(message = "Product Image is required")
    private String productImage;

    @NotNull(message = "Category Id is required")
    private Long categoryId;
}
