import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {DataTableModule, PickListModule} from 'primeng/primeng';
import {MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule} from '@angular/material';

import {FzToolbarModule} from 'ng2-fuzhutech-common';

import {FzBudgetRoutingModule} from './budget-routing.module';
import {BudgetService} from './service/budget.service';
import {BudgetComponent} from './budget.component';
import {BudgetDialogComponent} from './dialog/budget-dialog.component';


@NgModule({
    imports: [
        CommonModule, FormsModule, HttpModule,
        DataTableModule, PickListModule,
        MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule,
        FzToolbarModule,
        FzBudgetRoutingModule
    ],
    exports: [
        BudgetComponent
    ],
    declarations: [
        BudgetComponent, BudgetDialogComponent
    ],
    providers: [BudgetService],
    entryComponents: [BudgetDialogComponent],
})
export class FzBudgetModule {
}
