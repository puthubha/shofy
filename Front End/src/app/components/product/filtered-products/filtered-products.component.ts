import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductData } from '../../interface';

@Component({
  selector: 'app-filtered-products',
  templateUrl: './filtered-products.component.html',
  styleUrls: ['./filtered-products.component.css'],
})
export class FilteredProductsComponent implements OnInit {
  productApiData: ProductData[] = [];
  categorie: string = '';
  filteredData: ProductData[] = [];
  p: number = 1;
  count: number = 8;

  constructor(
    private ProductService: ProductServiceService,
    private Router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ProductService.getProductData().subscribe((data) => {
      this.productApiData = data;

      this.ActivatedRoute.queryParams.subscribe((queryParams) => {
        const propertyName = 'categorie';
        this.categorie = queryParams[propertyName];

        const data = this.productApiData.filter(
          (a) => a.productCategorie === this.categorie
        );

        this.filteredData = data;

      });
    });

  }
}
