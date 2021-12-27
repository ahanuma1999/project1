import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { CreateUser } from 'src/app/model/User';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  sapId:any;
  newEmployee: Employee;
  formm!: FormGroup;
  item:Employee = new Employee()
  
  submitted = false;
  emailRegEx=/@(?!mphasis|fedex\.com)([A-Za-z0-9]+\.com)$/;
  added: boolean =false;
  alsoAdded: boolean =false;
  notAdded: boolean =false;

  constructor(private employeeservices:EmployeeService,private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) { 
      this.newEmployee = new Employee();
    }

  ngOnInit(): void {this.formm = this.formBuilder.group({
    sapId:['',[Validators.required]],
    ldapId:['',[Validators.required]],
    firstName: ['', Validators.required],
    middleName:['',Validators.required],
    lastName: ['', Validators.required],
    offshorePm:['', Validators.required],
    offshoreDm: ['', Validators.required],
    onsitePm: ['', Validators.required],
    onsiteDm: ['', Validators.required],
    fedexMgr: ['', Validators.required],
    clientMd: ['', Validators.required],
    fedexVp: ['', Validators.required],
    fedexSvp: ['', Validators.required],
    mphasisEmail:['',[Validators.required,Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@mphasis.com$')]],
    fedexEmail:['',[Validators.required,Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@fedex.com$')]],
    personalEmail:['',[Validators.required,Validators.pattern(this.emailRegEx)]],
    contactNumber:['',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    contractNumber:['',Validators.required],
    projectName:['',Validators.required],
    projectId:['',Validators.required]
});
}
get f() { return this.formm.controls; }


  onSubmit(item:Employee){
    this.employeeservices.updateEmployee(this.newEmployee).subscribe(res =>{
      console.log('employee created successfully!');
      if(this.sapId = item.sapId){
        this.added = true;
      }
      else{
        this.alsoAdded = true;
      }
    }, error =>{
      this.notAdded  = true})
    }

    
    
}
