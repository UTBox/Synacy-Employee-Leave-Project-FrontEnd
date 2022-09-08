import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UpdateEmployeeDetailsService {

  private readonly CONTENT_TYPE = 'application/json';


  constructor(private http: HttpClient) {
  }

  getEmployeeDetails(employeeId: number | string) {
    const headers = new HttpHeaders({'Content-Type': this.CONTENT_TYPE});
    return this.http.get<any>(`http://localhost:8080/api/v1/employee/${employeeId}`, {headers: headers});
  }

  saveEmployeeDetails(requestBody: { id: number, name: string, role: string, managerId: number }) {
    const headers = new HttpHeaders({'Content-Type': this.CONTENT_TYPE});
    return this.http.put(`http://localhost:8080/api/v1/employee/`, requestBody, {headers: headers}).subscribe((response) => {
      console.log(response);

    });
  }

  getEmployees() {
    const headers = new HttpHeaders({'Content-Type': this.CONTENT_TYPE});
    return this.http.get<any>(`http://localhost:8080/api/v1/employee`, {headers: headers});
  }

  checkValuesIfValid(employeeForm: FormGroup): boolean {
    let containsNull: number = 0;

    Object.keys(employeeForm.controls).forEach(key => {
      if (employeeForm.controls[key].value == '') {
        containsNull++;
      }
    });

    if (employeeForm.controls['role'].value == 'ADMIN' && containsNull == 2) {
      return true;
    } else if (containsNull >= 1) {
      return false;
    } else {
      return true;
    }
  }
}
