
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddComponent } from './add.component';
import { AddRoutingModule } from './add-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AddRoutingModule,
        ReactiveFormsModule,
        
    ],
    declarations: [
        AddComponent,
    ]
})

export class AddModule {}