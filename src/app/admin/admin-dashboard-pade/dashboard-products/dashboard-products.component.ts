import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';
import { Item } from 'src/app/catalog-page/catalog/catalog.component';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

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
    forkJoin(this.catalogService.getItems(), this.catalogService.getCategories())
      .subscribe(res => {
        let items = res[0].map(its => {
          console.log(res[1], its)
          its.category = res[1].find(cat => cat.id == its.category).name
          return its
        })
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
    forkJoin(this.catalogService.putItem(event.id, event), this.catalogService.getCategories())
      .subscribe(res => {
        let n = res[0]
        let changed = this.productsList.find(i => i.id == n.id)
        changed.articul = n.articul
        changed.name = n.name
        changed.category = res[1].find(cat => cat.id == res[0].category).name
        changed.description = n.description
        changed.cost = n.cost
      })
  }

  addProduct(item) {
    forkJoin(this.catalogService.addItem(item), this.catalogService.getCategories())
      .subscribe(res => {
        res[0].category = res[1].find(cat => cat.id == res[0].category).name
        this.productsList.push(res[0])
      })
  }
}
