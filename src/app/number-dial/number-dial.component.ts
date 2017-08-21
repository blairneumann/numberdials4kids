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
    this._model.increment();
  }

  decrement() {
    this._model.decrement();
  }
}
