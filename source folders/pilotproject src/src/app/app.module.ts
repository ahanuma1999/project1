import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { UpdateComponent } from './components/update/update.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DeleteEmployeeComponent } from './components/delete-employee/delete-employee.component';
import { SearchComponent } from './components/search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EmployeeListComponent,
    UpdateComponent,
    NavbarComponent,
    DeleteEmployeeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
