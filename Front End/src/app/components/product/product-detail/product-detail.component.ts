import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../services/product-service.service';
import { ProductData, SignUpApidata } from '../../interface';
import { ActivatedRoute, Router } from '@angular/router';
import { SweetAlertService } from '../../services/sweet-alert.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  productApiData: ProductData[] = [];
  paramId: number = 0;
  productData: ProductData[] = [];
  inputText: number = 1;
  localStorageData: SignUpApidata[] = [];
  constructor(
    private ProductService: ProductServiceService,
    private Router: Router,
    private ActivatedRoute: ActivatedRoute,
    private SweetAlert: SweetAlertService
  ) {}

  ngOnInit(): void {
    this.ProductService.getProductData().subscribe((a) => {
      this.productApiData = a ;

      this.ActivatedRoute.params.subscribe((params) => {
        this.paramId = params['id'];
      });

      const Data = this.productApiData.find((data) => data._id === this.paramId);

      if (Data) {
        this.productData = [Data];
      } else {
        this.productData = [];
      }

    });

    const data = localStorage.getItem('ShofyloginData');
    if (data) {
      this.localStorageData = JSON.parse(data);
    } else {
      this.localStorageData = [];
    }
  }

  onPlus() {
    this.inputText = this.inputText + 1;
  }

  onMinus() {
    if (this.inputText > 1) {
      this.inputText = this.inputText - 1;
    }
  }

  addToCart() {
    if (this.localStorageData.length >= 1) {
      this.SweetAlert.done('Product Added Successfully ');
    } else {
      this.SweetAlert.error('please sign in first');
      this.Router.navigateByUrl('/signin');
    }
  }
  buyNow() {
    if (this.localStorageData.length >= 1) {
      this.SweetAlert.done('Payment Done Successfully ');
    } else {
      this.SweetAlert.error('please sign in first');
      this.Router.navigateByUrl('/signin');
    }
  }
}
