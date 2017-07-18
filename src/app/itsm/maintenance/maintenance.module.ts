import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {DataTableModule, PickListModule} from 'primeng/primeng';
import {
    MdButtonModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdSelectModule,
    MdTabsModule
} from '@angular/material';

import {FzToolbarModule} from 'ng2-fuzhutech-common';

import {FzMaintenanceRoutingModule} from './maintenance-routing.module';
import {MaintenanceService} from './service/maintenance.service';
import {MaintenanceComponent} from './maintenance.component';
import {MaintenanceDialogComponent} from './dialog/maintenance-dialog.component';


@NgModule({
    imports: [
        CommonModule, FormsModule, HttpModule,
        DataTableModule, PickListModule,
        MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule, MdTabsModule,
        FzToolbarModule,
        FzMaintenanceRoutingModule
    ],
    exports: [
        MaintenanceComponent
    ],
    declarations: [
        MaintenanceComponent, MaintenanceDialogComponent
    ],
    providers: [MaintenanceService],
    entryComponents: [MaintenanceDialogComponent],
})
export class FzMaintenanceModule {
}
