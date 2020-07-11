import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../shared/interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  link: string = environment.fDbUrl

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.link + '/orders')
  }

  addOrder(order: Order): Observable<Order> {
    console.log(order)
    return this.http.post(this.link + '/orders', order)
  }

}
