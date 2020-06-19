import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';
import {Employee} from 'src/app/module/employee';
import { MatDialog } from '@angular/material';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  allEmployee: Employee[];

  constructor(private empService: EmployeeService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAllEmployee();
  }

  getAllEmployee(){
    this.empService.getData().subscribe((data: Employee[]) => {
      this.allEmployee = data;
    })
  }

  //edit the data
  edit(data){
    this.dialog.open(DialogFormComponent);
    this.empService.currentEmployee = Object.assign({}, data);
  }

  //delete data
  deleteData(id: number){
    this.empService.openCofigDialog().afterClosed()
    .subscribe(res => {
      // console.log(res);
      if(res){
        this.empService.deleteData(id).subscribe(
          (data: Employee) => {
            this.getAllEmployee();
          });
      }
    })
  }

}
