import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckcomponentComponent } from './checkcomponent.component';

describe('CheckcomponentComponent', () => {
  let component: CheckcomponentComponent;
  let fixture: ComponentFixture<CheckcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
