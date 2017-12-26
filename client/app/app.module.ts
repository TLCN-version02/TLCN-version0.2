import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';

//Event and Game
import { EventService } from './services/event.service';
import { GameService } from './services/game.service';
import { ClientService } from './services/client.service';
import { EventComponent } from './event/event.component';
import { GameComponent } from './game/game.component';
import { DetailEventComponent } from './detailevent/detailevent.component';
import { GameShowComponent } from './gameshow/gameshow.component';
//Navbar
import { NavBarComponent } from './navbar/navbar.component';
//Footer
import { FooterComponent } from './footer/footer.component';
//Home Page
import { HomeComponent } from './home/home.component';
import { EventHomeComponent } from './eventhome/eventhome.component';
import { CheckinComponent } from './checkin/checkin.component';
import { ManageUserComponent } from './manageuser/manageuser.component';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';

//Custom pipe
import { FilterPipe } from './custompipes/example.pipe';
import { CapitalizePipe } from './custompipes/example.pipe';
import { SortDescPipe } from './custompipes/example.pipe';
import { cataloryPipe } from './custompipes/example.pipe';
import { ParityPipe } from './custompipes/example.pipe';
import { repeatPipe } from './custompipes/example.pipe';
import { roundNumPipe } from './custompipes/example.pipe';
import { AddstringPipe } from './custompipes/example.pipe';
import { ClientPipe } from  './custompipes/example.pipe';
import { Pipe, PipeTransform } from '@angular/core';
//Template
import { TemplateComponent } from './template/template.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,
    NotFoundComponent,
    EventComponent,
    GameComponent,
    DetailEventComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    EventHomeComponent,
    CheckinComponent,
    ManageUserComponent,
    GameShowComponent,
    TemplateComponent,

    FilterPipe,
    CapitalizePipe,
    SortDescPipe,
    cataloryPipe,
    ParityPipe,
    AddstringPipe,
    repeatPipe,
    roundNumPipe,
	  ClientPipe,
  ],
  imports: [
    RoutingModule,
    SharedModule,
    Ng2DatetimePickerModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    UserService,
    EventService,
    GameService,
    ClientService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
