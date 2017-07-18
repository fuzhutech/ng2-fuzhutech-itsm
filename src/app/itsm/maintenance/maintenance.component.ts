import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

import {DialogResult, SubPageComponentWithComponentDialog} from 'ng2-fuzhutech-common';

import {MaintenanceModel} from './model/maintenance.model';
import {MaintenanceService} from './service/maintenance.service';
import {MaintenanceDialogComponent} from './dialog/maintenance-dialog.component';

@Component({
    templateUrl: './maintenance.component.html',
    styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent
    extends SubPageComponentWithComponentDialog<MaintenanceModel, MaintenanceService, MaintenanceDialogComponent> {

    //用户状态
    statuses = [{label: '正常', value: '0'}, {label: '非正常', value: '1'}];

    constructor(service: MaintenanceService, dialog: MdDialog, @Inject(DOCUMENT) doc: any) {
        super(service, '工位电脑管理', dialog, MaintenanceDialogComponent);
    }


    newInstance(): MaintenanceModel {
        return new MaintenanceModel();
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
