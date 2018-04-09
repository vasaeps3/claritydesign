
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { NotificationService } from '@app/core/services/notification.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private notify: NotificationService
  ) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((e) => this.handleError(e))
      );
  }

  private handleError(error): Observable<HttpEvent<any>> {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 500:
          this.notify.error('Please try to reload page.', 'Something went wrong');
          break;
        case 404:
          this.notify.error('Check the entered data', `This isn't the page you are looking for`);
          break;
        default:
          return Observable.throw(error);
      }

      return Observable.of();
    }
  }

}
