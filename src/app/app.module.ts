import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    ItemPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
