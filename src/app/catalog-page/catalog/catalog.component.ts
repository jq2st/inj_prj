import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog.service';
import { switchMap, map } from 'rxjs/operators';

export interface Item {
  id: number,
  picUrl?: string,
  name: string,
  articul: string,
  category: number,
  description: string,
  cost: number    
} 

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {

  sortBy: string = 's_alfa'
  items: Item[]
  isLoaded = false
  category = '0'
  
  constructor(private router: Router, private catalogService: CatalogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .pipe(
        switchMap((params: Params) => {
          console.log(params.category)
          if (!params.category) {
            return this.catalogService.getItems()
          }
          else {
            return this.catalogService.getItemsByCategory(params.category)
          }
        })
      ).subscribe(items => {
        this.items = items
        this.isLoaded = true
    })
  }

  sortCatalog(event) {
    this.sortBy = event
  }

  goToItem(item) {
    console.log(item)
    this.router.navigate(['/item', item.id])
  }

}
