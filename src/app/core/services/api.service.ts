
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '@env/environment';


@Injectable()
export class ApiService {

    constructor(
        private httpClient: HttpClient
    ) { }

    private getHttpParams(obj: Object) {
        let params = new HttpParams();
        _.each(obj, (param, key) => {
            if (_.isArray(param)) {
                _.each(param, (p) => { params = params.append(key, p.toString()); });
            } else {
                params = params.append(key, param.toString());
            }
        });

        return params;
    }


    public get<T>(path: string, params?: Object): Observable<T> {

        const url = `${environment.apiUrl}${path}`;
        const httpParams = this.getHttpParams(params);

        return this.httpClient.get<T>(url, { params: httpParams });
    }

    public delete<T>(path: string): Observable<T> {
        return this.httpClient.delete<T>(`${environment.apiUrl}${path}`);
    }

}
