import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/catalog-page/catalog/catalog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {

  @Input('item') item: Item;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goToItem(item) {
    console.log(item)
    this.router.navigate(['/item', item.id])
  }

}
