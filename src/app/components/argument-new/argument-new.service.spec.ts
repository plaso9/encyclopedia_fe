import { TestBed } from '@angular/core/testing';

import { ArgumentNewService } from './argument-new.service';

describe('ArgumentNewService', () => {
  let service: ArgumentNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArgumentNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
