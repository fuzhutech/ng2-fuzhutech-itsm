import {Component, Input} from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import {MdDialogRef} from '@angular/material';
import {ComponentDialog} from 'ng2-fuzhutech-common';
import {ProjectService} from '../service/project.service';
import {ProjectModel} from '../model/project.model';
import {FileItem, FileUploader} from 'ng2-file-upload';

@Component({
    templateUrl: './project-upload-dialog.component.html',
    styleUrls: ['./project-upload-dialog.component.css']
})
export class ProjectUploadDialogComponent extends ComponentDialog<ProjectUploadDialogComponent, ProjectModel, ProjectService> {

    color = 'primary';

    public url = 'http://localhost/api/computers/import';
    public uploader: FileUploader = new FileUploader({url: this.url});

    public hasBaseDropZoneOver = false;
    public hasAnotherDropZoneOver = false;

    @Input() multiple: boolean;
    //public msgs: Message[];
    public files: File[];


    constructor(dialogRef: MdDialogRef<ProjectUploadDialogComponent>) {
        super(dialogRef);
    }

    handleReset(theForm: NgForm) {
        theForm.reset();
        return false;
    }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }


    onChooseClick(event, fileInput) {
        fileInput.value = null;
        fileInput.click();
    }

    onFileSelect(event) {
        //this.msgs = [];
        if (!this.multiple) {
            this.files = [];
        }

        console.log('onFileSelect');


        const fileItem: FileItem = this.uploader.queue[0];
        fileItem.alias = 'excel';
        console.log(fileItem);

    }

}
