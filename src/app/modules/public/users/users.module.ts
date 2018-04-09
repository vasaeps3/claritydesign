import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomanEmailFilterComponent } from './expansion-data-grid/components/doman-email-filter/doman-email-filter.component';
import { DummyRouterOutletComponent } from '@app/common/components/dummy-router-outlet/dummy-router-outlet.component';
import { MutualModule } from '@app/common/modules/mutual/mutual.module';
import { UserListService } from './user-list/user-list.service';
import { UserDetailService } from './user-details/user-details.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MutualModule
  ],
  providers: [
    UserListService,
    UserDetailService
  ],
  declarations: [
    UserListComponent,
    DomanEmailFilterComponent,
    UserDetailsComponent,
    DummyRouterOutletComponent
  ]
})
export class UsersModule { }
