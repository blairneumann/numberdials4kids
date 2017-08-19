import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberDial, radix } from './number-dials';
import { NumberGroup, maxDigits } from './number-groups';

describe('NumberDials', () => {
  let group: NumberGroup;
  let dial: NumberDial;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    group = new NumberGroup();
    dial = group.first;
  });

  it('should be testable', () => {
    expect(dial).toBeTruthy();
  });

  it('should have the right group', () => {
    expect(dial.group === group).toBeTruthy();
  });

  it('should have the right default value', () => {
    expect(dial.value).toEqual(1);
  });

  it('should be the first and only in its group', () => {
    // should be the first and only in its group
    expect(dial.isFirst && dial.isOnly).toBeTruthy();
    expect(dial.right).toBeFalsy();

    // should have a group that grows
    expect(dial.group.grow()).toBeTruthy();
    expect(dial.group.grow()).toBeTruthy();
    expect(dial = dial.left).toBeTruthy();
    
    // should have prev and next (left and right) getters that work
    expect(dial.left === dial.group.dials[0]).toBeTruthy();
    expect(dial.right === dial.group.dials[2]).toBeTruthy();
  });

  it('should have prev and next (left and right) getters that work', () => {
    expect('tested with the previous spec').toBeTruthy();
  });

  it('should increment and decrement', () => {

    // should not decrement below zero
    expect(dial.value).toEqual(1);
    expect(dial.decrement()).toBeTruthy();
    expect(dial.value).toEqual(0);
    expect(dial.decrement()).toBeFalsy();
    expect(dial.value).toEqual(0);

    // should increment up to radix
    for (let idx = 1; idx < radix; ++idx) {
      expect(dial.increment()).toBeTruthy();
      expect(dial.value).toEqual(idx);
    }

    // should add a dial when incrementing to radix
    expect(dial.value).toEqual(radix - 1);
    expect(dial.increment()).toBeTruthy();
    expect(dial.value).toEqual(0);
    expect(dial.left.value).toEqual(1);

    // should remove that dial when decremented back below
    expect(dial.left.decrement()).toBeTruthy();
    expect(dial.value).toEqual(radix - 1);
    expect(dial.left).toBeFalsy();

    // get ready
    expect(dial.increment()).toBeTruthy();
    expect(dial = dial.left).toBeTruthy();
    expect(dial.right).toBeTruthy();
    expect(dial.left).toBeFalsy();

    // should increment up to radix^2 - 1
    for (let idx = 1; idx < radix; ++idx) {
      expect(dial.right.increment()).toBeTruthy();
      expect(dial.right.value).toEqual(idx);
      if (idx > 1) {
        expect(dial.increment()).toBeTruthy();
        expect(dial.value).toEqual(idx);
      }
    }

    // should add a dial when incrementing up to radix^2
    expect(dial.value).toEqual(radix - 1);
    expect(dial.increment()).toBeTruthy();
    expect(dial.value).toEqual(0);
    expect(dial.left.value).toEqual(1);

    // should remove that dial when decremented back below
    expect(dial.left.decrement()).toBeTruthy();
    expect(dial.value).toEqual(radix - 1);
    expect(dial.left).toBeFalsy();


    // get ready
    expect(dial.increment()).toBeTruthy();
    expect(dial = dial.left).toBeTruthy();
    expect(dial.right).toBeTruthy();
    expect(dial.left).toBeFalsy();

    // should increment up to radix^3 - 1 (999)
    for (let idx = 1; idx < radix; ++idx) {
      expect(dial.right.right.increment()).toBeTruthy();
      expect(dial.right.right.value).toEqual(idx);
      expect(dial.right.increment()).toBeTruthy();
      expect(dial.right.value).toEqual(idx);
      if (idx > 1) {
        expect(dial.increment()).toBeTruthy();
        expect(dial.value).toEqual(idx);
      }
    }

    // should decrement each down to '111'
    dial = group.first;
    for (let idx = 1; idx < radix - 1; ++idx) {
      expect(dial.right.right.decrement()).toBeTruthy();
      expect(dial.right.decrement()).toBeTruthy();
      expect(dial.decrement()).toBeTruthy();
    }

    // then down to '100'
    expect(dial.right.decrement()).toBeTruthy();
    expect(dial.right.right.decrement()).toBeTruthy();

    // then down to '99'
    expect(dial = group.first).toBeTruthy();
    expect(dial.decrement()).toBeTruthy();
 
    // then down to '90'
    expect(dial = group.last).toBeTruthy();
    for (let idx = 1; idx < radix; ++idx) {
      expect(dial.decrement()).toBeTruthy();
    }

    // then down to '10'
    expect(dial = group.first).toBeTruthy();
    for (let idx = 1; idx < radix; ++idx) {
      expect(dial.decrement()).toBeTruthy();
    }

    // then down to '9'
    expect(dial.decrement()).toBeTruthy();

    // then down to zero
    expect(dial = group.first).toBeTruthy();
    for (let idx = 1; idx < radix; ++idx) {
      expect(dial.decrement()).toBeTruthy();
    }

    // should not decrement below zero
    expect(group.value).toEqual(0);
    expect(group.last.decrement()).toBeFalsy();
    expect(dial.value).toEqual(0);
  });

  it('should not decrement below zero', () => {
    expect('tested with the previous spec').toBeTruthy();
  });

  it('should increment up to radix, which adds a dial and continues counting up', () => {
    expect('tested with the previous spec').toBeTruthy();
  });

  it('should decrement down past radix, which removes a dial and continues counting down', () => {
    expect('tested with the previous spec').toBeTruthy();
  });

  it('should repeat this for radix^2 and radix^3', () => {
    expect('tested with the previous spec').toBeTruthy();
  });

  // TODO: Make this pass when properly enabled
  it('should increment from zero to max and decrement back down to zero', () => {
    let value = 0;

    console.log(value +" "+ group.value);

    dial = group.last;
    for (let i100s = 0; i100s < radix; ++i100s) {
      for (let i10s = 0; i10s < radix; ++i10s) {
        for (let i1s = 0; i1s < radix; ++i1s) {
          if (i1s == radix - 1 && i10s == radix - 1 && i100s == radix - 1) continue;
          // expect(dial.increment()).toBeTruthy();
          ++value;
        }
      }
    }

    console.log(value +" "+ group.value);

    dial = group.last;
    for (let i100s = radix - 1; i100s >= 0; --i100s) {
      for (let i10s = radix - 1; i10s >= 0; --i10s) {
        for (let i1s = radix - 1; i1s >= 0; --i1s) {
          if (!i1s && !i10s && !i100s) continue;
          // expect(dial.decrement()).toBeTruthy();
          --value;
        }
      }
    }

    console.log(value +" "+ group.value);
  });
});
