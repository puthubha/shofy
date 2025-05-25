import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';
import { SignUpApidata } from '../../interface';
import { Router } from '@angular/router';
import { SweetAlertService } from '../../services/sweet-alert.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;
  apiGetData: SignUpApidata[] = [];

  constructor(
    private LoginServiceService: LoginServiceService,
    private Router: Router,
    private SweetAlert: SweetAlertService
  ) {
    this.signinForm = new FormGroup({
      role: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.LoginServiceService.passwordEye();

    // this.LoginServiceService.getSignUpData().subscribe((data) => {
    //   this.apiGetData = data;
    // });
  }

  onSubmit() {
    if (this.signinForm.valid) {
        const filteredData = this.apiGetData.filter(
        (data) =>
          data.email == this.signinForm.value.email &&
          data.role == this.signinForm.value.role &&
          data.password == this.signinForm.value.password
      );

      if (filteredData.length >= 1) {
        this.SweetAlert.success('Signed in Successfully');
        localStorage.setItem('ShofyloginData', JSON.stringify(filteredData));
        localStorage.setItem('Token', JSON.stringify(12345));
        if (this.signinForm.value.role === 'user') {
          this.Router.navigateByUrl('/home');
        } else {
          this.Router.navigateByUrl('/admin-panel');
        }
      } else {
        this.SweetAlert.error('Please Check Email Or Password');
      }
    } else {
      this.SweetAlert.error('Please Fillup Information');
    }
  }
}
