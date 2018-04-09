import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlWrapperComponent } from './form-control-wrapper/form-control-wrapper.component';
import { FormControlErrorsWrapperComponent } from './form-control-errors-wrapper/form-control-errors-wrapper.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormControlWrapperComponent,
    FormControlErrorsWrapperComponent
  ],
  exports: [
    FormControlWrapperComponent
  ]
})
export class FormWrapperModule { }
