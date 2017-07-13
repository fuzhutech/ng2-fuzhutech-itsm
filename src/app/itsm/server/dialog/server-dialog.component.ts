import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {ComponentDialog} from 'ng2-fuzhutech-common';
import {ServerService} from '../service/server.service';
import {Server} from '../model/server.model';

@Component({
    templateUrl: './server-dialog.component.html',
    styleUrls: ['./server-dialog.component.css']
})
export class ServerDialogComponent extends ComponentDialog<ServerDialogComponent, Server, ServerService> {

    color = 'primary';


    constructor(dialogRef: MdDialogRef<ServerDialogComponent>) {
        super(dialogRef);
    }

}
