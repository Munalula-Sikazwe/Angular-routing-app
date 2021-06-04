import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {ServersComponent} from "./servers/servers.component";
import {ServerComponent} from "./servers/server/server.component";
import {EditServerComponent} from "./servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuardService} from "./auth-guard.service";
import {CanDeactivateGuardService} from "./can-deactivate-guard.service";
import {ErrorPageComponent} from "./error-page/error-page.component";
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [{path: ':id/:name', component: UserComponent}]},

  {
    path: 'servers',canActivateChild:[AuthGuardService], component: ServersComponent,
    children: [{path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent,canDeactivate:[CanDeactivateGuardService]},
    ]
  },
  {path:'page-not-found',component:ErrorPageComponent,data:{message:'page-not-found'}},
  {path:'**',redirectTo:'/page-not-found'}
];
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouting{

}
