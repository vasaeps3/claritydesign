import * as _ from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClrDatagridSortOrder, State } from '@clr/angular';

import { User } from '@app/common/models/user.model';
import { UserListService } from './user-list.service';
import { DomenEmailComporator } from '../expansion-data-grid/comporators/domen-email.comporator';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private users: User[];
  private selectedUser: User;

  private emailComporator = new DomenEmailComporator();
  private descEmail = ClrDatagridSortOrder.ASC;
  private myFilterValue = '';

  private listDomainEmailSub: Subject<string[]> = new Subject<string[]>();


  constructor(
    private userListService: UserListService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.userListService.getAllUsers()
      .subscribe(
        (users) => {
          this.users = _.map(users, (user) => {
            const newUser = {
              ...user,
              ...{ domainEmail: _.last(user.email.split('.')) }
            };
            return newUser;
          });

          this.listDomainEmailSub.next(this.createListDomenEmail());
        });
  }

  private createListDomenEmail() {
    const allListDomenEmail: string[] = [];
    _.each(this.users, (user) => {
      allListDomenEmail.push(user.domainEmail);
    });

    return _.union(allListDomenEmail);
  }

  private onAdd() {
    this.router.navigate(['user'], { relativeTo: this.route });
  }

  private onEdit() {
    this.router.navigate(['user', this.selectedUser.id], { relativeTo: this.route });
  }

  private onDelete() {
    this.userListService.deleteUser(this.selectedUser.id)
      .subscribe(
        (data) => {
          this.loadUsers();
        }
      );
  }

}
