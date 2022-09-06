import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AllLeaveService {
  private readonly CONTENT_TYPE = 'application/json';

  constructor(private http:HttpClient) { }

  getLeaves() {
    const headers = new HttpHeaders({'Content-Type':this.CONTENT_TYPE});
    return this.http.get<any>(`http://localhost:8080/api/v1/leave`,{headers:headers});
  }

}
