import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MutualModule } from '@app/common/modules/mutual/mutual.module';
import { PublicRoutingModule } from './public-routing.module';
import { PublicDefaultComponent } from './components/public-default/public-default.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';



@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    MutualModule
  ],
  declarations: [
    PublicDefaultComponent,
    PublicHeaderComponent
  ]
})
export class PublicModule { }
