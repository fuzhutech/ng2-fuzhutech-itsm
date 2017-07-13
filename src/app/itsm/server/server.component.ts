import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

import {DialogResult, SubPageComponentWithComponentDialog} from 'ng2-fuzhutech-common';

import {Server} from './model/server.model';
import {ServerService} from './service/server.service';
import {ServerDialogComponent} from './dialog/server-dialog.component';

@Component({
    selector: 'fz-auth-user',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent extends SubPageComponentWithComponentDialog<Server, ServerService, ServerDialogComponent> {

    //用户状态
    statuses = [{label: '正常', value: '0'}, {label: '非正常', value: '1'}];

    constructor(service: ServerService, dialog: MdDialog, @Inject(DOCUMENT) doc: any) {
        super(service, '用户', dialog, ServerDialogComponent);
    }


    newInstance(): Server {
        return new Server();
    };

    getStatus(value) {
        let label = null;
        for (const status of this.statuses) {
            if (status.value == value) {
                label = status.label;
                break;
            }
        }

        return label;
    }

}
