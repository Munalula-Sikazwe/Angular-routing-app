import {CanActivate} from "@angular/router";

export class AuthGuardService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  }

}
