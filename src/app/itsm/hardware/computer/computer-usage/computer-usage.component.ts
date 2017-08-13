import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

import {Observable, Subscription} from 'rxjs/Rx';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

import {DialogResult, SubPageComponentWithComponentDialog} from 'ng2-fuzhutech-common';

import {ComputerUsageService} from '../service/computer-usage.service';
import {ComputerUsageModel} from '../model/computer-usage.model';
import {ComputerUsageDialogComponent} from './dialog/computer-usage-dialog.component';

@Component({
    selector: 'fz-computer-usage',
    templateUrl: './computer-usage.component.html',
    styleUrls: ['./computer-usage.component.css']
})
export class ComputerUsageComponent
    extends SubPageComponentWithComponentDialog<ComputerUsageModel, ComputerUsageService, ComputerUsageDialogComponent> {

    constructor(service: ComputerUsageService, dialog: MdDialog) {
        super(service, '工位电脑维护管理', dialog, ComputerUsageDialogComponent);

    }


    newInstance(): ComputerUsageModel {
        return new ComputerUsageModel();
    };

}
