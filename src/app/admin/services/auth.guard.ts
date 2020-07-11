import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        // throw new Error("Method not implemented.");
        console.log('test', this.auth.isAuth())
        if (this.auth.isAuth()) {
            console.log('da')
            return true
        }
        else {
            console.log('net')
            this.router.navigate(['/admin', 'login'])
        }
    }
    
}
