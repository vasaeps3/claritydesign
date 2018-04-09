import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { ApiService } from '@app/core/services/api.service';
import { User } from '@app/common/models/user.model';


@Injectable()
export class UserDetailService {

  constructor(
    private apiService: ApiService
  ) { }

  public getUser(userId): Observable<User> {
    return this.apiService.get(`/users/${userId}`);
  }

  public getUsersType(): Observable<any> {
    return Observable.of([{
      key: 'admin',
      value: 'Administrator'
    },
    {
      key: 'user',
      value: 'User'
    }]).delay(500);
  }
}
