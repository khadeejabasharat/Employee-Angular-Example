import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employees Data';
  constructor(private empService: EmployeeService){}

  addCheckEdit():void 
  {
    this.empService.checkEdit=false;    
  }
}


