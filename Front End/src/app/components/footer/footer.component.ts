import { Component, OnInit } from '@angular/core';
import { SignUpApidata } from '../interface';
import { Router } from '@angular/router';
import { SweetAlertService } from '../services/sweet-alert.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  localStorageData: SignUpApidata[] = [];
  constructor(private Router: Router, private SweetAlert: SweetAlertService) {}

  ngOnInit(): void {}

  onMyProfile() {
    const data = localStorage.getItem('ShofyloginData');

    if (data) {
      this.localStorageData = JSON.parse(data);
    } else {
      this.localStorageData = [];
    }

    if (this.localStorageData.length >= 1) {
      if (this.localStorageData[0].role === 'admin') {
        this.Router.navigateByUrl('/admin-panel');
      } else {
        this.Router.navigateByUrl('/user-panel');
      }
    } else {
      this.SweetAlert.error('Please Signin Your Self');
      this.Router.navigateByUrl('/signin');
    }
  }
}
