import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

import {DialogResult, SubPageComponentWithComponentDialog} from 'ng2-fuzhutech-common';

import {DocumentListModel} from './model/document-list.model';
import {DocumentListService} from './service/document-list.service';
import {DocumentListDialogComponent} from './dialog/document-list-dialog.component';

@Component({
    templateUrl: './document-list.component.html',
    styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent
    extends SubPageComponentWithComponentDialog<DocumentListModel, DocumentListService, DocumentListDialogComponent> {

    //用户状态
    statuses = [{label: '正常', value: '0'}, {label: '非正常', value: '1'}];

    constructor(service: DocumentListService, dialog: MdDialog, @Inject(DOCUMENT) doc: any) {
        super(service, '工位电脑管理', dialog, DocumentListDialogComponent);
    }


    newInstance(): DocumentListModel {
        return new DocumentListModel();
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
