import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartMainNum = 0

  constructor() { }

  addItem(amount, itemId) {
    this.cartMainNum += amount
    localStorage.setItem("cartMainNum", "" + this.cartMainNum)
    if (localStorage.getItem("cartItemIds").length > 0) {
      let itemIdsArray = []
      localStorage.getItem("cartItemIds").split('___').forEach(i => {
        console.log(i.split('__'))
        itemIdsArray.push(i.split('__'))
      })

      let newV = localStorage.getItem("cartItemIds") + '___'
      console.log(itemIdsArray)
      // let totalAmount = 
      localStorage.setItem("cartItemIds", "" + itemId + "__" + amount)
    }
  }

  getStorageCartNum() {
    if (localStorage.getItem("cartMainNum")) {
      this.cartMainNum = Number.parseInt(localStorage.getItem("cartMainNum"))
    }
  }

  mainNumZeroing() {
    this.cartMainNum = 0
    localStorage.removeItem("cartMainNum")
  }

}
