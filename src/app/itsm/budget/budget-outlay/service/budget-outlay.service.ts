import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Observable, Subscription} from 'rxjs/Rx';
import {BaseService} from 'ng2-fuzhutech-common';

@Injectable()
export class BudgetOutlayService extends BaseService {

    constructor(http: Http) {
        super(http, 'budgets');
    }

}
