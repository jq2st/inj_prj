import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/catalog-page/catalog/catalog.component';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {

  @Input('item') item: Item;

  constructor() { }

  ngOnInit() {
  }

}
