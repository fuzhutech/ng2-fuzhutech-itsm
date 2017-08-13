import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {SharedModule} from '../../../shared/shared.module';

import {DataTableModule, PickListModule} from 'primeng/primeng';
import {
    MdButtonModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdProgressBarModule,
    MdSelectModule,
    MdTabsModule
} from '@angular/material';

import {FzToolbarModule, FzUploadDialogModule} from 'ng2-fuzhutech-common';

import {FzComputerRoutingModule} from './computer-routing.module';
import {ComputerService} from './service/computer.service';
import {ComputerComponent} from './computer.component';
import {ComputerDialogComponent} from './dialog/computer-dialog.component';

import {ComputerUsageService} from './service/computer-usage.service';
import {ComputerUsageComponent} from './computer-usage/computer-usage.component';
import {ComputerUsageDialogComponent} from './computer-usage/dialog/computer-usage-dialog.component';

import {ComputerMaintainService} from './service/computer-maintain.service';
import {ComputerMaintainComponent} from './computer-maintain/computer-maintain.component';
import {ComputerMaintainDialogComponent} from './computer-maintain/dialog/computer-maintain-dialog.component';

@NgModule({
    imports: [
        SharedModule,
        HttpModule,
        DataTableModule, PickListModule,
        MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdProgressBarModule, MdSelectModule, MdTabsModule,
        FzToolbarModule, FzUploadDialogModule,
        FzComputerRoutingModule
    ],
    exports: [
        ComputerComponent
    ],
    declarations: [
        ComputerComponent, ComputerDialogComponent,
        ComputerMaintainComponent, ComputerMaintainDialogComponent,
        ComputerUsageComponent, ComputerUsageDialogComponent
    ],
    providers: [ComputerService, ComputerUsageService, ComputerMaintainService],
    entryComponents: [ComputerDialogComponent, ComputerMaintainDialogComponent, ComputerUsageDialogComponent],
})
export class FzComputerModule {
}
