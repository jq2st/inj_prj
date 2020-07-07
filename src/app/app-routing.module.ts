import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog-page/catalog/catalog.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminLoginPageComponent } from './admin/admin-login-page/admin-login-page.component';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { AdminDashboardPadeComponent } from './admin/admin-dashboard-pade/admin-dashboard-pade.component';
import { DashboardProductsComponent } from './admin/admin-dashboard-pade/dashboard-products/dashboard-products.component';


const routes: Routes = [
  {
    path : '', component: MainLayoutComponent, children: [
      // {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: CatalogPageComponent},
      {path: 'item/:id', component: ItemPageComponent},
      {path: 'cart', component: CartPageComponent}
    ]
  },
  {path: 'admin', component: AdminLayoutComponent, children: [
    {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
    {path: 'login', component: AdminLoginPageComponent},
    {path: 'dashboard', component: AdminDashboardPadeComponent, children: [
      {path: 'products', component: DashboardProductsComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
