import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

export function r_passwordValidation(): ValidatorFn {
  return (control: AbstractControl) => {
    const passwordValidationDirective = new PasswordValidationDirective();
    return passwordValidationDirective.validate(control);
  }
 }
 

@Directive({
  selector: '[r_passwordValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidationDirective, multi: true}]

})
export class PasswordValidationDirective implements Validator {

  passwordsProhibidos = ['123456', 'querty', '123456789'];

  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    const r_password = <string>control.value;
  

    if (!r_password) {
        return {};
    }
    if (r_password.length < 4) {
        return {};
    }

    if (this.passwordsProhibidos.indexOf(r_password) !== -1){
      return {'r_passwordValidation': {'message': 'Escoge un mejor password'}}
    }

    if (r_password === r_password.toLowerCase()){
      return {'r_passwordValidation': {'message': 'Tu password debe de contener mayúsculas'}}
    }
 
    if (r_password === r_password.toUpperCase()){
      return {'r_passwordValidation': {'message': 'Tu password debe de contener minúsculas'}}
    }
 
    if (!/\d/.test(r_password)){
      return {'r_passwordValidation': {'message': 'Tu password debe de incluir un caracter numérico'}}
    }
    
    return {};
    
 

  }

  constructor() { }

}