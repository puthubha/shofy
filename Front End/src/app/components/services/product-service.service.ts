import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductData } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}

  private productApi = 'http://localhost:8080';

  getProductData(isGetALlProductList, productId = 0) {
    if (isGetALlProductList) {
      return this.http.get<ProductData[]>(this.productApi + '/productDetail');
    } else {
      return this.http.get<ProductData[]>(
        this.productApi + '/productDetail/' + productId
      );
    }
  }

  addProductData(value: ProductData) {
    return this.http.post(this.productApi + '/addProductDetail', value);
  }
}
