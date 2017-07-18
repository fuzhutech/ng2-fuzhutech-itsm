import {isUndefined} from 'util';

export class BudgetOutlayModel {
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

    set contactObj(value) {
        console.log(value);
        let str: string = value;
        this.manufacturingDate = parseInt(str.replace('-', ''));

    }

    get contactObj() {
        if (!isUndefined(this.manufacturingDate)) {
            let str: string = this.manufacturingDate.toString();
            return str.slice(0, 4) + '-' + str.slice(4, 6) + '-' + str.slice(6, 8);
        }
        return undefined;
    }
}
