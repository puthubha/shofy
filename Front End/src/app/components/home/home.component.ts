import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { ProductData, SignUpdata } from '../interface';
import { Router } from '@angular/router';
import { LoginSessionService } from '../services/login-session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  productApiData: ProductData[] = [];
  braceletData: ProductData[] = [];
  earringData: ProductData[] = [];
  necklaceData: ProductData[] = [];
  p: number = 1;
  count: number = 8;

  constructor(
    private ProductService: ProductServiceService,
    private Router: Router,
    private LoginSession: LoginSessionService
  ) {}

  ngOnInit(): void {
    this.ProductService.getProductData().subscribe((data: ProductData[]) => {
      this.productApiData = data;

      this.braceletData = this.productApiData.filter(
        (b) => b.productCategorie === 'bracelets'
      );
      this.earringData = this.productApiData.filter(
        (c) => c.productCategorie === 'earrings'
      );
      this.necklaceData = this.productApiData.filter(
        (d) => d.productCategorie === 'necklaces'
      );

      this.LoginSession.loginSession();
    });
  }

  ngOnDestroy() {
    localStorage.removeItem('Token');
  }
}
