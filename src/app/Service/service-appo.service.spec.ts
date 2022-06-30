import { TestBed } from '@angular/core/testing';

import { ServiceAppoService } from './service-appo.service';

describe('ServiceAppoService', () => {
  let service: ServiceAppoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAppoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
