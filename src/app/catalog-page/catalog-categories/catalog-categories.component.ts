import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';

@Component({
  selector: 'app-catalog-categories',
  templateUrl: './catalog-categories.component.html',
  styleUrls: ['./catalog-categories.component.scss']
})
export class CatalogCategoriesComponent implements OnInit {

  categories

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.catalogService.getCategories()
      .subscribe(c => {
        this.categories = c
        console.log(this.categories)
      })
  }

}
