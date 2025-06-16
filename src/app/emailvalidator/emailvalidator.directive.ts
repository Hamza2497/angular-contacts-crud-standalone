import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, NG_VALIDATORS } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  standalone: true,
  selector: '[hinvEmailvalidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailvalidatorDirective, multi: true }]
})
export class EmailvalidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const email = control.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      return null; // No error if the field is empty
    }
    return emailPattern.test(email) ? null : { invalidEmail: true };
  }

}
