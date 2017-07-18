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
    MdSelectModule,
    MdTabsModule
} from '@angular/material';

import {FzToolbarModule} from 'ng2-fuzhutech-common';

import {FzDocumentListRoutingModule} from './document-list-routing.module';
import {DocumentListService} from './service/document-list.service';
import {DocumentListComponent} from './document-list.component';
import {DocumentListDialogComponent} from './dialog/document-list-dialog.component';


@NgModule({
    imports: [
        CommonModule, FormsModule, HttpModule,
        DataTableModule, PickListModule,
        MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule, MdTabsModule,
        FzToolbarModule,
        FzDocumentListRoutingModule
    ],
    exports: [
        DocumentListComponent
    ],
    declarations: [
        DocumentListComponent, DocumentListDialogComponent
    ],
    providers: [DocumentListService],
    entryComponents: [DocumentListDialogComponent],
})
export class FzDocumentListModule {
}
