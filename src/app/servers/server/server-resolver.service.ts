import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ServersService} from "../servers.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class ServerResolverService implements Resolve<Server>{
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
return this.serversService.getServer(+route.params['id']);
}

  constructor(private serversService:ServersService) { }
}
interface Server { id:number,name:string,status:string }
