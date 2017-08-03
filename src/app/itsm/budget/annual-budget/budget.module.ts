import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import { SharedModule } from '../../../shared/shared.module';

import {DataTableModule, PickListModule} from 'primeng/primeng';
import {MdButtonModule, MdDialogModule, MdIconModule, MdInputModule, MdSelectModule} from '@angular/material';

import {FzToolbarModule} from 'ng2-fuzhutech-common';

import {FzBudgetRoutingModule} from './budget-routing.module';
import {BudgetService} from './service/budget.service';
import {BudgetComponent} from './budget.component';
import {BudgetDialogComponent} from './dialog/budget-dialog.component';


@NgModule({
    imports: [
        SharedModule,
        HttpModule,
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
