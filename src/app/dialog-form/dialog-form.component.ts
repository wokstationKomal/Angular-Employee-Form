import { Employee } from './../module/employee';
import { EmployeeService } from './../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {

  employeeRegister: FormGroup;

  constructor(private empService: EmployeeService, private fb: FormBuilder) { }

  get FirstName(){
    return this.employeeRegister.get('fname');
  }

  get MobileNo(){
    return this.employeeRegister.get('Monumber');
  }

  ngOnInit() {

    this.employeeRegister = this.fb.group({
      fname: ['', Validators.required],
      lname: ['',Validators.required],
      email: ['', Validators.required],
      Monumber: ['',[Validators.required, Validators.minLength(10)]],
      gender: ['',Validators.required],
      password: ['',Validators.required],
      address: this.fb.group({
        houseNo: [''],
        street: [''],
        city: ['']
      })
    });

  }

  postData(currentEmployee: Employee){
    // console.log(currentEmployee);
    if(currentEmployee.id!=null){
      this.updateEmployee(currentEmployee);
    } else{
      this.createEmployee(currentEmployee);
    }
  }

  updateEmployee(emp: Employee){
    this.empService.updateEmployee(emp).subscribe();
  }

  createEmployee(emp: Employee){
    this.empService.createEmployee(emp).subscribe();
  }
  
}
