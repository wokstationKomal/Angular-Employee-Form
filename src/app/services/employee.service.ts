import { ConfirmDialogComponent } from './../confirm-dialog/confirm-dialog.component';
// import { Employee } from './../module/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/module/employee';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  _url = "http://localhost:3000/Employee";

  currentEmployee: Employee = {
    fname: '',
    lname: '',
    email: '',
    Monumber: null,
    gender: '',
    password: '',
    houseNo: null,
    street: '',
    city: '',
    id: null
  }

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  // createEmployee(emp: Employee): Observable<Employee>{
  //   return this.http.post<Employee>(this._url, emp);
  // }

  createEmployee(emp: Employee): Observable<Employee>{
    return this.http.post<Employee>(this._url, emp);
  }

  getData(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this._url);
  }

  updateEmployee(emp: Employee): Observable<Employee>{
    return this.http.put<Employee>(this._url+ '/' + emp.id, emp);
  }

  openCofigDialog(){
   return this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      disableClose: true
    })
  }
  
  deleteData(id: number): Observable<Employee>{
    return this.http.delete<Employee>(this._url + '/' + id);
  }

}
