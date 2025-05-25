
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { productCategorie } from 'src/app/components/interface';
import { AddProductCategorieService } from 'src/app/components/services/add-product-categorie.service';
import { ProductServiceService } from 'src/app/components/services/product-service.service';
import { SweetAlertService } from 'src/app/components/services/sweet-alert.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  AddProductForm: FormGroup;

  imageError: string = '';
  isImageSaved: boolean = false;
  cardImageBase64: string = '';
  imageUrl: string = '';
  categorieApiData: productCategorie[] = [];

  constructor(
    private ProductService: ProductServiceService,
    private Router: Router,
    private SweetAlert: SweetAlertService,
    private AddProductCategorie: AddProductCategorieService
  ) {
    this.AddProductForm = new FormGroup({
      productName: new FormControl('', Validators.required),
      productPrice: new FormControl('', Validators.required),
      productDiscountPrice: new FormControl('', Validators.required),
      productCategorie: new FormControl('', Validators.required),
      productImage: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.AddProductCategorie.getProductCategorie().subscribe((data) => {
      this.categorieApiData = data;
    });
  }

  fileChangeEvent(fileInput: any) {
    this.imageError = '';
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;
        };
      };

      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  addProduct() {
    this.AddProductForm.value.productImage = this.cardImageBase64;
    this.ProductService.postProductData(this.AddProductForm.value).subscribe();
    this.SweetAlert.success('Product Added successfully');
    this.Router.navigate(['/filtered-products'], {
      queryParams: { categorie: this.AddProductForm.value.productCategorie },
    });
  }
}
