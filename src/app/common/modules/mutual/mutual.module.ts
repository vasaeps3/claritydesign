import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormWrapperModule } from '@app/common/modules/form-wrapper/form-wrapper.module';


@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    FormWrapperModule
  ],
  declarations: [],
  exports: [
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    FormWrapperModule
  ]
})
export class MutualModule { }
