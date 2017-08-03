import {NgModule} from '@angular/core';
import {MdDialogModule, MdSidenavModule, MdTabsModule} from '@angular/material';
import {ContextMenuModule} from 'primeng/primeng';
import {FzSharedModule} from 'ng2-fuzhutech-common';

import { SharedModule } from '../shared/shared.module';

import {AuthRoutingModule} from './itsm-routing.module';
import {ItsmComponent} from './itsm.component';

@NgModule({
    imports: [
        SharedModule,
        MdDialogModule, MdSidenavModule, MdTabsModule,
        ContextMenuModule,
        FzSharedModule,
        AuthRoutingModule
    ],
    declarations: [ItsmComponent],
    providers: []
})
export class FzItsmModule {
}
