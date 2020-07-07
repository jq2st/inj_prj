import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';
import { Item } from 'src/app/catalog-page/catalog/catalog.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.scss']
})
export class DashboardProductsComponent implements OnInit {

  productsList: Item[] = []

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.catalogService.getItems()
      .subscribe(items => {
        this.productsList = items
      })
  }

}
