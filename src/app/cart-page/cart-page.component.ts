import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  isEmpty: boolean = true
  form: FormGroup
  isCreateAccount = false

  constructor(private cartService: CartService) { }

  ngOnInit() {
    if (this.cartService.cartMainNum > 0) {
      this.isEmpty = false
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
    console.log(this.form.value)
    this.cartService.mainNumZeroing()
  }

}
