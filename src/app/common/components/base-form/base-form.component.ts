import { FormGroup, AbstractControl } from '@angular/forms';


export abstract class BaseFormComponent {

  public formModel: any;
  public formGroup: FormGroup;
  public errors: any;

  constructor() {
    this.errors = this.createErrors();
  }

  abstract createFormControls(); // : { [key: string]: AbstractControl }
  abstract createErrors();

}
