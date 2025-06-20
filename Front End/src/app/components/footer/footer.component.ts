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

  toggelButton(id: string) {
    const ulEle = document.getElementById(id);
    if (ulEle) {
      const bodyoverlay = document.getElementsByClassName('body-overlay');
      const isOpen = ulEle.classList.toggle('offcanvas-opened');
      if (bodyoverlay) {
        bodyoverlay[0].classList.toggle('opened');
      }

      // Prevent background scroll when open
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }
}
