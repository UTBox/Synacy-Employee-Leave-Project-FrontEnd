import { TestBed } from '@angular/core/testing';

import { UpdateEmployeeDetailsService } from './update-employee-details.service';

describe('UpdateEmployeeDetailsService', () => {
  let service: UpdateEmployeeDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateEmployeeDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
