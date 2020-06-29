import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Item {
  id?: number,
  picUrl: string,
  name: string,
  cost: number    
} 

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {

  sortBy: string = 's_alfa'

  items: Item[] = [
    {id: 0, picUrl: "", name: "Бисер 1", cost: 4000},
    {id: 1, picUrl: "", name: "Бисер 2", cost: 6000},
    {id: 2, picUrl: "", name: "Бисер 1", cost: 400},
    {id: 3, picUrl: "", name: "Бисер 2", cost: 6000},
    {id: 4, picUrl: "", name: "Бисер 1", cost: 400},
    {id: 5, picUrl: "", name: "Бисер 2", cost: 600},
    {id: 6, picUrl: "", name: "Висер 1", cost: 400},
    {id: 7, picUrl: "", name: "Бисер 2", cost: 600},
    {id: 8, picUrl: "", name: "Бисер 1", cost: 400},
    {id: 9, picUrl: "", name: "Бисер 2", cost: 600},
    {id: 10, picUrl: "", name: "Бисер 1", cost: 400},
    {id: 11, picUrl: "", name: "Бисер 2", cost: 600}
  ]
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  sortCatalog(event) {
    this.sortBy = event
  }

  goToItem(item) {
    console.log(item)
    this.router.navigate(['/item', item.id])
  }

}
