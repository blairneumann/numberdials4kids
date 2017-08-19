import { NumberDial, radix } from './number-dials';

export const maxDigits = 3;
export const minDigits = 1;

export class NumberGroup {
  private _dials = [ ];

  get dials(): NumberDial[] {
    return this._dials;
  }

  get length(): number {
    return this._dials.length;
  }

  get first(): NumberDial {
    return this._dials[0];
  }

  get last(): NumberDial {
    return this._dials[this._dials.length - 1];
  }

  get value(): number {
    let value = 0;

    for (let dial = this.first; dial; dial = dial.right) {
      value *= radix;
      value += dial.value;
    }

    return value;
  }

  constructor() {
    this._dials = [ new NumberDial(this) ];
  }

  grow() {
    if (maxDigits > this.length) {
      this.dials.unshift(new NumberDial(this));
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

  left(dial: NumberDial) {
    if (!dial) return null;
    let idx = this.dials.indexOf(dial);
    if (1 > idx) return null;
    return this.dials[idx - 1];
  }

  right(dial: NumberDial) {
    if (!dial) return null;
    let idx = this.dials.indexOf(dial);
    if (-1 == idx) return null;
    if (this._dials.length - 1 == idx) return null;
    return this.dials[idx + 1];
  }
}