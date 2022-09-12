import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AllLeaveService {
  private readonly CONTENT_TYPE = 'application/json';

  constructor(private http:HttpClient) { }

  getLeaves(page: number) {
    const headers = new HttpHeaders({'Content-Type':this.CONTENT_TYPE});
    return this.http.get<any>(`http://localhost:8080/api/v1/leave?page=${page}`,{headers:headers});
  }

  getLeavesByManager(page: number,managerId:number):Observable<any> {
    const headers = new HttpHeaders({'Content-Type':this.CONTENT_TYPE});
    return this.http.get<any>(`http://localhost:8080/api/v1/leave?managerId=${managerId}&page=${page}`,{headers:headers});
  }

  updateLeaveStatus(leaveStatus:{status :string} ,leaveId : number) : Observable<any>{
    const headers = new HttpHeaders({'Content-Type':this.CONTENT_TYPE});
    return this.http.put(`http://localhost:8080/api/v1/leave/${leaveId}`,leaveStatus, {headers: headers});
  }


}
