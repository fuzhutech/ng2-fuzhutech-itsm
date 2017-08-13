import {Component} from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import {MdDialogRef} from '@angular/material';
import {ComponentDialog} from 'ng2-fuzhutech-common';
import {ComputerUsageService} from '../../service/computer-usage.service';
import {ComputerUsageModel} from '../../model/computer-usage.model';

@Component({
    templateUrl: './computer-usage-dialog.component.html',
    styleUrls: ['./computer-usage-dialog.component.css']
})
export class ComputerUsageDialogComponent
    extends ComponentDialog<ComputerUsageDialogComponent, ComputerUsageModel, ComputerUsageService> {

    color = 'primary';


    constructor(dialogRef: MdDialogRef<ComputerUsageDialogComponent>) {
        super(dialogRef);
    }

    handleReset(theForm: NgForm) {
        theForm.reset();
        return false;
    }

}
