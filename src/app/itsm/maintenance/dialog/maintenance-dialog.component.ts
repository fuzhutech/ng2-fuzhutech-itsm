import {Component} from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import {MdDialogRef} from '@angular/material';
import {ComponentDialog} from 'ng2-fuzhutech-common';
import {MaintenanceService} from '../service/maintenance.service';
import {MaintenanceModel} from '../model/maintenance.model';

@Component({
    templateUrl: './maintenance-dialog.component.html',
    styleUrls: ['./maintenance-dialog.component.css']
})
export class MaintenanceDialogComponent extends ComponentDialog<MaintenanceDialogComponent, MaintenanceModel, MaintenanceService> {

    color = 'primary';


    constructor(dialogRef: MdDialogRef<MaintenanceDialogComponent>) {
        super(dialogRef);
    }

    handleReset(theForm: NgForm) {
        theForm.reset();
        return false;
    }

}
