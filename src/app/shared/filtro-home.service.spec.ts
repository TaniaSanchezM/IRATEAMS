import { TestBed } from '@angular/core/testing';

import { FiltroHomeService } from './filtro-home.service';

describe('FiltroHomeService', () => {
  let service: FiltroHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltroHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
