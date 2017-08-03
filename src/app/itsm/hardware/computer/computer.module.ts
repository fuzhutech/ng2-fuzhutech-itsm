import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import { SharedModule } from '../../../shared/shared.module';

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

import {FzComputerRoutingModule} from './computer-routing.module';
import {ComputerService} from './service/computer.service';
import {ComputerComponent} from './computer.component';
import {ComputerDialogComponent} from './dialog/computer-dialog.component';


@NgModule({
    imports: [
        SharedModule,
        HttpModule,
        DataTableModule, PickListModule,
        MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule, MdTabsModule,
        FzToolbarModule,
        FzComputerRoutingModule
    ],
    exports: [
        ComputerComponent
    ],
    declarations: [
        ComputerComponent, ComputerDialogComponent
    ],
    providers: [ComputerService],
    entryComponents: [ComputerDialogComponent],
})
export class FzComputerModule {
}
