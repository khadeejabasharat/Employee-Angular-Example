import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent }      from './home/home.component';
import { EmployeeComponent } from './employee/employee.component'
import { EmpSearchComponent } from './emp-search/emp-search.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'search', component: EmpSearchComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}