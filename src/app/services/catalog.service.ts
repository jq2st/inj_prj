import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../catalog-page/catalog/catalog.component';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  link: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(this.link + '/items/' + id)
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.link + '/items')
  }
}
