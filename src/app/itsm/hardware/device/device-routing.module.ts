import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DeviceComponent} from './device.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: DeviceComponent}
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class FzDeviceRoutingModule {
}
