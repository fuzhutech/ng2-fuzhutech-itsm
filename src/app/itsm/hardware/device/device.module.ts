import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {DataTableModule, PickListModule} from 'primeng/primeng';
import {MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule} from '@angular/material';

import {FzToolbarModule} from 'ng2-fuzhutech-common';

import {FzDeviceRoutingModule} from './device-routing.module';
import {DeviceService} from './service/device.service';
import {DeviceComponent} from './device.component';
import {DeviceDialogComponent} from './dialog/device-dialog.component';


@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, HttpModule,
        DataTableModule, PickListModule,
        MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule,
        FzToolbarModule,
        FzDeviceRoutingModule
    ],
    exports: [
        DeviceComponent
    ],
    declarations: [
        DeviceComponent, DeviceDialogComponent
    ],
    providers: [DeviceService],
    entryComponents: [DeviceDialogComponent],
})
export class FzDeviceModule {
}
