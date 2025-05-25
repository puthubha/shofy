import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductCategoriesComponent } from './components/product/product-categories/product-categories.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignUpComponent } from './components/login/sign-up/sign-up.component';
import { SignInComponent } from './components/login/sign-in/sign-in.component';
import { AllProductsComponent } from './components/product/all-products/all-products.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { AdminSidebarComponent } from './components/moduls/admin/admin-sidebar/admin-sidebar.component';
import { ProfileComponent } from './components/moduls/admin/profile/profile.component';
import { InformationComponent } from './components/moduls/admin/information/information.component';
import { UserListComponent } from './components/moduls/admin/user-list/user-list.component';
import { AddProductComponent } from './components/moduls/admin/add-product/add-product.component';
import { ViewFaqComponent } from './components/moduls/admin/view-faq/view-faq.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilteredProductsComponent } from './components/product/filtered-products/filtered-products.component';
import { UserSidebarComponent } from './components/moduls/user/user-sidebar/user-sidebar.component';
import { UserProfileComponent } from './components/moduls/user/user-profile/user-profile.component';
import { AuthAdminGuard } from './components/auth-guard/auth-admin.guard';
import { AuthUserGuard } from './components/auth-guard/auth-user.guard';
import { AddProductCategorieComponent } from './components/moduls/admin/add-product-categorie/add-product-categorie.component';


const routes: Routes = [
  {path:"", redirectTo:'home', pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"product-categoties", component:ProductCategoriesComponent},
  {path:"contact", component:ContactComponent},
  {path:"signup", component:SignUpComponent},
  {path:"signin", component:SignInComponent},
  {path:"all-products", component:AllProductsComponent},
  {path:"product-detail/:id", component:ProductDetailComponent},
  {path:"filtered-products", component:FilteredProductsComponent},
  {path:"admin-panel", redirectTo:'admin-panel/profile', pathMatch:'full'},
  {path:"admin-panel",component:AdminSidebarComponent,canActivate:[AuthAdminGuard],
  children:[
    {path:"profile" , component:ProfileComponent },
    {path:"information", component:InformationComponent},
    {path:"user-list", component:UserListComponent},
    {path:"add-product",component:AddProductComponent},
    {path:"view-faq",component:ViewFaqComponent},  
    {path:"add-product-categorie",component:AddProductCategorieComponent},  
  ]
},
{path:"user-panel", redirectTo:'user-panel/profile', pathMatch:'full'},
{path:"user-panel",component:UserSidebarComponent,canActivate:[AuthUserGuard],
children:[
  {path:"profile" , component:UserProfileComponent },
]},
{path:"**", component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
