import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import { ServersService } from '../servers.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
allowEdit = false;
changesSaved = false;
  constructor(private serversService: ServersService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.snapshot.queryParams;
    this.route.snapshot.fragment;
    const id = +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    this.route.queryParams.subscribe((queryParams:Params)=>{
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    })
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }
canDeactivate(): Observable<boolean>|Promise<boolean>|boolean{
    if(!this.allowEdit){
      return true;
    }else{
      if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved){
        return confirm("Do you want to discard the changes")
      }else{
        return true;
      }
    }
}
}
