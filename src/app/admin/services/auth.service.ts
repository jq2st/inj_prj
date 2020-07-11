import { Injectable } from '@angular/core';
import { Admin } from '../shared/interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FAuth } from 'src/app/shared/interfaces/interfaces';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  get token(): string {
    const expDate = new Date(localStorage.getItem('f-token-date'))
    if (new Date > expDate) {
      this.logout()
      return null
    }
    return localStorage.getItem('f-token')
  }

  logout() {
    
  }

  login(user: Admin): Observable<any> {
    user.returnSecureToken = true
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.apiKey, user)
    .pipe(
      tap(this.setToken)
    )
  }

  isAuth(): boolean {
    return !!this.token
  }

  private setToken(resp: FAuth | null) {
    if (resp) {
      const expDate = new Date(new Date().getTime() + +resp.expiresIn * 1000)
      localStorage.setItem('f-token', resp.idToken)
      localStorage.setItem('f-token-date', expDate.toString())
    } else {
      localStorage.clear()
    }
  }

}
