import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        ProfileComponent
    ]
})

export class ProfileModule {}