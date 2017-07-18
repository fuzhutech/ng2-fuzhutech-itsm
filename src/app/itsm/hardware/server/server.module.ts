import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {DataTableModule, PickListModule} from 'primeng/primeng';
import {MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule} from '@angular/material';

import {FzToolbarModule} from 'ng2-fuzhutech-common';

import {UserRoutingModule} from './server-routing.module';
import {ServerService} from './service/server.service';
import {ServerComponent} from './server.component';
import {ServerDialogComponent} from './dialog/server-dialog.component';


@NgModule({
    imports: [
        CommonModule, FormsModule, HttpModule,
        DataTableModule, PickListModule,
        MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule,
        FzToolbarModule,
        UserRoutingModule
    ],
    exports: [
        ServerComponent
    ],
    declarations: [
        ServerComponent, ServerDialogComponent
    ],
    providers: [ServerService],
    entryComponents: [ServerDialogComponent],
})
export class FzServerModule {
}
