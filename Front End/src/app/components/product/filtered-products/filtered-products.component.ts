import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductData } from '../../interface';
import { SweetAlertService } from '../../services/sweet-alert.service';

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
    private ActivatedRoute: ActivatedRoute,
    private SweetAlert: SweetAlertService
  ) {}

  ngOnInit(): void {
    this.ActivatedRoute.queryParams.subscribe((queryParams) => {
      const propertyName = 'categorie';
      this.categorie = queryParams[propertyName];

      if (this.categorie) {
        this.ProductService.getProductData(
          false,
          Number(this.categorie)
        ).subscribe({
          next: (responce: any) => {
            if (responce) {
              this.productApiData = responce.data;
              // this.SweetAlert.success(responce.message);
            }
          },
          error: (err: any) => {
            if (err.error) {
              this.SweetAlert.error(err.error.message);
            }
          },
        });
      }
    });
  }
}
