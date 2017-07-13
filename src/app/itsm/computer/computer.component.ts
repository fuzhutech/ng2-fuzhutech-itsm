import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

import {DialogResult, SubPageComponentWithComponentDialog} from 'ng2-fuzhutech-common';

import {Computer} from './model/computer.model';
import {ComputerService} from './service/computer.service';
import {ComputerDialogComponent} from './dialog/computer-dialog.component';

@Component({
    selector: 'fz-auth-user',
    templateUrl: './computer.component.html',
    styleUrls: ['./computer.component.css']
})
export class ComputerComponent extends SubPageComponentWithComponentDialog<Computer, ComputerService, ComputerDialogComponent> {

    //用户状态
    statuses = [{label: '正常', value: '0'}, {label: '非正常', value: '1'}];

    constructor(service: ComputerService, dialog: MdDialog, @Inject(DOCUMENT) doc: any) {
        super(service, '用户', dialog, ComputerDialogComponent);
    }


    newInstance(): Computer {
        return new Computer();
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
