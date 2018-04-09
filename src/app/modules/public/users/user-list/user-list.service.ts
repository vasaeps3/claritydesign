import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '@app/common/models/User.model';
import { ApiService } from '@app/core/services/api.service';


@Injectable()
export class UserListService {

  constructor(
    private apiService: ApiService
  ) { }

  public getAllUsers(): Observable<User[]> {
    return <Observable<User[]>>this.apiService.get('/users');
  }

  public deleteUser(userId) {
    return this.apiService.delete(`/users/${userId}`);
  }

}
