import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ApiService } from './services/api.service';
import { httpInterceptorProviders } from './interceptors';
import { HeaderInterceptor } from '@app/core/interceptors/header.interceptor';
import { MockService } from '@app/mock/mock.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(MockService, { dataEncapsulation: false })
  ],
  declarations: [

  ],
  exports: [
  ],
  providers: [
    ApiService,
    httpInterceptorProviders
  ]
})
export class CoreModule { }
