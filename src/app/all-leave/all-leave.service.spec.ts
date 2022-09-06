import { TestBed } from '@angular/core/testing';

import { AllLeaveService } from './all-leave.service';

describe('AllLeaveService', () => {
  let service: AllLeaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllLeaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
