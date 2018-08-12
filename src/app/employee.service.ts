import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Emp } from './emp'
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  checkEdit= false;
  currentEmp: Emp
  private empDisplayUrl = 'api/employees';  // URL to web api to database we have created

  constructor( private http: HttpClient , private router:Router) { }
  /** GET heroes from the server */
  getEmployees (): Observable<Emp[]> {
  return this.http.get<Emp[]>(this.empDisplayUrl)
 }
  /** DELETE: delete the hero from the server */
  deleteEmployee (tempEmp: Emp): Observable<Emp> {
  const id = typeof tempEmp === 'number' ? tempEmp : tempEmp.id;
  const url = `${this.empDisplayUrl}/${id}`;
  return this.http.delete<Emp>(url, httpOptions) // Not complete yet
}
/** POST: add a new hero to the server */
addEmp (tempEmp: Emp): Observable<Emp> {
  this.router.navigateByUrl('/home');
  return this.http.post<Emp>(this.empDisplayUrl, tempEmp, httpOptions)
}
editEmp (tempEmp: Emp ): void {
  this.currentEmp = tempEmp;
  this.router.navigateByUrl('/home');
}
updateEmp (tempEmp: Emp ): Observable<Emp> {
  this.router.navigateByUrl('/home');
  return this.http.put<Emp>(this.empDisplayUrl, tempEmp, httpOptions);
  
}
/* GET employee whose name contains search term */
searchEmployee(term: string): Observable<Emp[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Emp[]>(`${this.empDisplayUrl}/?name=${term}`);
}
}
