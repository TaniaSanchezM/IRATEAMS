import { TestBed } from '@angular/core/testing';

import { ApuntadosService } from './apuntados.service';

describe('ApuntadosService', () => {
  let service: ApuntadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApuntadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
