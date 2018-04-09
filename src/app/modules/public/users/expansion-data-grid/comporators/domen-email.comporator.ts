import * as _ from 'lodash';
import { ClrDatagridComparatorInterface } from '@clr/angular';

import { User } from '@app/common/models/user.model';


export class DomenEmailComporator implements ClrDatagridComparatorInterface<User> {
  compare(a: User, b: User): number {
    return a.domainEmail.localeCompare(b.domainEmail);
  }
}
