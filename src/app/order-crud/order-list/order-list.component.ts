import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: []
  // styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  emps;
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.emps = this.empService.getEmployees();
  }

  deleteEmployee(id) {
    for(let i = 0; i < this.emps.length; i++) {
      if(this.emps[i].id == id) {
          this.emps.splice(i, 1);
      }
    }

    this.empService.deleteEmployee(id);
  }

}
