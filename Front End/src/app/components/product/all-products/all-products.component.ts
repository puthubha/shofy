import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { ProductData } from '../../interface';
import { SweetAlertService } from '../../services/sweet-alert.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  productApiData: ProductData[] = [];
  p: number = 1;
  count: number = 12;
  selectedView: String = 'gridView';

  constructor(
    private ProductService: ProductServiceService,
    private SweetAlert: SweetAlertService
  ) {}

  ngOnInit(): void {
    this.ProductService.getProductData(true).subscribe({
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

  selectedViewChange(view: string) {
    this.selectedView = view;
  }
}
