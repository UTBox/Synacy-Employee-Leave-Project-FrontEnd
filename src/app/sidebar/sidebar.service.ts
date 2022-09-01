import {Injectable} from '@angular/core';
import {Employee} from "../classes-and-objects/employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private readonly CONTENT_TYPE = 'application/json';

  private _employeeId: number;
  private _employeeName: string;
  private _employeeRole: string;
  private _employeeManager: number;
  private _employeeLeave: number;


  constructor(private http: HttpClient) {

  }



  getEmployees() {
    const headers = new HttpHeaders({'Content-Type':this.CONTENT_TYPE});
    return this.http.get<any>(`http://localhost:8080/api/v1/employee`, {headers: headers});
  }


  get employeeId(): number {
    return this._employeeId;
  }

  set employeeId(value: number) {
    this._employeeId = value;
  }

  get employeeName(): string {
    return this._employeeName;
  }

  set employeeName(value: string) {
    this._employeeName = value;
  }

  get employeeRole(): string {
    return this._employeeRole;
  }

  set employeeRole(value: string) {
    this._employeeRole = value;
  }

  get employeeManager(): number {
    return this._employeeManager;
  }

  set employeeManager(value: number) {
    this._employeeManager = value;
  }

  get employeeLeave(): number {
    return this._employeeLeave;
  }

  set employeeLeave(value: number) {
    this._employeeLeave = value;
  }
}
