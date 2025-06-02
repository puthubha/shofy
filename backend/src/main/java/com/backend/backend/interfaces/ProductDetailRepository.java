package com.backend.backend.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.backend.entity.ProductDetail;

@Repository
public interface ProductDetailRepository extends JpaRepository<ProductDetail,Long> {
    List<ProductDetail> findByCategoryCategoryId(Long categoryId);
}
