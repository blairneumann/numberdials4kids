import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberGroupComponent } from './number-group.component';
import { NumberDialComponent } from '../number-dial/number-dial.component';

describe('NumberGroupComponent', () => {
  let component: NumberGroupComponent;
  let fixture: ComponentFixture<NumberGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NumberGroupComponent,
        NumberDialComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
