import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ComponentDialog} from 'ng2-fuzhutech-common';
import {DeviceService} from '../service/device.service';
import {Device} from '../model/device.model';

@Component({
    templateUrl: './device-dialog.component.html',
    styleUrls: ['./device-dialog.component.css']
})
export class DeviceDialogComponent extends ComponentDialog<DeviceDialogComponent, Device, DeviceService> {

    color = 'primary';


    constructor(dialogRef: MdDialogRef<DeviceDialogComponent>) {
        super(dialogRef);
    }

}
