import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../order.service';


@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {
  emp;
  id;
  constructor(private _Activatedroute:ActivatedRoute,private empService: EmployeeService,private router:Router) { }
  @ViewChild("f") form: any;

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.params['id'];
    let emps=this.empService.getEmployees();
    this.emp=emps.find(p => p.id==this.id);
    console.log(this.emp);
  }
  onSubmit() {
    if (this.form.value) {
      console.log(this.form.value)
    this.empService.updateEmployee(this.emp,this.form.value);
    this.router.navigate(['order-list']);
    }
  }
}
