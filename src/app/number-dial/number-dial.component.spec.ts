import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NumberDialComponent } from './number-dial.component';

describe('NumberDialComponent', () => {
  let component: NumberDialComponent;
  let fixture: ComponentFixture<NumberDialComponent>;
  let element: Element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberDialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a body that displays a number', () => {
    element = fixture.debugElement.query(By.css('.value')).nativeElement;
    expect(Number(element.textContent)).toBeDefined();  
  });

  it('should have increment and decrement methods that work', () => {
    expect(component.value).toBe(1);  
    component.increment();
    expect(component.value).toBe(2);  
    component.increment();
    expect(component.value).toBe(3);  
    component.decrement();
    expect(component.value).toBe(2);  
  });
});
