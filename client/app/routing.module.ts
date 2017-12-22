import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
//Event and Game
import { EventComponent } from './event/event.component';
import { GameComponent } from './game/game.component';
import { DetailEventComponent } from './detailevent/detailevent.component';
import { HomeComponent } from './home/home.component';
import { EventHomeComponent } from './eventhome/eventhome.component';
import { CheckinComponent } from './checkin/checkin.component';

import { ManageUserComponent } from './manageuser/manageuser.component'; 
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'eventhome', component: EventHomeComponent, canActivate: [AuthGuardLogin] },
  { path: 'event', component: EventComponent, canActivate: [AuthGuardLogin] },
  { path: 'game', component: GameComponent, canActivate: [AuthGuardLogin] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'detailevent/:id', component: DetailEventComponent, canActivate: [AuthGuardLogin] },
  { path: 'checkin/:id', component: CheckinComponent },
  { path: 'manageuser', component: ManageUserComponent, canActivate: [AuthGuardLogin] },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
