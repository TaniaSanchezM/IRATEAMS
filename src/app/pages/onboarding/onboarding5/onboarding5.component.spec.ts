import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Onboarding5Component } from './onboarding5.component';

describe('Onboarding5Component', () => {
  let component: Onboarding5Component;
  let fixture: ComponentFixture<Onboarding5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Onboarding5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Onboarding5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
