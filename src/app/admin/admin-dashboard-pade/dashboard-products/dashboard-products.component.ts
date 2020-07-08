import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';
import { Item } from 'src/app/catalog-page/catalog/catalog.component';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.scss']
})
export class DashboardProductsComponent implements OnInit {

  productsList: Item[] = []
  isEditing: boolean = false
  isAdding: boolean = false
  toEdit: number

  constructor(private catalogService: CatalogService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.catalogService.getItems()
      .subscribe(items => {
        this.productsList = items
      })
    this.route.queryParams
      .subscribe((q: Params) => {
        if (!q.edit) {
          this.isEditing = false
        }
      })
  }

  editProduct(id) {
    this.isEditing = true
    this.toEdit = id
    this.router.navigate(['admin/dashboard/products'], {
      queryParams: {edit: id}
    })
  }

  deleteProduct(id) {
    this.catalogService.deleteItem(id)
      .subscribe(n => {
        this.productsList = this.productsList.filter(n => n.id != id)
      })
  }

  changeProduct(event) {
    console.log(event)
    this.catalogService.putItem(event.id, event)
      .subscribe(n => {
        let changed = this.productsList.find(i => i.id == n.id)
        changed.articul = n.articul
        changed.name = n.name
        changed.category = n.category
        changed.description = n.description
        changed.cost = n.cost
      })
  }

  addProduct(item) {
    console.log('XXX', item)
    this.catalogService.addItem(item)
      .subscribe(n => this.productsList.push(n))
  }

}
