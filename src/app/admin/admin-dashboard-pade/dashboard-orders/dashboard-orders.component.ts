import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/interfaces/interfaces';
import { OrdersService } from 'src/app/services/orders.service';
import { CatalogService } from 'src/app/services/catalog.service';
import { Item } from 'src/app/catalog-page/catalog/catalog.component';

@Component({
  selector: 'app-dashboard-orders',
  templateUrl: './dashboard-orders.component.html',
  styleUrls: ['./dashboard-orders.component.scss']
})
export class DashboardOrdersComponent implements OnInit {

  ordersList: Order[]
  items = []

  constructor(private orderService: OrdersService, private catalogService: CatalogService) { }

  ngOnInit() {
    this.orderService.getOrders()
      .subscribe(orders => this.ordersList = orders)
      // .split('___').forEach(n => {
      //   if (n != '') {
      //     let itemId = n.split('__')[0]
      //     let itemAmount = n.split('__')[1]
      //     this.catalogService.getItem(Number.parseInt(itemId))
      //       .subscribe(item => {
      //         this.items.push({id: item.id, name: item.name, amount: itemAmount, price: item.cost, articul: item.articul})
      //         console.log()
      //       })
      //   }
      // })
  }

}
