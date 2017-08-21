import { Component, Input } from '@angular/core';
import { NumberDial } from '../model/number-dials';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'number-dial',
  templateUrl: './number-dial.component.html',
  styleUrls: [ './number-dial.component.scss', ],
})
export class NumberDialComponent {

  _model: NumberDial;

  disabled = { increment: false, decrement: false }

  @Input() set model(model: NumberDial) {
    this._model = model;
  }

  get value() {
    return this._model.value;
  }

  constructor() {
    this._model = new NumberDial(null);
  }

  increment() {
    if (!this._model.increment()) {
      this.disabled.increment = true;
    }
  }

  decrement() {
    if (!this._model.decrement()) {
      this.disabled.decrement = true;
    }
  }

  mouseup() {
    this.disabled.increment = false;
    this.disabled.decrement = false;
  }
}
