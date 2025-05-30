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
  localStorageData: SignUpApidata;
  constructor(private Router: Router, private SweetAlert: SweetAlertService) {}

  ngOnInit(): void {}

  open() {
    document.querySelector('#open').classList.add('offcanvas-opened');
  }

  close() {
    document.querySelector('#open').classList.remove('offcanvas-opened');
  }

  toggelButton(id: string) {
    const ulEle = document.getElementById(id);
    if (ulEle) {
      if (id == 'offcanvasArea') {
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
      } else {
        ulEle.classList.toggle('tp-setting-list-open');
      }
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
