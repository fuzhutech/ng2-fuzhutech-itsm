import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';

import {DialogResult, SubPageComponentWithComponentDialog} from 'ng2-fuzhutech-common';

import {ProjectModel} from './model/project.model';
import {ProjectService} from './service/project.service';
import {ProjectDialogComponent} from './dialog/project-dialog.component';
import {ProjectUploadDialogComponent} from './upload-dialog/project-upload-dialog.component';

@Component({
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent extends SubPageComponentWithComponentDialog<ProjectModel, ProjectService, ProjectDialogComponent> {

    //用户状态
    statuses = [{label: '正常', value: '0'}, {label: '非正常', value: '1'}];

    constructor(service: ProjectService, dialog: MdDialog, @Inject(DOCUMENT) doc: any) {
        super(service, '工位电脑管理', dialog, ProjectDialogComponent);
    }


    newInstance(): ProjectModel {
        return new ProjectModel();
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

    grant() {

        if (!this.canDoGrant()) {
            return;
        }

        //弹出对话框
        let dialogRef: MdDialogRef<ProjectUploadDialogComponent>
            = this.oPenBaseDialog(ProjectUploadDialogComponent, this.getCloneRecord(), '分配权限');

        //关闭对话框后进行,刷新
        dialogRef.afterClosed().subscribe((result: DialogResult) => {
            dialogRef = null;
            if (result.success) {
                this.doRefresh(result.recordId);
            }
        });
    }

    canDoGrant(): boolean {
        return true;
    }

}
