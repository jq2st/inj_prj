import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CatalogCategoriesComponent } from './catalog-page/catalog-categories/catalog-categories.component';
import { CatalogComponent } from './catalog-page/catalog/catalog.component';
import { CatalogItemComponent } from './shared/components/catalog-item/catalog-item.component';
import { SumPipe } from './pipes/sum.pipe';
import { SortComponent } from './shared/components/sort/sort.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import { SortFilterPipe } from './pipes/sort-filter.pipe';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminLoginPageComponent } from './admin/admin-login-page/admin-login-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { AdminDashboardPadeComponent } from './admin/admin-dashboard-pade/admin-dashboard-pade.component';
import { DashboardProductsComponent } from './admin/admin-dashboard-pade/dashboard-products/dashboard-products.component';
import { DashboardNavComponent } from './admin/admin-dashboard-pade/dashboard-nav/dashboard-nav.component';
import { EditProductComponent } from './shared/components/edit-product/edit-product.component';
import { AddProductComponent } from './shared/components/add-product/add-product.component';
import { DashboardCategoriesComponent } from './admin/admin-dashboard-pade/dashboard-categories/dashboard-categories.component';
import { DashboardOrdersComponent } from './admin/admin-dashboard-pade/dashboard-orders/dashboard-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogPageComponent,
    CatalogCategoriesComponent,
    CatalogComponent,
    CatalogItemComponent,
    SumPipe,
    SortComponent,
    FilterComponent,
    SortFilterPipe,
    CartPageComponent,
    ItemPageComponent,
    AdminLayoutComponent,
    AdminLoginPageComponent,
    MainLayoutComponent,
    AdminDashboardPadeComponent,
    DashboardProductsComponent,
    DashboardNavComponent,
    EditProductComponent,
    AddProductComponent,
    DashboardCategoriesComponent,
    DashboardOrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
