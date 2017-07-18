import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

import {DialogResult, SubPageComponentWithComponentDialog} from 'ng2-fuzhutech-common';

import {DocumentCategoryModel} from './model/document-category.model';
import {ComputerService} from './service/document-category.service';
import {DocumentCategoryDialogComponent} from './dialog/document-category-dialog.component';

@Component({
    templateUrl: './document-category.component.html',
    styleUrls: ['./document-category.component.css']
})
export class DocumentCategoryComponent
    extends SubPageComponentWithComponentDialog<DocumentCategoryModel, ComputerService, DocumentCategoryDialogComponent> {

    //用户状态
    statuses = [{label: '正常', value: '0'}, {label: '非正常', value: '1'}];

    constructor(service: ComputerService, dialog: MdDialog, @Inject(DOCUMENT) doc: any) {
        super(service, '工位电脑管理', dialog, DocumentCategoryDialogComponent);
    }


    newInstance(): DocumentCategoryModel {
        return new DocumentCategoryModel();
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
