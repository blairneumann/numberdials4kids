import { NumberGroup } from './number-groups';

export const radix = 10;

/**
 * ## Model: NumberDial
 *  - Represent one dial within a group. Holds a numeric value.
 *  - It can be `increment` and `decrement` that value.
 *  - Additional dials are added and removed from the group on `increment` and `decrement` as needed.
 *  - It's aware of its group and its position within that group.
 *  - It can iterate from its current position within the group.
 * #### Dependencies:
 *  - NumberGroup
 * #### TODO:
 *  - Implement left-increment/decrement and right-increment/decremenet
 */
export class NumberDial {

  /** Member Variables **/

  private _group: NumberGroup;
  private _value: number;

  /** Constuctors **/

  constructor(group, value?: number) {
    this._group = group;
    this._value = (typeof value === 'undefined' ? 1 : value);
  }

  /** Properties **/

  get group(): NumberGroup {
    return this._group;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get isFirst(): boolean {
    if (!this._group) return false;
    return this === this._group.first;
  }

  get isLast(): boolean {
    if (!this._group) return false;
    return this === this._group.last;
  }

  get isOnly(): boolean {
    if (!this._group) return false;
    return 1 === this._group.length && this._group.dials[0] === this;
  }

  /** Iterator **/

  left(ensure?: boolean): NumberDial {
    return this._group.left(this, ensure);
  }

  right(): NumberDial {
    return this._group.right(this);
  }

   /** Increment/Decrement **/

  increment(): boolean {
    let value = this._value + 1;

    // simple case
    if (value < radix) {
      this._value = value;
      return true;
    }
    
    // case: radix, so carry
    let left = this.left(true);
    if (left && left.increment()) {
      this._value = 0;
      return true;
    }

    return false;
  }

  decrement(): boolean {
    let value = this._value - 1;

    // simple cases
    if (value > 0 || value === 0 && (this.isOnly || !this.isFirst)) {
      this._value = value;
      return true;
    }

    // decrementing the first digit to zero
    if (this.isFirst && value === 0) {
      let right = this.right();

      while (right && right.value === 0) {

        // decrementing the 10s place from 10, for example
        if (right.isLast)
          break;

        let next = right.right();
        right.remove();
        right = next;
      }

      return this.remove();
    }

    // borrow
    if (!this.isFirst && value < 0) {
      let left = <NumberDial>this;

      while (left && left.value === 0) {
        left = left.left();
      }

      if (left && left.value > 0) {
        let right = left;

        do {
          right = right.right();          
          right.value = radix - 1;
        } while (right && right != this);
        
        return left.decrement();
      }
    }

    // decrementing a non-first digit below zero 
    return false;
  }

  /** Utility **/

  remove(): boolean {
    return this._group.remove(this);
  }
}
