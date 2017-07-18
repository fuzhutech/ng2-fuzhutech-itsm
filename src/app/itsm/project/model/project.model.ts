import {isUndefined} from 'util';

export class ProjectModel {
    id: number;
    identifier: number;
    site: string;
    kind: string;
    brand: string;
    model?: string;
    serialNumber?: string;
    assetNumber: number;
    assetTag: number;
    manufacturingDate: number;
    expiringDate: number;
    receipt_date?: number;
    deliveryDate?: number;
    assignDate: number;
    applyReason?: string;
    user: string;
    useState: number;
    memo: string;
    warranty?: string;
    macAddress?: string;
    usageLog?: string;
    hardware?: string;
    software?: string;
    configuration?: string;
}
