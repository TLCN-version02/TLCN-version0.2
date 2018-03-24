import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { animate } from '@angular/animations';

import { WebComponent } from './web.component';
const routes: Routes = [
    { 
        path: '', component: WebComponent,
        
        // path: '', loadChildren: './home/home.module#HomeModule',
        children: [
            { path: '', redirectTo: 'home'},
            { path: 'home', loadChildren: './demo01/home/home.module#HomeModule'},
            { path: 'login', loadChildren: './demo01/login/login.module#LoginModule'},
            { path: 'register1', loadChildren: './demo01/register1/register1.module#Register1Module'},
            { path: 'fogotpass', loadChildren: './demo01/fogotpassword/fogotpassword.module#FogotpasswordModule'},
            { path: 'event/add', loadChildren: './demo01/event/add/add.module#AddModule' },
            { path: 'event/update', loadChildren: './demo01/event/update/update.module#UpdateModule' },
            { path: 'event/detail', loadChildren: './demo01/event/detail/detail.module#DetailModule' },
            { path: 'event/checkin', loadChildren: './demo01/event/checkin/checkin.module#CheckinModule' },
            { path: 'event/client', loadChildren: './demo01/event/client/client.module#ClientModule' },

            { path: 'chitiettin/:id', loadChildren: './chitiettin/chitiettin.module#ChitiettinModule'},
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
            { path: 'formgioithieu', loadChildren: './formgioithieu/formgioithieu.module#FormgioithieuModule'},
            { path: 'shopping', loadChildren: './shopping/shopping.module#ShoppingModule'},
            { path: 'jobdashboard', loadChildren: './jobdashboad/jobdashboard.module#JobdashboadModule'},
            { path: 'giohang', loadChildren: './giohang/giohang.module#GiohangModule'},
            { path: 'giaohang', loadChildren: './giaohang/giaohang.module#GiaohangModule'}
            
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WebRoutingModule {}