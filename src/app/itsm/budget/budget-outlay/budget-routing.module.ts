import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BudgetOutlayComponent} from './budget-outlay.component';

const routes: Routes = [
    {path: '', component: BudgetOutlayComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class FzBudgetOutlayRoutingModule {
}
