import { Injectable } from '@angular/core';
import { ToasterService } from 'angular2-toaster';


@Injectable()
export class NotificationService {
  constructor(private toasterService: ToasterService) { }

  public success = (body: string, title = 'Operation successful'): void => {
    this.toasterService.pop({ body: body, title: title, type: 'success' });
  }

  public error = (body: string, title = 'An error occured'): void => {
    this.toasterService.pop({ body: body, title: title, type: 'error' });
  }

  public warning = (body: string, title = 'Something went wrong'): void => {
    this.toasterService.pop({ body: body, title: title, type: 'warning' });
  }

}
