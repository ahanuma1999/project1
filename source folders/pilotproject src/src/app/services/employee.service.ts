import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from '../model/employee';
import { CreateUser } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  errorFlag: any;
  data: any;
  router: any;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getEmployee(sapid: number): Observable<CreateUser> {
    return this.http.get<CreateUser>('http://localhost:8088/api/e1/employees/update/{sapid}');
  }
  getEmployeesList(): Observable<any> {
    return this.http.get('http://localhost:8088/employee/employees');
  }

  
 

  // updateEmployee(newUser: CreateUser){
  //   return this.http.put('http://localhost:8088/employee/update',newUser).subscribe(res => {
  //     console.log(res)
  //     if(res){
  //       alert("Employee Updated successfully");
  //       this.router.navigate(['employeelist']);
  //       }
  //       else{
  //         this.data = res;
  //         alert("Employee saved successfully");
  //         this.router.navigate(['employeelist']);
  //       }
  //   })
  // }

  updateEmployee(newEmployee:Employee): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:8088/employee/update', JSON.stringify(newEmployee), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  delete(sapId:number){
    return this.http.delete("http://localhost:8088/employee/delete/"+sapId, this.httpOptions)
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



  getEmployeeById(sapid: number){
    return this.http.get('http://localhost:8088/api/e1/employees/${sapid}');
  }

  // delete(sapId:number):Observable<any>
  // {
  //   return this.http.delete("http://localhost:8088/employee/delete/"+sapId);
  // }

    
}
