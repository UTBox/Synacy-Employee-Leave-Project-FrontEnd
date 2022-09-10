import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyLeaveService {

  private readonly CONTENT_TYPE = 'application/json';

  constructor(private http:HttpClient) { }

  getMyLeave(employeeId : number): Observable<any> {
    const headers = new HttpHeaders({'Content-Type':this.CONTENT_TYPE});
    return this.http.get<any>(`http://localhost:8080/api/v1/leave?employeeId=${employeeId}`, {headers: headers});
  }

  cancelMyLeave(leaveId : number): Observable<any> {
    const headers = new HttpHeaders({'Content-Type':this.CONTENT_TYPE});
    return this.http.delete(`http://localhost:8080/api/v1/leave/${leaveId}`, {headers: headers});
  }

  leaveIsCancellable(leaveStatus: string): boolean {
    if(leaveStatus == "PENDING"){
      return true;
    }
    return false;
  }
}
