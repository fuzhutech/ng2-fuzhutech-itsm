import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MdDialogModule, MdSidenavModule, MdTabsModule} from '@angular/material';
import {ContextMenuModule} from 'primeng/primeng';
import {FzSharedModule} from 'ng2-fuzhutech-common';

import {AuthRoutingModule} from './itsm-routing.module';
import {ItsmComponent} from './itsm.component';

@NgModule({
    imports: [
        CommonModule, FormsModule,
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
