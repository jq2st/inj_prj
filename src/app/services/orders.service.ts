import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../shared/interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  link: string = 'http://localhost:3000'

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.link + '/orders')
  }

  addOrder(order: Order): Observable<Order> {
    console.log(order)
    return this.http.post(this.link + '/orders', order)
  }

}
