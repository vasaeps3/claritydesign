import * as _ from 'lodash';
import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Filter, ClrDatagridFilter } from '@clr/angular';
import { Subject } from 'rxjs/Subject';

import { User } from '@app/common/models/user.model';


@Component({
  selector: 'app-doman-email-filter',
  templateUrl: './doman-email-filter.component.html',
  styleUrls: ['./doman-email-filter.component.scss']
})
export class DomanEmailFilterComponent implements Filter<User>, OnInit {

  @Input() listDomainEmailSub: Subject<string[]>;
  public changes: EventEmitter<any> = new EventEmitter<any>(false);

  private listDomainEmail: string[];
  private isActiving = false;
  private checkformGroup: FormGroup;

  public isActive(): boolean {
    return this.isActiving;
  }

  public accepts(user: User): boolean {
    return !!this.checkformGroup.value[user.domainEmail];
  }

  constructor(
    private filterContainer: ClrDatagridFilter,
    private fb: FormBuilder
  ) {
    filterContainer.setFilter(this);
  }

  public ngOnInit() {
    this.listDomainEmailSub
      .subscribe(
        (listDomainEmail) => {
          this.listDomainEmail = listDomainEmail;
          this.createFormControls();
          this.valueChanged();
        }
      );
  }

  private valueChanged() {
    this.checkformGroup.valueChanges
      .subscribe(
        (data) => {
          this.isActiving = _.includes(data, true);
          this.changes.next(true);
        });
  }

  private createFormControls() {
    const formModel: FormControl[] = [];
    _.each(this.listDomainEmail, (domainEmail) => {
      formModel[domainEmail] = new FormControl();
    });
    this.checkformGroup = this.fb.group(formModel);
  }
}
