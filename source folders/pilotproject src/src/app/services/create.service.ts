import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CreateService {
  added: boolean = false;
  error:boolean = false;
  data:any

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(public http:HttpClient, private router: Router) {  }
  // create(newEmployee: Employee) {
  //   return this.http.post('http://localhost:8088/employee/add', newEmployee).subscribe(res =>{
  //     this.data = res;
  //     this.added = true;
  //   },error => {
  //     this.error = true
  //   })
    // .subscribe(res => {
    //     console.log(newEmployee)
    //     this.data = newEmployee
    //     this.added = true;
    //     alert("Employee Saved successfully");
    //    this.router.navigate(['/create']);
       
    //   }, 
      
    //   error => {
    //     alert('duplicate employee details occured !')
    //     this.error = true;
    // });  
    
    create(newEmployee:Employee): Observable<Employee> {
      return this.http.post<Employee>('http://localhost:8088/employee/add', JSON.stringify(newEmployee), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }
    
    errorHandler(error:any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
   }
  }
  

