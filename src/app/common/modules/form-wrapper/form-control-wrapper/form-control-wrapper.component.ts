import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-form-control-wrapper',
  templateUrl: './form-control-wrapper.component.html',
  styleUrls: ['./form-control-wrapper.component.scss']
})
export class FormControlWrapperComponent implements OnInit {

  @Input() errors: { [name: string]: string };
  @Input() control: AbstractControl;

  constructor() { }

  ngOnInit() {
  }

}
