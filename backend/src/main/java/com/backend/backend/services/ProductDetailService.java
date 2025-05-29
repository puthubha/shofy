package com.backend.backend.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.backend.backend.dto.ProductDetailDto;
import com.backend.backend.entity.ProductCategories;
import com.backend.backend.entity.ProductDetail;
import com.backend.backend.interfaces.ProductCategorieInterface;
import com.backend.backend.interfaces.ProductDetailRepository;

@Service
public class ProductDetailService {

    @Autowired
    private ProductDetailRepository productDetailRepository;

    @Autowired
    private ProductCategorieInterface productCategorieInterface;

    public Map<String, Object> addProductDetail(ProductDetailDto productData) {
        Map<String, Object> responce = new HashMap<>();

        Optional<ProductCategories> categoryData = productCategorieInterface.findById(productData.getCategoryId());

        if (categoryData.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "this selected category was not exist");
        }

        ProductDetail productDetail = new ProductDetail(null, productData.getProductName(), productData.getPrice(),
                productData.getDiscountPrice(), productData.getProductImage(), categoryData.get());

        ProductDetail data = productDetailRepository.save(productDetail);

        responce.put("status", true);
        responce.put("data", data);
        responce.put("message", "Product added successfully");
        return responce;
    }

    public Map<String, Object> getProductDetailByCategoryId(Long categoryId) {
        Map<String, Object> responce = new HashMap<>();

        List<ProductDetail> ProductData = productDetailRepository.findByCategoryCategoryId(categoryId);

        if (ProductData.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "No products found for this category.");
        }
        responce.put("status", true);
        responce.put("data", ProductData);
        responce.put("message", "Product List sended successfully");
        return responce;
    }

    public Map<String, Object> getAllProductDetails() {
        Map<String, Object> responce = new HashMap<>();

        List<ProductDetail> ProductData = productDetailRepository.findAll();

        if (ProductData.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "No products found.");
        }
        responce.put("status", true);
        responce.put("data", ProductData);
        responce.put("message", "Product List sended successfully");
        return responce;
    }
}
