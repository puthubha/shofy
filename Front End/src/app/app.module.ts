import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { ProductCategoriesComponent } from './components/product/product-categories/product-categories.component';
import { AllProductsComponent } from './components/product/all-products/all-products.component';
import { FilteredProductsComponent } from './components/product/filtered-products/filtered-products.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { AdminSidebarComponent } from './components/moduls/admin/admin-sidebar/admin-sidebar.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/moduls/admin/add-product/add-product.component';
import { ViewFaqComponent } from './components/moduls/admin/view-faq/view-faq.component';
import { UserListComponent } from './components/moduls/admin/user-list/user-list.component';
import { UserSidebarComponent } from './components/moduls/user/user-sidebar/user-sidebar.component';
import { UserProfileComponent } from './components/moduls/user/user-profile/user-profile.component';
import { AddProductCategorieComponent } from './components/moduls/admin/add-product-categorie/add-product-categorie.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    ProductCategoriesComponent,
    AllProductsComponent,
    FilteredProductsComponent,
    ProductDetailComponent,
    AdminSidebarComponent,
    ContactComponent,
    PageNotFoundComponent,
    AddProductComponent,
    ViewFaqComponent,
    UserListComponent,
    UserSidebarComponent,
    UserProfileComponent,
    AddProductCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
