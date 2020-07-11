import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';
import { Category } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-dashboard-categories',
  templateUrl: './dashboard-categories.component.html',
  styleUrls: ['./dashboard-categories.component.scss']
})
export class DashboardCategoriesComponent implements OnInit {

  isAdding: boolean = false
  categoriesList: Category[] = []

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.catalogService.getCategories()
      .subscribe(categories => {
        this.categoriesList = categories
        console.log(categories)
      })
  }

  deleteCategory(id) {
    this.catalogService.deleteCategory(id)
      .subscribe(n => {
        this.categoriesList = this.categoriesList.filter(c => c.id != id)
      })
  }

  addCategory(event) {
    this.catalogService.addCategory(event)
      .subscribe(n => {
        this.categoriesList.push(n)
      })
  }

}
