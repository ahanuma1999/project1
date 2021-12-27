import { Injectable } from '@angular/core';
import { Search } from './search';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeNgModules } from '@angular/compiler';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Employee } from '../model/employee';
import { CreateUser } from '../model/User';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getEmployeesList(): Observable<any> {
    return this.http.get('http://localhost:8088/api/e1/all');
  }
  find(type : number , id : number): Observable<Search> {
    return this.http.get<Search>('http://localhost:8088/employee/search/'+ type + '/' + id)
     .pipe(
       catchError(this.errorHandler)
    )
  }
  updateEmployee(newUser:CreateUser): Observable<CreateUser> {
    return this.http.put<CreateUser>('http://localhost:8088/employee/update', JSON.stringify(newUser), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error : any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
  
 delete(sapId:number):Observable<any>
  {
    return this.http.delete("http://localhost:8088/employee/delete/"+sapId);
  }

  
}

