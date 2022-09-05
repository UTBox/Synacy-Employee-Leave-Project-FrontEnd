import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  private readonly CONTENT_TYPE = 'application/json';


  constructor(private http: HttpClient) {

  }


  getEmployees() {
    const headers = new HttpHeaders({'Content-Type': this.CONTENT_TYPE});
    return this.http.get<any>(`http://localhost:8080/api/v1/employee`, {headers: headers});
  }

  createNewEmployee(employee: { name: string, role: string, annualLeave: number, managerId: number }) {
    const headers = new HttpHeaders({'Content-Type': this.CONTENT_TYPE});
    return this.http.post(`http://localhost:8080/api/v1/employee`, employee, {headers: headers}).subscribe((response) => {
      console.log(response);
    });

  }

}
