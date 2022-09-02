import { TestBed } from '@angular/core/testing';

import { AllEmployeesService } from './all-employees.service';

describe('AllEmployeesService', () => {
  let service: AllEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
