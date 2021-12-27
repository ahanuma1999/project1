import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateUser } from 'src/app/model/User';

import { EmployeeService } from 'src/app/services/employee.service';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
  export class EmployeeListComponent implements OnInit {
    employeedata:any;
    sapId:any;
    constructor(private employeeService: EmployeeService,
      private router: Router) {
        
      }
    ngOnInit() {
     this.employeeService.getEmployeesList().subscribe(data => { 
       console.log(data); 
      this.employeedata = data;
    });
    }

    delete(item:any){
      this.employeeService.delete(item.sapId).subscribe(
        (res)=>{
          console.log(res);
          alert("employee deleted successfully")
        },
        (error) => console.log(error)
      )
    }

  

}
