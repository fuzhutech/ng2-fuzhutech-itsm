import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {DataTableModule, PickListModule} from 'primeng/primeng';
import {MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule} from '@angular/material';

import {FzToolbarModule} from 'ng2-fuzhutech-common';

import {FzComputerRoutingModule} from './computer-routing.module';
import {ComputerService} from './service/computer.service';
import {ComputerComponent} from './computer.component';
import {ComputerDialogComponent} from './dialog/computer-dialog.component';


@NgModule({
    imports: [
        CommonModule, FormsModule, HttpModule,
        DataTableModule, PickListModule,
        MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule,
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
