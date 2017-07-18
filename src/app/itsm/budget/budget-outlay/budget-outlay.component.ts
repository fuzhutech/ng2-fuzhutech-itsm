import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

import {DialogResult, SubPageComponentWithComponentDialog} from 'ng2-fuzhutech-common';

import {BudgetOutlayModel} from './model/budget-outlay.model';
import {BudgetOutlayService} from './service/budget-outlay.service';
import {BudgetOutlayDialogComponent} from './dialog/budget-outlay-dialog.component';

@Component({
    templateUrl: './budget-outlay.component.html',
    styleUrls: ['./budget-outlay.component.css']
})
export class BudgetOutlayComponent
    extends SubPageComponentWithComponentDialog<BudgetOutlayModel, BudgetOutlayService, BudgetOutlayDialogComponent> {

    //用户状态
    statuses = [{label: '正常', value: '0'}, {label: '非正常', value: '1'}];

    constructor(service: BudgetOutlayService, dialog: MdDialog, @Inject(DOCUMENT) doc: any) {
        super(service, '工位电脑管理', dialog, BudgetOutlayDialogComponent);
    }


    newInstance(): BudgetOutlayModel {
        return new BudgetOutlayModel();
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
