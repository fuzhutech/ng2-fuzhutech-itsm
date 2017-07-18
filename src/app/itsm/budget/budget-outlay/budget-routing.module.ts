import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BudgetOutlayComponent} from './budget-outlay.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: BudgetOutlayComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class FzBudgetOutlayRoutingModule {
}
