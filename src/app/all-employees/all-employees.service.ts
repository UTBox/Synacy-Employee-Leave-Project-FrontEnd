import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AllEmployeesService {

  private readonly CONTENT_TYPE = 'application/json';

  constructor(private http:HttpClient) { }

  public getEmployees(page: number) {
    const headers = new HttpHeaders({'Content-Type':this.CONTENT_TYPE});
    return this.http.get<any>(`http://localhost:8080/api/v1/employee/pageable?page=${page}`, {headers: headers});

  }


  public calculateNumberOfPages(numberOfLeaves: number): number {
    return Math.ceil(numberOfLeaves / 10);
  }
}
