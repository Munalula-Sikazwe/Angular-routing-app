
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,  Router} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";

export class AuthGuardService implements CanActivate{

  constructor(private authService : AuthService,private router:Router) {
}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   return this.authService.isAuthenticated()
      .then((authenticated:boolean)=>{
        if (authenticated){
          return true;
        }
        else{
        this.router.navigate(['/']);
        }
      });
  }

}
