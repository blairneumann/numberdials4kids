import { NumberGroup } from './number-groups';

export const radix = 10;

export class NumberDial {
  private _group: NumberGroup;
  private _value: number;

  constructor(group) {
    this._group = group;
    this._value = 1;
  }

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
    return this == this._group.first;
  }

  get isOnly(): boolean {
    if (!this._group) return false;
    return 1 === this._group.length && this === this._group.first;
  }

  get left(): NumberDial {
    return this._group.left(this);
  }

  get right(): NumberDial {
    return this._group.right(this);
  }

  increment(): boolean {
    let value = this._value + 1;

    if (value < radix) {
        this._value = value;
        return true;
    } else if (this.isFirst) {
      if (this._group.grow()) {
        let right = <NumberDial>this;
        while (right && radix - 1 === right.value) {
          right._value = 0;
          right = right.right;
        }
        return true;
      }
    }
    return false;
  }

  decrement(): boolean {
    let value = this._value - 1;

    if (this.isOnly) {
      if (0 <= value) {
        this._value = value;
        return true;
      }
    } else if (this.isFirst) {
      if (0 < value) {
        this._value = value;
        return true;
      } else {
        let right = this.right;
        while (right && 0 === right.value) {
          right._value = radix - 1;
          right = right.right;
        }
        return this._group.shrink();
      }
    } else {
      if (0 <= value) {
        this._value = value;
        return true;
      }
    }
    return false;
  }
}
