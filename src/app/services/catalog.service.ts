import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../catalog-page/catalog/catalog.component';
import { Category } from '../shared/interfaces/interfaces';

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

  getItemsByCategory(category): Observable<Item[]> {
    return this.http.get<Item[]>(this.link + '/items?category=' + category)
  }

  getCategory(id: number): Observable<Category> {
    return this.http.get<Category>(this.link + '/categories/' + id)
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.link + '/categories')
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(this.link + '/categories/' + id)
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.link + '/categories/', category)
  }

  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(this.link + '/items/' + id)
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.link + '/items/', item)
  }

  putItem(id: number, item: Item): Observable<Item> {
    return this.http.put<Item>(this.link + '/items/' + id, {
      name: item.name,
      articul: item.articul,
      category: item.category,
      description: item.description,
      cost: item.cost
    })
  }
}
