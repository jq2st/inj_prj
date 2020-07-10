import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CatalogService } from '../services/catalog.service';
import { OrdersService } from '../services/orders.service';
import { Order } from '../shared/interfaces/interfaces';
import { Router } from '@angular/router';

export interface inCartItem {
  id?: any,
  name: string,
  amount: any,
  price: number,
  articul: string
}

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  isEmpty: boolean = true
  form: FormGroup
  isCreateAccount = false
  itemIds = []
  items: inCartItem[] = [] 
  totalPrice: number = 0
  order: Order = {username: ''}

  constructor(private cartService: CartService, private catalogService: CatalogService, private orderService: OrdersService, private router: Router) { }

  ngOnInit() {
    if (this.cartService.cartMainNum > 0) {
      this.isEmpty = false
      localStorage.getItem('cartItemIds').split('___').forEach(n => {
        if (n != '') {
          let itemId = n.split('__')[0]
          let itemAmount = n.split('__')[1]
          this.catalogService.getItem(Number.parseInt(itemId))
            .subscribe(item => {
              this.items.push({id: item.id, name: item.name, amount: itemAmount, price: item.cost, articul: item.articul})
              this.totalPrice += item.cost * Number.parseInt(itemAmount)
            })
        }
      })
    } 

    this.form = new FormGroup({
      userData: new FormGroup({
        name: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required])
      }),
      adress: new FormGroup({
        city: new FormControl('-', Validators.required),
        street: new FormControl('-', Validators.required),
        house: new FormControl('-', Validators.required),
        appartments: new FormControl('-', Validators.required)
      }),
      account: new FormGroup({
        email: new FormControl('gefault@mail.ru', [Validators.required, Validators.email]),
      }),
      getType: new FormControl('byself')
    })

  }

  createAccount() {
    this.isCreateAccount = !this.isCreateAccount
    if (this.isCreateAccount) {
      this.form.patchValue({account: {email: ''}})
    }
    else {
      this.form.patchValue({account: {email: 'gefault@mail.ru'}})
    }
  }

  changeGetType(event) {
    if (event.target.value == 'delivery') {
      this.form.patchValue({adress: {city: '', street: '', house: '', appartments: ''}})
    }
    else {
      this.form.patchValue({adress: {city: '-', street: '-', house: '-', appartments: '-'}})
    }
  }

  submitPur() {
    let adress = ''
    let form = this.form.value
    this.order.username = form.userData.name
    this.order.phone = form.userData.phone
    adress = form.adress.city + ', ' + form.adress.street + ', ' + form.adress.house + ', ' + form.adress.appartments
    this.order.adress = adress
    this.order.items = localStorage.getItem('cartItemIds')
    this.orderService.addOrder(this.order)
      .subscribe()
    this.cartService.mainNumZeroing()
    this.router.navigate(['/'])
  }

}
