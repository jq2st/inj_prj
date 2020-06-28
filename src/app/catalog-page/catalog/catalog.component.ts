import { Component, OnInit } from '@angular/core';

export interface Item {
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

  items: Item[] = [
    {picUrl: "", name: "Бисер 1", cost: 40000},
    {picUrl: "", name: "Бисер 2", cost: 6000},
    {picUrl: "", name: "Бисер 1", cost: 400},
    {picUrl: "", name: "Бисер 2", cost: 60000},
    {picUrl: "", name: "Бисер 1", cost: 400},
    {picUrl: "", name: "Бисер 2", cost: 600},
    {picUrl: "", name: "Бисер 1", cost: 400},
    {picUrl: "", name: "Бисер 2", cost: 600},
    {picUrl: "", name: "Бисер 1", cost: 400},
    {picUrl: "", name: "Бисер 2", cost: 600},
    {picUrl: "", name: "Бисер 1", cost: 400},
    {picUrl: "", name: "Бисер 2", cost: 600}
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
