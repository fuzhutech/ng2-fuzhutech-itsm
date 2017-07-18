import {Component} from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import {MdDialogRef} from '@angular/material';
import {ComponentDialog} from 'ng2-fuzhutech-common';
import {ProjectService} from '../service/project.service';
import {ProjectModel} from '../model/project.model';

@Component({
    templateUrl: './project-dialog.component.html',
    styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent extends ComponentDialog<ProjectDialogComponent, ProjectModel, ProjectService> {

    color = 'primary';


    constructor(dialogRef: MdDialogRef<ProjectDialogComponent>) {
        super(dialogRef);
    }

    handleReset(theForm: NgForm) {
        theForm.reset();
        return false;
    }

}
