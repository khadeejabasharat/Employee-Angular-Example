import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Emp } from '../emp';
import { EMPLOYEES } from '../mock-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps: Emp[];
  
  constructor(private empService: EmployeeService, private router:Router) { }

  ngOnInit() {
   // this.emps=EMPLOYEES; getting data from 
    this.getEmployees();
  }
  getEmployees(): void {
    this.empService.getEmployees()
        .subscribe(emps => this.emps = emps);
  }
 
  delete(tempEmp: Emp): void {
    this.emps = this.emps.filter(h => h !== tempEmp);
    this.empService.deleteEmployee(tempEmp).subscribe();
  }
  edit(tempEmp: Emp): void {
    this.empService.checkEdit=true;
    this.empService.editEmp(tempEmp);
    this.router.navigateByUrl('/employee');
  }

}
