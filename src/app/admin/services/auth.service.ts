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
    return ''
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

  private setToken(resp: FAuth) {
    console.log(resp)
  }

}
