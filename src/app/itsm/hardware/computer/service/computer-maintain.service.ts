import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Observable, Subscription} from 'rxjs/Rx';
import {BaseService} from 'ng2-fuzhutech-common';

@Injectable()
export class ComputerMaintainService extends BaseService {

    constructor(http: Http) {
        super(http, 'computer-maintains');
    }

    public getFilterList(computerId) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json;charset=UTF-8');
        const searchParams = new URLSearchParams();
        searchParams.set('computerId', computerId);

        return Observable
            .create(observer => {

                //通过http从服务端获取数据
                this.http.get(this.url, {search: searchParams, headers: headers})
                    .map(response => response.json())
                    .subscribe(
                        data => {
                            this.records = data.data.list;
                            console.log(this.dataStore.records);

                            this.handleSuccess(observer, this.dataStore.records);
                        },
                        error => this.handleError(observer, error, []),
                        () => console.log('getList Complete')
                    );
            });
    }

}
