import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ItsmComponent} from './itsm.component';
import {MainLinkData} from 'ng2-fuzhutech-common';

const routes: Routes = [
    //{ path: '', redirectTo: 'home' },
    {
        path: '',
        component: ItsmComponent,
        children: [
            {path: '', redirectTo: 'computer'},
            ///硬件设备///
            {path: 'computer', loadChildren: './hardware/hardware.module#FzComputerModule'},
            {path: 'device', loadChildren: './hardware/hardware.module#FzDeviceModule'},
            {path: 'server', loadChildren: './hardware/hardware.module#FzServerModule'},
            ///项目管理///
            {path: 'project', loadChildren: './project/project.module#FzProjectModule'},
            ///预算费用///
            {path: 'annual-budget', loadChildren: './budget/budget.module#FzBudgetModule'},
            {path: 'budget-outlay', loadChildren: './budget/budget.module#FzBudgetOutlayModule'},
            ///维护记录///
            {path: 'maintenance', loadChildren: './maintenance/maintenance.module#FzMaintenanceModule'},
            ///文档管理///
            {path: 'document-category', loadChildren: './document/document.module#FzDocumentCategoryModule'},
            {path: 'document', loadChildren: './document/document.module#FzDocumentListModule'}
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {
}

export const ConfigMenuData: MainLinkData[] = [
    {
        id: 'menu_hardware',
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
        id: 'menu_project',
        img: 'showcase/resources/images/mono/menu.svg',
        text: '项目管理',
        subMenuLinkCol: [
            {
                path: 'project',
                title: '项目流程'
            }
        ]
    },
    {
        id: 'menu_budget',
        img: 'showcase/resources/images/mono/menu.svg',
        text: '预算费用',
        subMenuLinkCol: [
            {
                path: 'annual-budget',
                title: '年度预算'
            },
            {
                path: 'budget-outlay',
                title: '预算支出'
            }
        ]
    },
    {
        id: 'menu_maintenance',
        img: 'showcase/resources/images/mono/menu.svg',
        text: '维护记录',
        subMenuLinkCol: [
            {
                path: 'maintenance',
                title: '维护记录'
            }
        ]
    },
    {
        id: 'menu_document',
        img: 'showcase/resources/images/mono/menu.svg',
        text: '文档管理',
        subMenuLinkCol: [
            {
                path: 'document',
                title: '文档列表'
            },
            {
                path: 'document-category',
                title: '文档类别'
            }
        ]
    },
];
