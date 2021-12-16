import { TestBed } from '@angular/core/testing';

import { MyhomeService } from './myhome.service';

describe('MyhomeService', () => {
  let service: MyhomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyhomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
