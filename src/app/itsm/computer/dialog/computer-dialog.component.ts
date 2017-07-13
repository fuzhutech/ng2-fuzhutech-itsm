import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ComponentDialog} from 'ng2-fuzhutech-common';
import {ComputerService} from '../service/computer.service';
import {Computer} from '../model/computer.model';

@Component({
    templateUrl: './computer-dialog.component.html',
    styleUrls: ['./computer-dialog.component.css']
})
export class ComputerDialogComponent extends ComponentDialog<ComputerDialogComponent, Computer, ComputerService> {

    color = 'primary';


    constructor(dialogRef: MdDialogRef<ComputerDialogComponent>) {
        super(dialogRef);
    }

}
