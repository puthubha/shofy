import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductData, productCategorie } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class AddProductCategorieService {
  constructor(private http: HttpClient) {}

  productCategorieApi = 'http://localhost:8000/categorie';   //https://66391dcb4253a866a2506682.mockapi.io/categori

  getProductCategorie() {
    return this.http.get<productCategorie[]>(this.productCategorieApi);
  }

  postProductCategorie(value: productCategorie) {
    return this.http.post(this.productCategorieApi, value);
  }
}
