import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from '../order.service';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  emps;
  text;
  oldText
  appState = 'default';

  constructor(private empService: EmployeeService,private router: Router) { }

  
  @ViewChild("f") form: any;
  
  ngOnInit() {
    this.emps = this.empService.getEmployees();
  }

  // addEmployee() {
  //   let newEmployee = {
  //     text: this.text
  //   }
   
  // }
  
  onSubmit() {
    if (this.form.value) {
    let newEmployee = {
      id:uuid(),
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      languages: this.form.value.languages,

    }
    this.emps.push(newEmployee);
    this.empService.addEmployee(newEmployee);
    this.router.navigate(['order-list']);
    }
  }

  // editEmployee(todo) {
  //   this.appState = 'edit';
  //   this.oldText = todo.text;
  //   this.text = todo.text;
  // }

  // updateEmployee() {
  //   console.log(this.text);
  //       for(let i = 0; i < this.emps.length; i++) {
  //         if(this.emps[i].text == this.oldText) {
  //         this.emps[i].text = this.text;
  //     }
  // }

  // this.empService.updateEmployee(this.oldText, this.text);

  // }

}