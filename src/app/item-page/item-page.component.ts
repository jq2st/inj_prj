import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Item } from '../catalog-page/catalog/catalog.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {

  itemId: number = 0
  item: Item
  itemName: string = ''
  itemPrice: number = 0
  itemDescription: string = ''
  itemAmount: number = 1

  constructor(private catalogService: CatalogService, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((p: Params) => this.itemId = p.id)
    this.catalogService.getItem(this.itemId)
      .subscribe(item => {
        this.item = item
        this.itemName = item.name
        this.itemPrice = item.cost
        this.itemDescription = item.description
      })
  }

  addToCart() {
    let amount = this.itemAmount
    this.cartService.addItem(amount, this.item.id)
  }

  amountIncrease() {
    this.itemAmount++
  }

  amountDecrease() {
    if (this.itemAmount > 1) {
      this.itemAmount--
    }
  }

}
