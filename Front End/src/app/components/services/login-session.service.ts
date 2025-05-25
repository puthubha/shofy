import { Injectable } from '@angular/core';
import { SignUpdata } from '../interface';
import { Router } from '@angular/router';
import { SweetAlertService } from './sweet-alert.service';

@Injectable({
  providedIn: 'root',
})
export class LoginSessionService {
  localData: SignUpdata[] = [];
  localToken: SignUpdata[] = [];

  constructor(private Router: Router, private SweetAlert: SweetAlertService) {}

  loginSession() {
    const localData: any = localStorage.getItem('ShofyloginData');
    this.localData = JSON.parse(localData);

    const localToken: any = localStorage.getItem('Token');
    this.localToken = JSON.parse(localToken);

    if (this.localToken && this.localData) {
      this.startTime();
    }
  }

  startTime() {
    setTimeout(() => {
      this.SweetAlert.error('Your Signin Session Was Expired');
      this.Router.navigateByUrl('/signin');
      localStorage.removeItem('ShofyloginData');
    }, 50000);
  }
}
