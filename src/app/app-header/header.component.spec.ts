import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';
import { AppComponent } from '../app.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  
  let AppTitleStub = "Test Title";
  let AppComponentStub = {
    title: AppTitleStub,
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        { provide: AppComponent, useValue: AppComponentStub, },
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the app.title', () => {
    let element = fixture.debugElement.query(By.css('header')).nativeElement;
    expect(element.textContent).toContain(AppTitleStub);
  });
});
