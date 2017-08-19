import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

function decode(str) {
  let e = document.createElement('div');
  e.innerHTML = str;
  return e.childNodes.length ? e.childNodes[0].nodeValue : null;
}

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a copyright notice', () => {
    let element = fixture.debugElement.query(By.css('footer')).nativeElement;

    expect(element.textContent).toContain(decode('&copy;'));
  });
});
