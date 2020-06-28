import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CatalogCategoriesComponent } from './catalog-page/catalog-categories/catalog-categories.component';
import { CatalogComponent } from './catalog-page/catalog/catalog.component';
import { CatalogItemComponent } from './shared/components/catalog-item/catalog-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatalogPageComponent,
    CatalogCategoriesComponent,
    CatalogComponent,
    CatalogItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
