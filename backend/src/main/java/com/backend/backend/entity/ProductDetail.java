package com.backend.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@Table(name = "product_detail")
@NoArgsConstructor
public class ProductDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;

    @Column(name = "product_name", nullable = false)
    private String productName;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "discount_price")
    private Double discountPrice;

    @Lob
    @Column(name = "product_image", nullable = false, columnDefinition = "LONGTEXT")
    private String productImage;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private ProductCategories category;

}
