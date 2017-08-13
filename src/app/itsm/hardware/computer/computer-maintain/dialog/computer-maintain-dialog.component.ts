import {Component} from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import {MdDialogRef} from '@angular/material';
import {ComponentDialog} from 'ng2-fuzhutech-common';
import {ComputerMaintainService} from '../../service/computer-maintain.service';
import {ComputerMaintainModel} from '../../model/computer-maintain.model';

@Component({
    templateUrl: './computer-maintain-dialog.component.html',
    styleUrls: ['./computer-maintain-dialog.component.css']
})
export class ComputerMaintainDialogComponent
    extends ComponentDialog<ComputerMaintainDialogComponent, ComputerMaintainModel, ComputerMaintainService> {

    color = 'primary';


    constructor(dialogRef: MdDialogRef<ComputerMaintainDialogComponent>) {
        super(dialogRef);
    }

    handleReset(theForm: NgForm) {
        theForm.reset();
        return false;
    }

}
