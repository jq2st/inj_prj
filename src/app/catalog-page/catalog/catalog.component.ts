import { Component, OnInit } from '@angular/core';

export interface item {
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

  items: item[] = [
    {picUrl: "", name: "Бисер 1", cost: 400},
    {picUrl: "", name: "Бисер 2", cost: 600},
    {picUrl: "", name: "Бисер 1", cost: 400},
    {picUrl: "", name: "Бисер 2", cost: 600},
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
