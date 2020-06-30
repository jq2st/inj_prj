import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
        city: new FormControl('', Validators.required),
        street: new FormControl(''),
        house: new FormControl(''),
        appartments: new FormControl('')
      }),
      getType: new FormControl('byself')
    })
  }

  submitPur() {
    console.log(this.form.value)
  }

}
