import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './Products/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './Products/product-item/product-item.component';
import { SingleProductComponent } from './Products/single-product/single-product.component';
import { AddProductComponent } from './Products/add-product/add-product.component';
import { EditProductComponent } from './Products/edit-product/edit-product.component';
import { CategoriesComponent } from './Categories/categories/categories.component';
import { CategoryItemComponent } from './Categories/category-item/category-item.component';
import { SingleCategoryComponent } from './Categories/single-category/single-category.component';
import { AddCategoryComponent } from './Categories/add-category/add-category.component';
import { UsersComponent } from './Users/users/users.component';
import { AddUserComponent } from './Users/add-user/add-user.component';
import { SingleUserComponent } from './Users/single-user/single-user.component';
import { UserItemComponent } from './Users/user-item/user-item.component';
import { AuthGuard } from './Login/auth.guard';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  {
    path: 'product/:id',
    component: SingleProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-product',
    component: AddProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'category/:id',
    component: SingleCategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-category',
    component: AddCategoryComponent,
    canActivate: [AuthGuard],
  },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  {
    path: 'user/:id',
    component: SingleUserComponent,
    canActivate: [AuthGuard],
  },
  { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductsComponent,
    ProductItemComponent,
    SingleProductComponent,
    AddProductComponent,
    EditProductComponent,
    CategoriesComponent,
    CategoryItemComponent,
    SingleCategoryComponent,
    AddCategoryComponent,
    UsersComponent,
    AddUserComponent,
    SingleUserComponent,
    UserItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
