import { Component, Pipe, PipeTransform } from '@angular/core';
import { NumberGroup, minDigits, maxDigits } from '../model/number-groups';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'number-group',
  templateUrl: './number-group.component.html',
  styleUrls: [ './number-group.component.scss', ],
  animations: [
    trigger('dialInOut', [
      transition(':enter', [
        style({
          transform: 'translateX(0) scale(0)',
          opacity: 0,
        }),
        animate('200ms ease-out'),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({
          transform: 'translateX(0) scale(0)',
          opacity: 0,
        })),
      ]),
    ]),
  ],
})
export class NumberGroupComponent {

  private _model: NumberGroup;

  constructor() {
    this._model = new NumberGroup();
  }

  get group() {
    return this._model;
  }
  
  grow(): boolean {
    if (this._model.length < maxDigits) {
      return this._model.grow();
    }
    return false;
  }

  shrink(): boolean {
    if (this._model.length > minDigits) {
      return this._model.shrink();
    }
    return false;
  }
}
