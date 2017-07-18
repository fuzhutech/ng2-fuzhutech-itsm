import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

import {DialogResult, SubPageComponentWithComponentDialog} from 'ng2-fuzhutech-common';

import {Budget} from './model/budget.model';
import {BudgetService} from './service/budget.service';
import {BudgetDialogComponent} from './dialog/budget-dialog.component';

@Component({
    templateUrl: './budget.component.html',
    styleUrls: ['./budget.component.css']
})
export class BudgetComponent extends SubPageComponentWithComponentDialog<Budget, BudgetService, BudgetDialogComponent> {

    //用户状态
    statuses = [{label: '正常', value: '0'}, {label: '非正常', value: '1'}];

    constructor(service: BudgetService, dialog: MdDialog, @Inject(DOCUMENT) doc: any) {
        super(service, '工位电脑管理', dialog, BudgetDialogComponent);
    }


    newInstance(): Budget {
        return new Budget();
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
