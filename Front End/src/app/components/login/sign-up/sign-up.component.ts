import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';
import { SignUpApidata } from '../../interface';
import { Router } from '@angular/router';
import { SweetAlertService } from '../../services/sweet-alert.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  apiGetData: SignUpApidata[] = [];

  constructor(
    private LoginServiceService: LoginServiceService,
    private Router: Router,
    private SweetAlert: SweetAlertService
  ) {
    this.signUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      checkbox: new FormControl(null, Validators.requiredTrue),
    });
  }

  ngOnInit(): void {
    this.LoginServiceService.passwordEye();

    // this.LoginServiceService.getSignUpData().subscribe((data) => {
    //   this.apiGetData = data;
    // });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const filteredData = this.apiGetData.filter(
        (data) =>
          data.email == this.signUpForm.value.email &&
          data.role == this.signUpForm.value.role
      );

      if (filteredData.length <= 0) {
        this.LoginServiceService.postSignUpData(this.signUpForm.value).subscribe((result:any)=>{
          if(result){
            if(result.status){
              this.SweetAlert.success(result.message);
              this.Router.navigateByUrl('/signin');
            }else{
              this.SweetAlert.error(result.message);      
            }
          }
        });
      } 
      // else {
      //   this.SweetAlert.error('This Email Alredy Exist');
      // }
    } else {
      this.SweetAlert.error('Please Fillup Form');
    }
  }
}
