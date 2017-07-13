import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

import {DialogResult, SubPageComponentWithComponentDialog} from 'ng2-fuzhutech-common';

import {Device} from './model/device.model';
import {DeviceService} from './service/device.service';
import {DeviceDialogComponent} from './dialog/device-dialog.component';

@Component({
    templateUrl: './device.component.html',
    styleUrls: ['./device.component.css']
})
export class DeviceComponent extends SubPageComponentWithComponentDialog<Device, DeviceService, DeviceDialogComponent> {

    //用户状态
    statuses = [{label: '正常', value: '0'}, {label: '非正常', value: '1'}];

    constructor(service: DeviceService, dialog: MdDialog, @Inject(DOCUMENT) doc: any) {
        super(service, '用户', dialog, DeviceDialogComponent);
    }


    newInstance(): Device {
        return new Device();
    };

    getStatus(value) {
        let label = null;
        for (const status of this.statuses) {
            if (status.value == value) {
                label = status.label;
                break;
            }
        }

        return label;
    }

}
