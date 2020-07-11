import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';

@Injectable({
    providedIn: 'root'
  })
export class UserAuthGuard implements CanActivate {

    constructor(private auth: UserAuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        // throw new Error("Method not implemented.");
        console.log('test', this.auth.isAuth())
        if (this.auth.isAuth()) {
            return true
        }
        else {
            this.auth.isActive = true
        }
    }
    
}