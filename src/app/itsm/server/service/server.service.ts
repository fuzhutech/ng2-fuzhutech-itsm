import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Observable, Subscription} from 'rxjs/Rx';
import {BaseService} from 'ng2-fuzhutech-common';

@Injectable()
export class ServerService extends BaseService {

    constructor(http: Http) {
        super(http, 'users');
    }

    getRoleWithUser(userId: number) {

        const headers = new Headers();
        headers.append('Content-Type', 'application/json;charset=UTF-8');

        const searchParams = new URLSearchParams();

        return this.http.get(this.url + '/' + userId + '/roles', {search: searchParams, headers: headers})
            .map(response => response.json());
    }

    editRoleWithUser(userId: number, data) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(data);

        return this.http.put(this.url + '/' + userId + '/roles', JSON.stringify(data), {headers: headers})
            .map(res => res.json());
    }

}
