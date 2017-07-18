import {Component} from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import {MdDialogRef} from '@angular/material';
import {ComponentDialog} from 'ng2-fuzhutech-common';
import {ComputerService} from '../service/document-category.service';
import {DocumentCategoryModel} from '../model/document-category.model';

@Component({
    templateUrl: './document-category-dialog.component.html',
    styleUrls: ['./document-category-dialog.component.css']
})
export class DocumentCategoryDialogComponent
    extends ComponentDialog<DocumentCategoryDialogComponent, DocumentCategoryModel, ComputerService> {

    color = 'primary';


    constructor(dialogRef: MdDialogRef<DocumentCategoryDialogComponent>) {
        super(dialogRef);
    }

    handleReset(theForm: NgForm) {
        theForm.reset();
        return false;
    }

}
