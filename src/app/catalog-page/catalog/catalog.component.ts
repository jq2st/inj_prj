import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from 'src/app/services/catalog.service';

export interface Item {
  id: number,
  picUrl?: string,
  name: string,
  articul: string,
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
  
  constructor(private router: Router, private catalogService: CatalogService) { }

  ngOnInit() {
    this.catalogService.getItems()
      .subscribe(items => {
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
