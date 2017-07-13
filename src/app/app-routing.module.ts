import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'itsm', loadChildren: './itsm/itsm.module#FzItsmModule'}
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

