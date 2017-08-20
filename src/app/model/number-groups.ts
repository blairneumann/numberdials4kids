import { NumberDial, radix } from './number-dials';

export const maxDigits = 3;
export const minDigits = 1;
export const power = maxDigits;

/**
 * ## Model: NumberGroup
 *  - Represent a group of number dials that collectively represent a number.
 *  - Is iterable: start from the ends (`first`, `last`) and iterate using `dial.right` and `dial.left`.
 *  - Is resizable, within bounds, using `grow()` and `shrink()`.
 * #### Dependencies
 *  - NumberDial
 * #### TODO
 *  - None
 */
export class NumberGroup {
  
  /** Member Variables **/

  private _dials = [ ];

  /** Constructors **/
  
  constructor() {
    // every NumberGroup starts with one NumberDial set to 1
    this._dials = [ new NumberDial(this) ];
  }

  /** Properties **/

  get dials(): NumberDial[] {
    return this._dials;
  }

  get length(): number {
    return this._dials.length;
  }

  get value(): number {
    let value = 0;

    for (let dial = this.first; dial; dial = dial.right()) {
      value *= radix;
      value += dial.value;
    }

    return value;
  }

  /** Iterables **/

  get first(): NumberDial {
    return this._dials[0];
  }

  get last(): NumberDial {
    return this._dials[this._dials.length - 1];
  }

  left(dial: NumberDial, ensure?: boolean): NumberDial {
    if (!dial) return null;
    let idx = this.dials.indexOf(dial);
    if (-1 == idx) return null;
    if (0 == idx) {
      if (this.grow(0)) {
        ++idx;
      } else {
        return null;
      }
    }
    return this.dials[idx - 1];
  }

  right(dial: NumberDial): NumberDial {
    if (!dial) return null;
    let idx = this.dials.indexOf(dial);
    if (-1 == idx) return null;
    if (this._dials.length - 1 == idx) return null;
    return this.dials[idx + 1];
  }

  /** Resizeable **/

  grow(value?: number) {
    if (maxDigits > this.length) {
      this.dials.unshift(new NumberDial(this, value));
      return true;
    }
    return false;
  }

  shrink() {
    if (minDigits < this.length) {
      this.dials.shift();
      return true;
    }
    return false;
  }

  remove(dial: NumberDial): boolean {
    let idx = this.dials.indexOf(dial);
    if (idx > -1 && this.length > 1) {
      this.dials.splice(idx, 1);
      return true;
    }
    return false;
  }
}