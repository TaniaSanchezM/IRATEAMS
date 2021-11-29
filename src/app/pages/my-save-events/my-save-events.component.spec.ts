import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySaveEventsComponent } from './my-save-events.component';

describe('MySaveEventsComponent', () => {
  let component: MySaveEventsComponent;
  let fixture: ComponentFixture<MySaveEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySaveEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySaveEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
