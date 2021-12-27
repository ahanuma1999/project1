import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  
    { path: 'create', component: CreateComponent },
    { path: 'employeelist', component: EmployeeListComponent },
    { path: 'update', component:UpdateComponent},
    {path:'navbar', component:NavbarComponent},
    {path:'delete', component:DeleteEmployeeComponent},
    {path:'search', component:SearchComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
