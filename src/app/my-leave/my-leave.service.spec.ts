import { TestBed } from '@angular/core/testing';

import { MyLeaveService } from './my-leave.service';

describe('MyLeaveService', () => {
  let service: MyLeaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLeaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
