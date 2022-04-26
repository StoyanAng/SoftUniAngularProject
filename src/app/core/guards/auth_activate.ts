import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "src/app/user/userService";


@Injectable()
export class AuthActivate implements CanActivate {

    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const { authRequired, authFailRedirectUrl } = route.data;
       
        if(
            typeof authRequired === `boolean` &&
            authRequired === this.userService.isLogged
        )  { return true }
        
        let authRedirectUrl = authFailRedirectUrl;
        if(authRequired) {
            const loginRedirectUrl = route.url.reduce((acc, s) => `${acc}/${s.path}`, '')
            authRedirectUrl += `?redirectUrl=${loginRedirectUrl}`;
        }

        return this.router.parseUrl(authRedirectUrl || '')
    }

}