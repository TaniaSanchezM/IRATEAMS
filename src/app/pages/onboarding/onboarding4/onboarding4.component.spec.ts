import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onboarding4Component } from './onboarding4.component';

describe('Onboarding4Component', () => {
  let component: Onboarding4Component;
  let fixture: ComponentFixture<Onboarding4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onboarding4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onboarding4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
