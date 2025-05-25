import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductData } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}

  private productApi =
    'http://localhost:8000/product-detail';  //https://6633f1aff7d50bbd9b4b2919.mockapi.io/product-details

  getProductData() {
    return this.http.get<ProductData[]>(this.productApi);
  }

  postProductData(value: ProductData) {
    return this.http.post(this.productApi, value);
  }
}
