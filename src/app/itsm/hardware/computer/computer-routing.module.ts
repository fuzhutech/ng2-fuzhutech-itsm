import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ComputerComponent} from './computer.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: ComputerComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class FzComputerRoutingModule {
}
