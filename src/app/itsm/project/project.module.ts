import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {DataTableModule, PickListModule} from 'primeng/primeng';
import {
    MdButtonModule,
    MdDialogModule,
    MdIconModule,
    MdInputModule,
    MdProgressBarModule,
    MdSelectModule
} from '@angular/material';

import {FileUploadModule} from 'ng2-file-upload';

import {FzToolbarModule} from 'ng2-fuzhutech-common';

import {FzProjectRoutingModule} from './project-routing.module';
import {ProjectService} from './service/project.service';
import {ProjectComponent} from './project.component';
import {ProjectDialogComponent} from './dialog/project-dialog.component';
import {ProjectUploadDialogComponent} from './upload-dialog/project-upload-dialog.component';


@NgModule({
    imports: [
        CommonModule, FormsModule, HttpModule,
        DataTableModule, PickListModule,
        MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdProgressBarModule, MdSelectModule,
        FileUploadModule,
        FzToolbarModule,
        FzProjectRoutingModule
    ],
    exports: [
        ProjectComponent
    ],
    declarations: [
        ProjectComponent, ProjectDialogComponent, ProjectUploadDialogComponent
    ],
    providers: [ProjectService],
    entryComponents: [ProjectDialogComponent, ProjectUploadDialogComponent],
})
export class FzProjectModule {
}
