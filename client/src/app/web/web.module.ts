import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
//import { CarouselComponent } from './demo01/carousel/carousel.component';
import { HeaderComponent } from './demo01/header/header.component';
import { FooterComponent } from './demo01/footer/footer.component';

import { HomeComponent } from './demo01/home/home.component';
import { JobdashboadComponent } from './jobdashboad/jobdashboad.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ChitiettinComponent } from './chitiettin/chitiettin.component';
import { ProfileComponent } from './profile/profile.component';
import { FormgioithieuComponent } from './formgioithieu/formgioithieu.component';


@NgModule({
    imports: [
        CommonModule,
        WebRoutingModule

    ],
    declarations: [
        WebComponent,
        HeaderComponent,
        FooterComponent,
        //CarouselComponent,
    ]
})

export class WebModule {}