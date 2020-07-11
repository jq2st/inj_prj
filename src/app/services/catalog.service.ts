import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../catalog-page/catalog/catalog.component';
import { Category, fResp } from '../shared/interfaces/interfaces';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  link: string = environment.fDbUrl

  constructor(private http: HttpClient) { }

  getItem(id: string): Observable<Item> {
    return this.http.get<Item>(this.link + '/items/' + id + '.json')
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.link + '/items.json')
    .pipe(map((resp: {[key: string]: any}) => {
      return Object
        .keys(resp)
        .map(key => ({
          ...resp[key],
          id: key 
        }))
    }))
  }

  getItemsByCategory(category): Observable<Item[]> {
    return this.http.get<Item[]>(this.link + '/items?category=' + category + '.json')
    .pipe(map((resp: {[key: string]: any}) => {
        return Object
          .keys(resp)
          .map(key => ({
            ...resp[key],
            id: key 
          }))
    }))
  }

  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(this.link + '/categories/' + id + '.json')
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.link + '/categories.json')
      .pipe(map((resp: {[key: string]: any}) => {
          return Object
            .keys(resp)
            .map(key => ({
              ...resp[key],
              id: key 
            }))
      }))
  }

  deleteCategory(id: string): Observable<void> {
    return this.http.delete<void>(this.link + '/categories/' + id + '.json')
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post(this.link + '/categories.json', category)
      .pipe(
        map((resp: fResp) => {
          return {
            ...category,
            id: resp.name
          }
        })
      )
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(this.link + '/items/' + id + '.json')
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post(this.link + '/items.json', item)
    .pipe(
      map((resp: fResp) => {
        return {
          ...item,
          id: +resp.name
        }
      })
    )
  }

  putItem(id: string, item: Item): Observable<Item> {
    return this.http.put<Item>(this.link + '/items/' + id + '.json', {
      name: item.name,
      articul: item.articul,
      category: item.category,
      description: item.description,
      cost: item.cost
    })
  }
}
