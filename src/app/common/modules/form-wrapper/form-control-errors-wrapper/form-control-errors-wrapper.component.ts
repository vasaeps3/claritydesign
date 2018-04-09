import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as _ from 'lodash';


@Component({
  selector: 'app-form-control-errors-wrapper',
  templateUrl: './form-control-errors-wrapper.component.html',
  styleUrls: ['./form-control-errors-wrapper.component.scss']
})
export class FormControlErrorsWrapperComponent implements OnInit {

  @Input() control: FormControl | FormGroup;
  @Input() errors: { [name: string]: string };

  private preparedMessages: string[];

  constructor() { }

  ngOnInit() {
    this.renderPreparedMessages();
    if (this.control instanceof FormControl || this.control instanceof FormGroup) {
      this.control.valueChanges
        .subscribe(() => {
          this.renderPreparedMessages();
        });
    }
  }

  private renderPreparedMessages() {
    const preparedMessagesTpl = this.getErrors();
    const context = this.createContext();
    this.preparedMessages = _.map(preparedMessagesTpl, (tpl) => _.template(tpl)(context));
  }

  private getErrors() {
    return _.filter(this.errors, (err, key) => this.control.hasError(key));
  }

  private createContext() {
    let res = {};
    _.forEach(_.keys(this.control.errors), v => {
      res = {
        ...res,
        ...this.control.errors[v]
      };
    });

    return res;
  }

}
