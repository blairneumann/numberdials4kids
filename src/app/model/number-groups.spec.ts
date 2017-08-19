import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberDial, radix } from './number-dials';
import { NumberGroup, maxDigits } from './number-groups';

describe('NumberGroups', () => {
  let group: NumberGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    group = new NumberGroup();
  });

  it('should be testable', () => {
    expect(group).toBeTruthy();
  });

  it('should have one element by default, and it\'s the first element', () => {
    expect(group.length).toEqual(1);
    expect(group.first == group.dials[0]);
  });

  it('can grow and shrink', () => {
    // it can grow up to the max
    expect(group.length).toEqual(1);
    expect(group.grow()).toBeTruthy();
    expect(group.length).toEqual(2);
    expect(group.grow()).toBeTruthy();
    expect(group.length).toEqual(3);

    // Can't grow beyond the max
    expect(group.grow()).toBeFalsy();
    expect(group.length).toEqual(3);

    // it can shrink down to one
    expect(group.shrink()).toBeTruthy();
    expect(group.length).toEqual(2);
    expect(group.shrink()).toBeTruthy();
    expect(group.length).toEqual(1);

    // it can't shrink below one
    expect(group.shrink()).toBeFalsy();
    expect(group.length).toEqual(1);
  });

  it('can\'t grow beyond the max number of elements', () => {
    expect('tested with the previous spec').toBeTruthy();
  });

  it('can\'t shrink below one element', () => {
    expect('tested with the previous spec').toBeTruthy();
  });

  it('should be iterable', () => {
    // build max number of digits
    for (let idx = 1; idx < maxDigits; ++idx) {
      expect(group.grow()).toBeTruthy();
    }

    // write '1, 2, 3, ...' in them while verifying iteration up
    for (let iterator = group.first, idx = 1; iterator; iterator = iterator.right, ++idx) {
      expect(iterator).toBeTruthy();
      expect(iterator.value).toEqual(1);
      expect(iterator.value = idx).toEqual(idx);
    }

    // verify iteration down, confirming previous '..., 3, 2, 1'
    for (let iterator = group.last, idx = maxDigits; iterator; iterator = iterator.left, --idx) {
      expect(iterator).toBeTruthy();
      expect(iterator.value).toEqual(idx);
    }
  });
});
