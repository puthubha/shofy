package com.backend.backend.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.backend.dto.CategorieRequiest;
import com.backend.backend.entity.ProductCategories;
import com.backend.backend.services.ProductCategorieService;

import jakarta.validation.Valid;

@RestController
public class productCategorieContoller {

    @Autowired
    private ProductCategorieService categorieService;


    @PostMapping("/productCategorie")
    public Map<String,Object> addProductCategorie(@Valid @RequestBody CategorieRequiest categorie) {
        ProductCategories categorieData = new ProductCategories(null,categorie.getCategoryName(), categorie.getCategoryImage());
        return categorieService.addProductCategorie(categorieData);
    }

    @GetMapping("/productCategorie")
    public Map<String,Object> productCategorieList() {
        return categorieService.categorieList();
    }
}
