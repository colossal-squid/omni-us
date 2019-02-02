import {ValidatorFn, AbstractControl} from '@angular/forms';

export function jsonValidator (control: AbstractControl): {[key: string]: any} | null {
      let invalid = true, msg = '';
      try {
        const parsed = JSON.parse(control.value);
        invalid = false;
      } catch (e) {
          msg = e;
      }
      return invalid ? {'invalidJson': {value: control.value, msg: msg}} : null;
    };