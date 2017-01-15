import {AbstractControl} from "@angular/forms";

export class SwatValidators {

  static trim(control: AbstractControl) {
    return (control.value.indexOf(' ') >= 0) ? {space: true} : null
  }

  static passwordMatcher(control: AbstractControl) {
    const field   = control.get('password');
    const matcher = control.get('matcher');
    return (field.value === matcher.value) ? null : {match: false};
  }

}
