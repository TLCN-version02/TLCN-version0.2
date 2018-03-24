import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'mydatepicker';

import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RegisterRoutingModule,
        ReactiveFormsModule,
        MyDatePickerModule
    ],
    declarations: [
        RegisterComponent,
        HeaderComponent,
        FooterComponent
    ]
})

export class RegisterModule {}