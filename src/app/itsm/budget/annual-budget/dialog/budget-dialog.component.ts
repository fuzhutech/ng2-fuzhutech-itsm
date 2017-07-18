import {Component} from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import {MdDialogRef} from '@angular/material';
import {ComponentDialog} from 'ng2-fuzhutech-common';
import {BudgetService} from '../service/budget.service';
import {Budget} from '../model/budget.model';

@Component({
    templateUrl: './budget-dialog.component.html',
    styleUrls: ['./budget-dialog.component.css']
})
export class BudgetDialogComponent extends ComponentDialog<BudgetDialogComponent, Budget, BudgetService> {

    color = 'primary';


    constructor(dialogRef: MdDialogRef<BudgetDialogComponent>) {
        super(dialogRef);
    }

    handleReset(theForm: NgForm) {
        theForm.reset();
        return false;
    }

}
