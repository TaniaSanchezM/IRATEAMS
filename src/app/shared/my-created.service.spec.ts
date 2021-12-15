import { TestBed } from '@angular/core/testing';

import { MyCreatedService } from './my-created.service';

describe('MyCreatedService', () => {
  let service: MyCreatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCreatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
