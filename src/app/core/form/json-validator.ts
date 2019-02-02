import { AbstractControl} from '@angular/forms';

export function jsonValidator(control: AbstractControl): {[key: string]: any} | null {
      let invalid = true;
      let msg = '';
      try {
        JSON.parse(control.value);
        invalid = false;
      } catch (e) {
          msg = e;
      }
      return invalid ? {invalidJson: {value: control.value, msg}} : null;
    }
