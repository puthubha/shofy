import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpApidata } from '../interface';
import { SweetAlertService } from '../services/sweet-alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  localStorageData:SignUpApidata;
  constructor(private Router: Router, private SweetAlert: SweetAlertService) {}

  ngOnInit(): void {}

  open() {
    document.querySelector('#open').classList.add('offcanvas-opened');
  }

  close() {
    document.querySelector('#open').classList.remove('offcanvas-opened');
  }

  toggelButton() {
    const ulEle = document.querySelector('#abc');
    const getEle = document.querySelector('.tp-setting-list-open');

    if (!getEle && ulEle) {
      ulEle?.classList.add('tp-setting-list-open');
    } else {
      ulEle?.classList.remove('tp-setting-list-open');
    }
  }

  onMyProfile() {
    const data = localStorage.getItem('ShofyloginData');
    if (data) {
      this.localStorageData = JSON.parse(data);
    }

    if (this.localStorageData && this.localStorageData.role) {
      if (this.localStorageData.role === 'admin') {
        this.Router.navigateByUrl('/admin-panel');
      } else {
        this.Router.navigateByUrl('/user-panel');
      }
    } else {
      this.SweetAlert.error('Please Signin Your Self');
      this.Router.navigateByUrl('/signin');
    }
  }

  onLogOut() {
   this.SweetAlert.logOut();
  }
}
