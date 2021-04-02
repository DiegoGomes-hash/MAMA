import { TestBed } from '@angular/core/testing';

import { StorageloginService } from './storagelogin.service';

describe('StorageloginService', () => {
  let service: StorageloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
