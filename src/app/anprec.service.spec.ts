import { TestBed } from '@angular/core/testing';

import { AnprecService } from './anprec.service';

describe('AnprecService', () => {
  let service: AnprecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnprecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
