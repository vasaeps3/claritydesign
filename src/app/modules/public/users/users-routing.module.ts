import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { DummyRouterOutletComponent } from '@app/common/components/dummy-router-outlet/dummy-router-outlet.component';


const routes: Routes = [
  {
    path: '',
    component: DummyRouterOutletComponent,
    children: [
      {
        path: 'user',
        children: [
          {
            path: ':userId',
            children: [
              {
                path: '',
                component: UserDetailsComponent
              }
            ]
          },
          {
            path: '',
            component: UserDetailsComponent
          }
        ]
      },
      {
        path: '',
        component: UserListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
