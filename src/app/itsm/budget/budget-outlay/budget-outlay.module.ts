import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {DataTableModule, PickListModule} from 'primeng/primeng';
import {MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule} from '@angular/material';

import {FzToolbarModule} from 'ng2-fuzhutech-common';

import {FzBudgetOutlayRoutingModule} from './budget-routing.module';
import {BudgetOutlayService} from './service/budget-outlay.service';
import {BudgetOutlayComponent} from './budget-outlay.component';
import {BudgetOutlayDialogComponent} from './dialog/budget-outlay-dialog.component';


@NgModule({
    imports: [
        CommonModule, FormsModule, HttpModule,
        DataTableModule, PickListModule,
        MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule,
        FzToolbarModule,
        FzBudgetOutlayRoutingModule
    ],
    exports: [
        BudgetOutlayComponent
    ],
    declarations: [
        BudgetOutlayComponent, BudgetOutlayDialogComponent
    ],
    providers: [BudgetOutlayService],
    entryComponents: [BudgetOutlayDialogComponent],
})
export class FzBudgetOutlayModule {
}
