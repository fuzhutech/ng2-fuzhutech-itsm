import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DocumentListComponent} from './document-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: DocumentListComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class FzDocumentListRoutingModule {
}
