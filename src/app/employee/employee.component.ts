import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Emp } from '../emp';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  emps: Emp[]=[];
  selectedEmp: boolean;
  currentEmp: Emp
  previousUrl: string;

  constructor(private empService: EmployeeService){}

  ngOnInit() {
    this.selectedEmp = this.empService.checkEdit;
    this.currentEmp = this.empService.currentEmp;
    
  }
  add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.empService.addEmp({ name } as Emp)
        .subscribe(emp => {
          this.emps.push(emp);
        });
  }
  edit(emp:Emp): void {
    this.empService.updateEmp(emp)
      .subscribe();
    }


}
