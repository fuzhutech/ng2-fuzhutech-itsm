import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

import {Observable, Subscription} from 'rxjs/Rx';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

import {DialogResult, SubPageComponentWithComponentDialog} from 'ng2-fuzhutech-common';

import {ComputerMaintainService} from '../service/computer-maintain.service';
import {ComputerMaintainModel} from '../model/computer-maintain.model';
import {ComputerMaintainDialogComponent} from './dialog/computer-maintain-dialog.component';

@Component({
    selector: 'fz-computer-maintain',
    templateUrl: './computer-maintain.component.html',
    styleUrls: ['./computer-maintain.component.css']
})
export class ComputerMaintainComponent
    extends SubPageComponentWithComponentDialog<ComputerMaintainModel, ComputerMaintainService, ComputerMaintainDialogComponent> {

    constructor(service: ComputerMaintainService, dialog: MdDialog) {
        super(service, '工位电脑维护管理', dialog, ComputerMaintainDialogComponent);

    }


    newInstance(): ComputerMaintainModel {
        return new ComputerMaintainModel();
    };

}
