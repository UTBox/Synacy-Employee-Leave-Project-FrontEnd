import {Injectable} from '@angular/core';
import {Employee} from "../classes-and-objects/employee";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  employee: Employee[] = [];

  constructor() {
  }

  addPredefinedEmployees() {
    this.pushEmployee(1, 'Dexter Sy', 'ADMIN', 0, 0);
    this.pushEmployee(2, 'Vergil O.', 'MANAGER', 1, 20);
    this.pushEmployee(1, 'Mark B.', 'MANAGER', 1, 20);
    this.pushEmployee(1, 'Dart L.', 'MEMBER', 2, 20);
  }


  pushEmployee(id: number, name: string, role: string, manager: number, leave_balance: number): void {
    let newEmployee = {} as Employee;
    newEmployee.id = id;
    newEmployee.name = name;
    newEmployee.role = role;
    newEmployee.manager = manager;
    newEmployee.leave_balance = leave_balance;
    this.employee.push(newEmployee);

  }
}
