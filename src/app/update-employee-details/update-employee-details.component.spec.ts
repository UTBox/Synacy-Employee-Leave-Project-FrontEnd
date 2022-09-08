import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeDetailsComponent } from './update-employee-details.component';

describe('UpdateEmployeeDetailsComponent', () => {
  let component: UpdateEmployeeDetailsComponent;
  let fixture: ComponentFixture<UpdateEmployeeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
