import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/model/employee';
import { Search } from '../search';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  type: any;
  id : any;
  newEmployee: Employee = new Employee;
  employees : Search[] = [];
  employeedata:any;
  form!: FormGroup;
  formm!: FormGroup;
  posts: Search[] = [];
  employeelist = [];
  notFound: boolean = false
  submitted = false;
  sapId:any;
  added: boolean =false;
  alsoAdded: boolean =false;
  notAdded: boolean =false;
  EmployeeToUpdate = {
    sapId:" ",
    ldapId: " ",
    firstName: " ",
    middleName:" ",
    lastName: " ",
    offShorePM: " ",
    offShoreDM: " ",
    onSitePM: " ",
    onSiteDM: " ",
    fedexMgr: " ",
    clientMD: " ",
    fedexVP: " ",
    fedexSVP: " ",
    mphasisEmail: " ",
    fedexEmail: " ",
    personalEmail: " ",
    contactNumber:" ",
    contractNumber:" ",
    projectName: " ",
    projectID: " ",

  }
  createUserForm: any;

  constructor(public searchService: SearchService,private router: Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      search :  new FormControl('',[Validators.required,Validators.pattern('^[0-9]*$')]),
      searchDropdown : new FormControl()
    })
  }
  get f(){
    return this.form.controls;
  }
  search(){
    console.log('search value', this.form.value);
    this.searchService.find(this.form.value.searchDropdown, this.form.value.search)
      .subscribe(response => {
        //this.employees = [];
        this.employeedata=response;
        console.log('Success', response);
        console.log('Sucess list', this.employeelist );
        this.submitted = true;
        this.notFound = false;
        this.router.navigate(['/']);
    }, (error) => {
        //console.log('Error', error);
        //alert("Employee not found");
        alert("Employee not Found")
        this.notFound = true;
        this.submitted= false;
    });
  }

  edit(employee: any){
    this.EmployeeToUpdate = employee;
  }

  updateEmployee(newUser:any){
    this.searchService.updateEmployee(this.employeedata).subscribe(res =>{
      //console.log('employee created successfully!');
      if(this.sapId = this.employeedata.sapId){
        this.added = true;
        // console.log('employee saved successfully!');
        alert("Employee Saved Successfully!");
       
      }
      else{
        this.alsoAdded = true;
        // console.log('employee saved successfully!');
        alert("Employee Saved Successfully!");
      }
    }, error =>{
      this.notAdded  = true
      alert("Duplicate Details Found! Please Check Properly :|");}
      )
    }
   
  
  delete(item:any){
    this.searchService.delete(this.employeedata.sapId).subscribe(
      res=>{
        console.log("res");
      },
      error => {
        console.log("employee deleted successfully")
        alert("employee deleted successfully")
        this.employeedata.reset();
      }
    )}

    

  
}
