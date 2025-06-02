package com.backend.backend.interfaces;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.backend.entity.ProductCategories;

@Repository
public interface ProductCategorieInterface extends JpaRepository<ProductCategories, Long> {
    boolean existsByCategoryName(String categorieName);
}
