import {Component} from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import {MdDialogRef} from '@angular/material';
import {ComponentDialog} from 'ng2-fuzhutech-common';
import {DocumentListService} from '../service/document-list.service';
import {DocumentListModel} from '../model/document-list.model';

@Component({
    templateUrl: './document-list-dialog.component.html',
    styleUrls: ['./document-list-dialog.component.css']
})
export class DocumentListDialogComponent extends ComponentDialog<DocumentListDialogComponent, DocumentListModel, DocumentListService> {

    color = 'primary';


    constructor(dialogRef: MdDialogRef<DocumentListDialogComponent>) {
        super(dialogRef);
    }

    handleReset(theForm: NgForm) {
        theForm.reset();
        return false;
    }

}
