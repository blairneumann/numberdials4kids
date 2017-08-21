import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
      imports: [
        BrowserAnimationsModule,
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

  it('should have a model', () => {
    expect(component.group).toBeDefined();
  });

  it('should have grow and shrink methods that work', () => {
    expect(component.group.length).toEqual(1);
    expect(component.grow()).toBeTruthy();
    expect(component.group.length).toEqual(2);
    expect(component.shrink()).toBeTruthy();
    expect(component.group.length).toEqual(1);
  });
});
