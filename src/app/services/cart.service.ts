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

    if (localStorage.getItem("cartItemIds") != null) {
      let qurCartIds = localStorage.getItem("cartItemIds")
      let itemIdsArray = []
      let totalAmount
      localStorage.getItem("cartItemIds").split('___').forEach(i => {
        console.log(i.split('__'))
        itemIdsArray.push(i.split('__'))
      })

      let arethere = 0
      itemIdsArray.forEach(n => {
        if (n[0] == itemId) {
          totalAmount = Number.parseInt(n[1]) + amount
          arethere++
        }
      })
      console.log(itemIdsArray)
      itemIdsArray = itemIdsArray.filter(n => {
        return n[0] != itemId
      })

      let newArr = []
      itemIdsArray.forEach((n, i) => {
        newArr[i] = n.join('__')
      })
      let qurValues = newArr.join('___')

      if (arethere == 0) {
        localStorage.setItem("cartItemIds", qurCartIds + '___' + itemId + "__" + amount)
      }
      else {
        localStorage.setItem("cartItemIds", qurValues + '___' + itemId + "__" + totalAmount)
      }
      

      console.log(localStorage.getItem("cartItemIds"))
      console.log(itemIdsArray)
    }
    else {
      localStorage.setItem("cartItemIds", itemId + "__" + amount)
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
    localStorage.removeItem('cartItemIds')
  }

}
