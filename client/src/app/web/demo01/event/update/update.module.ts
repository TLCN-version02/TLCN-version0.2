
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UpdateComponent } from './update.component';
import { UpdateRoutingModule } from './update-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UpdateRoutingModule,
        ReactiveFormsModule,
        
    ],
    declarations: [
        UpdateComponent,
    ]
})

export class UpdateModule {}