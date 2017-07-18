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

import {FzDocumentCategoryRoutingModule} from './document-category-routing.module';
import {ComputerService} from './service/document-category.service';
import {DocumentCategoryComponent} from './document-category.component';
import {DocumentCategoryDialogComponent} from './dialog/document-category-dialog.component';


@NgModule({
    imports: [
        CommonModule, FormsModule, HttpModule,
        DataTableModule, PickListModule,
        MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule, MdTabsModule,
        FzToolbarModule,
        FzDocumentCategoryRoutingModule
    ],
    exports: [
        DocumentCategoryComponent
    ],
    declarations: [
        DocumentCategoryComponent, DocumentCategoryDialogComponent
    ],
    providers: [ComputerService],
    entryComponents: [DocumentCategoryDialogComponent],
})
export class FzDocumentCategoryModule {
}
