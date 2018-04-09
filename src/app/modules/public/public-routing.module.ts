import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicDefaultComponent } from './components/public-default/public-default.component';


const routes: Routes = [
  {
    path: '',
    component: PublicDefaultComponent,
    children: [
      {
        path: 'users',
        loadChildren: 'app/modules/public/users/users.module#UsersModule'
      },
      {
        path: 'posts',
        loadChildren: 'app/modules/public/posts/posts.module#PostsModule'
      },
      {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
