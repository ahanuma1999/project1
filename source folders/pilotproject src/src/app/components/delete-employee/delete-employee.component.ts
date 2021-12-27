import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  emp:any;

  constructor(private employeeService:EmployeeService,
    private router:Router) { }
  
    ngOnInit(): void {
      this.employeeService.getEmployeesList().subscribe(data => { 
        console.log(data); 
       this.emp = data;
     });
    }
   
    delete(item:any){
      this.employeeService.delete(item.sapId).subscribe(
        (res)=>{
          console.log("employee deleted successfully");
          alert("employee deleted successfully");
        },
        (error) => console.log(error)
      )}
}