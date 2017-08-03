import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import { SharedModule } from '../../../shared/shared.module';

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
        SharedModule,
        HttpModule,
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
