package com.backend.backend.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.backend.backend.entity.ProductCategories;
import com.backend.backend.interfaces.ProductCategorieInterface;

@Service
public class ProductCategorieService {

    @Autowired
    private ProductCategorieInterface productCategorie;

    public Map<String, Object> addProductCategorie(ProductCategories categorieData) {
        Map<String, Object> responce = new HashMap<>();

        if (productCategorie.existsByCategoryName(categorieData.getCategoryName())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Category name already exists");
        }

        productCategorie.save(categorieData);
        responce.put("status", true);
        responce.put("message", "Product category has been successfully added!");
        return responce;
    }

    public Map<String, Object> categorieList() {
        Map<String, Object> responce = new HashMap<>();
        List<ProductCategories> categorieList = productCategorie.findAll();

        if (categorieList.isEmpty()) {
            responce.put("status", false);
            responce.put("message", "No product categories found");
            return responce;
        }

        responce.put("status", true);
        responce.put("message", "Product categories fetched successfully");
        responce.put("data", categorieList);
        return responce;
    }

}
