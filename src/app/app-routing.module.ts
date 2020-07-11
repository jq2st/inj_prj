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
import { DashboardCategoriesComponent } from './admin/admin-dashboard-pade/dashboard-categories/dashboard-categories.component';
import { DashboardOrdersComponent } from './admin/admin-dashboard-pade/dashboard-orders/dashboard-orders.component';
import { AuthGuard } from './admin/services/auth.guard';
import { CabinetPageComponent } from './cabinet-page/cabinet-page.component';
import { UserAuthGuard } from './services/user-auth.guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { PayPageComponent } from './pay-page/pay-page.component';
import { AboutPageComponent } from './about-page/about-page.component';


const routes: Routes = [
  {
    path : '', component: MainLayoutComponent, children: [
      // {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: CatalogPageComponent},
      {path: 'item/:id', component: ItemPageComponent},
      {path: 'cart', component: CartPageComponent},
      {path: 'cabinet', component: CabinetPageComponent, canActivate: [UserAuthGuard]},
      {path: 'contacts', component: ContactsPageComponent},
      {path: 'about', component: AboutPageComponent},
      {path: 'pay', component: PayPageComponent},
      {path: 'error', component: ErrorPageComponent},
    ]
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
    {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
    {path: 'login', component: AdminLoginPageComponent},
    {path: 'dashboard', component: AdminDashboardPadeComponent, canActivate: [AuthGuard], children: [
      {path: 'categories', component: DashboardCategoriesComponent},
      {path: 'products', component: DashboardProductsComponent},
      {path: 'orders', component: DashboardOrdersComponent}
    ]}
  ]},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
