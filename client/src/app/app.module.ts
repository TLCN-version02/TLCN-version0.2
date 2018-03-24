import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthServiceService } from './service/auth-service.service';
import { NewsService } from './service/news.service';
import { GiftService } from './service/gift.service';
import { TypeGiftService } from './service/type-gift.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

  ],
  providers: [
    AuthServiceService,
    NewsService,
    GiftService,
    TypeGiftService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
