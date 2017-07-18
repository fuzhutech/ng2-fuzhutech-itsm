import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MaintenanceComponent} from './maintenance.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: MaintenanceComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class FzMaintenanceRoutingModule {
}
