import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {path: 'departments', component: DepartmentListComponent},
  {path: 'departments/:id', component: DepartmentDetailComponent,
    children: [
      {path: 'contact',component: DepartmentContactComponent},
      {path: 'overview',component: DepartmentOverviewComponent}
    ]
},
  {path: 'employees', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmentListComponent,EmployeeListComponent,DepartmentDetailComponent,DepartmentOverviewComponent,DepartmentContactComponent];
