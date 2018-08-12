import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import
{
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Emp } from '../emp';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-emp-search',
  templateUrl: './emp-search.component.html',
  styleUrls: ['./emp-search.component.css']
})
export class EmpSearchComponent implements OnInit {
  emps$: Observable<Emp[]>;
  emp: Emp[]=[];
  private searchTerms = new Subject<string>();

  constructor(private empService:EmployeeService, private router:Router) { }
    // Push a search term into the observable stream.
    search(term: string): void {
      this.searchTerms.next(term);
    }

  ngOnInit() {
    this.emps$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.empService.searchEmployee(term)),
    )
  }
  edit(tempEmp: Emp): void {
    this.empService.checkEdit=true;
    this.empService.editEmp(tempEmp);
    this.router.navigateByUrl('/employee');
  }

}
