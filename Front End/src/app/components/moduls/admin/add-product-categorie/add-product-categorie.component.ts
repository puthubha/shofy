import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddProductCategorieService } from 'src/app/components/services/add-product-categorie.service';
import { SweetAlertService } from 'src/app/components/services/sweet-alert.service';

@Component({
  selector: 'app-add-product-categorie',
  templateUrl: './add-product-categorie.component.html',
  styleUrls: ['./add-product-categorie.component.css'],
})
export class AddProductCategorieComponent implements OnInit {
  AddProductForm: FormGroup;
  imageError: string = '';
  isImageSaved: boolean = false;
  cardImageBase64: string = '';
  imageUrl: string = '';

  constructor(
    private Router: Router,
    private SweetAlert: SweetAlertService,
    private AddProductCategorie: AddProductCategorieService
  ) {
    this.AddProductForm = new FormGroup({
      productCategorieName: new FormControl('', Validators.required),
      productImage: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

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

    this.AddProductCategorie.postProductCategorie(
      this.AddProductForm.value
    ).subscribe();
    this.SweetAlert.success('Product Categorie Added successfully');
    this.Router.navigateByUrl('/product-categoties');
  }
}
