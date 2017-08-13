import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

import {Observable, Subscription} from 'rxjs/Rx';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

import {DialogResult, SubPageComponentWithComponentDialog} from 'ng2-fuzhutech-common';

import {Computer} from './model/computer.model';
import {ComputerService} from './service/computer.service';
import {ComputerDialogComponent} from './dialog/computer-dialog.component';

import {ComputerUsageService} from './service/computer-usage.service';
import {ComputerUsageModel} from './model/computer-usage.model';
import {ComputerMaintainService} from './service/computer-maintain.service';
import {ComputerMaintainModel} from './model/computer-maintain.model';

@Component({
    templateUrl: './computer.component.html',
    styleUrls: ['./computer.component.css']
})
export class ComputerComponent extends SubPageComponentWithComponentDialog<Computer, ComputerService, ComputerDialogComponent> {

    //用户状态
    statuses = [{label: '正常', value: '0'}, {label: '非正常', value: '1'}];

    usageRecord$: Observable<ComputerUsageModel[]>;
    maintainRecord$: Observable<ComputerMaintainModel[]>;

    constructor(service: ComputerService, dialog: MdDialog, @Inject(DOCUMENT) doc: any,
                private computerUsageService: ComputerUsageService,
                private computerMaintainService: ComputerMaintainService) {
        super(service, '工位电脑管理', dialog, ComputerDialogComponent);

        this.usageRecord$ = this.computerUsageService.records$;
        this.maintainRecord$ = this.computerMaintainService.records$;
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

    handleRowSelect(event) {
        const computer: Computer = event.data;
        console.log(computer);
        this.computerUsageService.getFilterList(computer.id).subscribe(data => console.log(data));
        this.computerMaintainService.getFilterList(computer.id).subscribe(data => console.log(data));
    }

}
