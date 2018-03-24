import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListnewsRoutingModule } from './listnews-routing.module';
import { ListnewsComponent } from './listnews.component';

@NgModule({
    imports: [
        CommonModule,
        ListnewsRoutingModule,
        ReactiveFormsModule,
        FormsModule

    ],
    declarations: [
        ListnewsComponent
    ]
})

export class ListnewsModule {}