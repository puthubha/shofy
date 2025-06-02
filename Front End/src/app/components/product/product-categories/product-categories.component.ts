import { Component, OnInit } from '@angular/core';
import { AddProductCategorieService } from '../../services/add-product-categorie.service';
import { productCategorie } from '../../interface';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css'],
})
export class ProductCategoriesComponent implements OnInit {
  categorieApiData: productCategorie[] = [];
  p: number = 1;
  count: number = 6;

  constructor(private AddProductCategorie: AddProductCategorieService) {}

  ngOnInit(): void {
    this.AddProductCategorie.getProductCategorie().subscribe((responce:any) => {
      if(responce && responce.status){
        this.categorieApiData = responce.data;
      }
    });
  }
}
