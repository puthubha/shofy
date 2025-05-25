import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { ProductData } from '../../interface';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  productApiData: ProductData[] = [];
  p: number = 1;
  count: number = 8;

  constructor(private ProductService: ProductServiceService) {}

  ngOnInit(): void {
    this.ProductService.getProductData().subscribe((data) => {
      this.productApiData = data;
    });
  }
}
