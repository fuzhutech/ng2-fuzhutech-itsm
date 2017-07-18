import {Component} from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import {MdDialogRef} from '@angular/material';
import {ComponentDialog} from 'ng2-fuzhutech-common';
import {BudgetOutlayService} from '../service/budget-outlay.service';
import {BudgetOutlayModel} from '../model/budget-outlay.model';

@Component({
    templateUrl: './budget-outlay-dialog.component.html',
    styleUrls: ['./budget-outlay-dialog.component.css']
})
export class BudgetOutlayDialogComponent extends ComponentDialog<BudgetOutlayDialogComponent, BudgetOutlayModel, BudgetOutlayService> {

    color = 'primary';


    constructor(dialogRef: MdDialogRef<BudgetOutlayDialogComponent>) {
        super(dialogRef);
    }

    handleReset(theForm: NgForm) {
        theForm.reset();
        return false;
    }

}
