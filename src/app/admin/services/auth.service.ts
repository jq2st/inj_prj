import { Injectable } from '@angular/core';
import { Admin } from '../shared/interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  get token(): string {
    return ''
  }

  logout() {

  }

  login(user: Admin) {
    this.http.post('', user)
  }

  isAuth(): boolean {
    return !!this.token
  }

}
