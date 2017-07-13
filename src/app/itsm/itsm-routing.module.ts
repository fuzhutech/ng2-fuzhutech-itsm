import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ItsmComponent} from './itsm.component';
import {MainLinkData} from 'ng2-fuzhutech-common';

@NgModule({
    imports: [
        RouterModule.forChild([
            //{ path: '', redirectTo: 'home' },
            {
                path: '',
                component: ItsmComponent,
                children: [
                    {path: '', redirectTo: 'server'},
                    {path: 'computer', loadChildren: './computer/computer.module#FzComputerModule'},
                    {path: 'device', loadChildren: './device/device.module#FzDeviceModule'},
                    {path: 'server', loadChildren: './server/server.module#FzServerModule'}

                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {
}

export const ConfigMenuData: MainLinkData[] = [
    {
        id: 'menu_basic_config',
        img: 'showcase/resources/images/mono/menu.svg',
        text: '硬件设备',
        subMenuLinkCol: [
            {
                path: 'computer',
                title: '工位电脑'
            },
            {
                path: 'server',
                title: '服务器'
            },
            {
                path: 'device',
                title: '其他设备'
            }
        ]
    },
    {
        id: 'menu_system management',
        img: 'showcase/resources/images/mono/menu.svg',
        text: '项目管理',
        subMenuLinkCol: [
            {
                path: 'user',
                title: '项目列表'
            },
            {
                path: 'organization',
                title: '管理流程'
            }
        ]
    },
    {
        id: 'menu_query',
        img: 'showcase/resources/images/mono/menu.svg',
        text: '预算费用',
        subMenuLinkCol: [
            {
                path: 'log',
                title: '年度预算'
            },
            {
                path: 'log',
                title: '支出管理'
            }
        ]
    }
];
