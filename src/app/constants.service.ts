import { Injectable } from '@angular/core';

export interface TreeStruct {[key: string]: string|number|boolean|TreeStruct; }

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  public get DEFAULT_TEXT(): TreeStruct {
    return {
      a: true,
      b: 1,
      c: 'Hello, World!',
      d: {
        e: 'I am a nested string!',
        f: {
          g: {
            h: {
              i: 'So am I!',
              j: false,
              k: 123,
              l: 'And I am last!'
            }
          }
        }
      }
    };
  }
}
