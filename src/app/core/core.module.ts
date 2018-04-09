import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterModule } from 'angular2-toaster';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ApiService } from './services/api.service';
import { ToasterComponent } from './components/toaster.component';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { NotificationService } from './services/notification.service';
import { httpInterceptorProviders } from './interceptors';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot()
  ],
  declarations: [
    ToasterComponent
  ],
  exports: [
    ToasterComponent
  ],
  providers: [
    ApiService,
    NotificationService,
    httpInterceptorProviders
  ]
})
export class CoreModule { }
