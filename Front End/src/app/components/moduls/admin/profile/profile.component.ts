import { Component, OnInit } from '@angular/core';
import { SignUpApidata } from 'src/app/components/interface';
import { SweetAlertService } from 'src/app/components/services/sweet-alert.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  localStorageData: SignUpApidata;
  constructor(private SweetAlert: SweetAlertService) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('ShofyloginData');
    this.localStorageData = JSON.parse(localData);
  }

  onLogOut() {
    this.SweetAlert.logOut();
  }
}
