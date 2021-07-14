import { AbstractControl } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch (control: AbstractControl): {[key: string]: boolean} | null
{
    const newPassword = control.get('password');
    const confirmPassword = control.get('confirmPassword');
   console.log('newPass',newPassword?.value);
   console.log('confirm',confirmPassword?.value);

    // if no values, valid
    if (!newPassword?.value || !confirmPassword?.value) {
      return null;
    }
    // if values match return null, else 'mismatchedPasswords:true'
    return newPassword.value === confirmPassword.value ? null : { 'MustMatch': true };
  }
