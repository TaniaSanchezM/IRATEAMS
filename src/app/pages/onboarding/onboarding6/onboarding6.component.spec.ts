import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onboarding6Component } from './onboarding6.component';

describe('Onboarding6Component', () => {
  let component: Onboarding6Component;
  let fixture: ComponentFixture<Onboarding6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onboarding6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onboarding6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
