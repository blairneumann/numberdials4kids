import { Component, Pipe, PipeTransform } from '@angular/core';
import { NumberGroup, minDigits, maxDigits } from '../model/number-groups';

@Component({
  selector: 'number-group',
  templateUrl: './number-group.component.html',
  styleUrls: ['./number-group.component.scss']
})
export class NumberGroupComponent {

  private group: NumberGroup;

  constructor() {
    this.group = new NumberGroup();
  }

  increment() {
    if (this.group.length < 3) {
      this.group.grow();
    }
  }

  decrement() {
    if (this.group.length > 1) {
      this.group.shrink();
    }
  }
}
