import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SignUpApidata } from '../interface';
import { SweetAlertService } from '../services/sweet-alert.service';
import { filter } from 'rxjs';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  localStorageData: SignUpApidata;
  isAddClassOnThisRoute: boolean = false;
  isAddStickyClass: boolean = false;
  isAddTpStyleClass: boolean = false;

  constructor(
    private router: Router,
    private SweetAlert: SweetAlertService,
    private loginService: LoginServiceService
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const headerSticky = document.getElementById('header-sticky');
    if (this.isAddClassOnThisRoute) {
      headerSticky.classList.add('header-sticky');
      if (scrollY > 0) {
        headerSticky.style.zIndex = '1';
        headerSticky.style.setProperty('top', '0px');
      } else {
        headerSticky.style.zIndex = '-1';
        headerSticky.style.setProperty('top', '35px', 'important');
      }
    } else {
      if (headerSticky) {
        headerSticky.style.removeProperty('z-index');
        headerSticky.style.removeProperty('top');
      }
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const targetedElement = event.target as HTMLElement;
    if (
      targetedElement.id !== 'tp-header-setting-toggle' &&
      targetedElement.id !== 'settingMenu'
    ) {
      const ulEle = document.getElementById('settingMenu');
      if (ulEle && ulEle.classList.contains('tp-setting-list-open')) {
        ulEle.classList.remove('tp-setting-list-open');
      }
    }
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (
          event.urlAfterRedirects === '/product-categoties' ||
          event.urlAfterRedirects === '/all-products' ||
          event.urlAfterRedirects === '/contact' ||
          event.urlAfterRedirects === '/signin' ||
          event.urlAfterRedirects.includes('/add-product') ||
          event.urlAfterRedirects.includes('/profile') ||
          event.urlAfterRedirects.includes('/view-faq') ||
          event.urlAfterRedirects.includes('/user-list') ||
          event.urlAfterRedirects.includes('/add-product-categorie')
        ) {
          this.isAddClassOnThisRoute = true;
          document
            .getElementById('header-sticky')
            .classList.add('header-sticky');

          document
            .getElementById('header-sticky')
            ?.style.setProperty('top', '35px', 'important');
        } else {
          this.isAddClassOnThisRoute = false;
        }
      });
    this.getDataFromLocalStorage();
    this.loginService.IsUserLogedIn.subscribe((res) => {
      if (res) {
        this.getDataFromLocalStorage();
      }
    });
  }

  open() {
    document.querySelector('#open').classList.add('offcanvas-opened');
  }

  close() {
    document.querySelector('#open').classList.remove('offcanvas-opened');
  }

  getDataFromLocalStorage() {
    const data = localStorage.getItem('ShofyloginData');
    if (data) {
      this.localStorageData = JSON.parse(data);
    }
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
    if (this.localStorageData && this.localStorageData.role) {
      if (this.localStorageData.role === 'admin') {
        this.router.navigateByUrl('/admin-panel');
      } else {
        this.router.navigateByUrl('/user-panel');
      }
    } else {
      this.SweetAlert.error('Please Signin Your Self');
      this.router.navigateByUrl('/signin');
    }
  }

  onLogOut() {
    this.SweetAlert.logOut();
    this.localStorageData = <SignUpApidata>{};
  }
}
