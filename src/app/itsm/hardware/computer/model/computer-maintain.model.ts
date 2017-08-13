import {isUndefined} from 'util';

export class ComputerMaintainModel {
    id: number;
    maintainDate: number;
    maintainer: string;
    computerId: number;
    userId: number;
    userName: string;
    memo: string;
    createTime: Date;
    modifyTime: Date;
}
