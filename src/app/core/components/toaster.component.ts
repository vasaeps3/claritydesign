import { Component } from '@angular/core';
import { ToasterService, ToasterConfig } from 'angular2-toaster';


@Component({
  selector: 'app-toaster-container',
  template: `<toaster-container [toasterconfig]="toasterconfig"></toaster-container>`
})
export class ToasterComponent {

  public toasterconfig: ToasterConfig = new ToasterConfig({
    tapToDismiss: false,
    showCloseButton: true,
    animation: 'fade',
    timeout: 5000,
    newestOnTop: false,
    mouseoverTimerStop: true
  });

  constructor(private _toasterServise: ToasterService) {
  }

}
