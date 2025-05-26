import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginData } from '../interface';
import { SweetAlertService } from '../services/sweet-alert.service';

@Injectable({
  providedIn: 'root',
})
export class AuthUserGuard implements CanActivate {
  constructor(private Router: Router, private SweetAlert: SweetAlertService) {}
  loggedInData: LoginData;
  activate: boolean = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const data = localStorage.getItem('ShofyloginData');

    if (data != null) {
      this.loggedInData = JSON.parse(data);
      if (this.loggedInData.role == 'user') {
        this.activate = true;
      } else {
        this.SweetAlert.error('You Have Not Access of User Panel');
        this.Router.navigate(['/signin']);
      }
    } else {
      this.SweetAlert.error('Pleace Signin');
      this.Router.navigate(['/signin']);
    }

    return this.activate;
  }
}
