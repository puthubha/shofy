package com.backend.backend.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.backend.dto.ProductDetailDto;
import com.backend.backend.services.ProductDetailService;

import jakarta.validation.Valid;

@RestController
public class ProductDetailController {

    @Autowired
    private ProductDetailService productDetailService;

    @PostMapping("/addProductDetail")
    public Map<String,Object> addProductDetail(@Valid @RequestBody ProductDetailDto productData) {
        return productDetailService.addProductDetail(productData);
    }

    @GetMapping({"/productDetail", "/productDetail/{id}"})
    public Map<String, Object> getProductDetail(@PathVariable(value = "id", required = false) Long id) {
        if (id != null) {
            return productDetailService.getProductDetailByCategoryId(id);
        } else {
            return productDetailService.getAllProductDetails();
        }
    }
    

}
