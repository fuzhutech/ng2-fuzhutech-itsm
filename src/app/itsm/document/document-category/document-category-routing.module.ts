import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DocumentCategoryComponent} from './document-category.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: DocumentCategoryComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class FzDocumentCategoryRoutingModule {
}
