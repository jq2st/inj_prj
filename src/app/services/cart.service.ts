import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartMainNum = 0

  constructor() { }

  addItem(amount) {
    this.cartMainNum += amount
    localStorage.setItem("cartMainNum", "" + this.cartMainNum)
    console.log('Pizd', this.cartMainNum)
  }

  getStorageCartNum() {
    console.log('Piz', this.cartMainNum)
    if (localStorage.getItem("cartMainNum")) {
      this.cartMainNum = Number.parseInt(localStorage.getItem("cartMainNum"))
    }
  }

  mainNumZeroing() {
    this.cartMainNum = 0
    localStorage.removeItem("cartMainNum")
  }

}
