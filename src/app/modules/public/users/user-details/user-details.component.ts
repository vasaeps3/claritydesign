import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { switchMap } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import 'rxjs/add/observable/forkJoin';

import { NotificationService } from '@app/core/services/notification.service';
import { BaseFormComponent } from '@app/common/components/base-form/base-form.component';
import { UserDetailService } from './user-details.service';
import { User } from '@app/common/models/user.model';
import { ERRORS } from '@app/common/const/errors';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent extends BaseFormComponent implements OnInit, OnDestroy {

  private userId: string = null;
  private user: User;

  private userTypes = [];

  private userTypeSubscription: Subscription;

  private formGroupValues: any;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private userDetailService: UserDetailService
  ) {
    super();
  }

  ngOnInit() {
    this.formModel = this.createFormControls();
    this.formGroup = this.formBuilder.group(this.formModel);

    const userTypeObservable = this.userDetailService.getUsersType();

    const userObservable = this.route.params
      .pipe(
        switchMap(param => {
          if (!!param['userId']) {
            return this.userDetailService.getUser(param['userId']);
          } else {
            return Observable.of(null) as Observable<User>;
          }
        })
      );

    Observable.forkJoin(userTypeObservable.pipe(take(1)), userObservable.pipe(take(1)))
      .subscribe(([userTypes, user]) => {
        this.userTypes = userTypes;
        if (!!user) {
          this.user = {
            ...user,
            ...{ type: 'user' }
          };
          this.formGroup.patchValue(this.user);
        }
      });

    this.initFormSubscriptions();
  }

  private initFormSubscriptions() {
    this.userTypeSubscription = this.formGroup.get('type')
      .valueChanges
      .subscribe(value => {
        this.createDependentField(value);
      });
  }

  public ngOnDestroy() {
    this.userTypeSubscription.unsubscribe();
  }

  private createDependentField(value: string) {
    let createDependentGroupModel = null;
    let removeDependentGroupModel = null;
    if ('admin' === value) {
      createDependentGroupModel = this.getFormControlsAdmin();
      removeDependentGroupModel = this.getFormControlsUser();
    } else if ('user' === value) {
      createDependentGroupModel = this.getFormControlsUser();
      removeDependentGroupModel = this.getFormControlsAdmin();
    }
    Object.keys(removeDependentGroupModel)
      .forEach(key => {
        this.formGroup.removeControl(`${key}`);
      });
    Object.keys(createDependentGroupModel)
      .forEach(key => {
        this.formGroup.setControl(`${key}`, createDependentGroupModel[key]);
        if (!!this.user) {
          this.formGroup.get(`${key}`).patchValue(this.user[`${key}`] || '');
        }
      });
  }


  private getFormControlsUser(key?, value = '') {
    return {
      email: new FormControl('', Validators.required),
      website: new FormControl('', Validators.required)
    };
  }

  private getFormControlsAdmin() {
    return {
      username: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    };
  }

  public createFormControls() {
    return {
      id: [''],
      type: ['', Validators.required],
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[A-z0-9]*$/)
      ]]
    };
  }

  private onSubmit() {
    this.validateAllFormFields(this.formGroup);
    if (this.formGroup.invalid) {
      return false;
    }
    console.log(this.formGroup.value);
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  public createErrors() {
    return {
      type: {
        required: ERRORS.validations.required
      },
      name: {
        required: ERRORS.validations.required,
        minlength: ERRORS.validations.minlength,
        pattern: ERRORS.validations.pattern
      },
      username: {
        required: ERRORS.validations.required
      },
      email: {
        required: ERRORS.validations.required
      },
      phone: {
        required: ERRORS.validations.required
      },
      website: {
        required: ERRORS.validations.required
      }
    };
  }

}
