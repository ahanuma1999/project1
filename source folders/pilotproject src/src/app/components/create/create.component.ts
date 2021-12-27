import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { CreateService } from 'src/app/services/create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //formm: FormGroup;
  //formm: FormGroup;
  formm!: FormGroup;
  data:any
  added: boolean = false;
  notAdded:boolean = false;

  submitted : any;
  emailRegEx=/@(?!mphasis|fedex\.com)([A-Za-z0-9]+\.com)$/;

  newEmployee: Employee
  errorFlag: any;
  constructor(public auth: CreateService, private formBuilder: FormBuilder,private router: Router) {
    this.newEmployee = new Employee()
  }
  create(EmployeeForm:any){
    this.auth.create(this.newEmployee).subscribe(res => {
      console.log('employee created successfully!');
      this.added=true;
      alert("Employee saved Successfully :)")
      this.router.navigate(['/']);
  }, error =>{
    this.notAdded  = true
    alert("Duplicate Employee Details Occured :|")})
}
    
    
  



  ngOnInit() {
    this.formm = this.formBuilder.group({
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

  onSubmit() {
    console.log(this.formm)
  }

  


}
