import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/components/services/sweet-alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  name: string = '';
  constructor(private Router: Router,private SweetAlert:SweetAlertService) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('ShofyloginData');
    const data = JSON.parse(localData);
    this.name = data[0].name;
  }

  onLogOut() {
   this.SweetAlert.logOut();
  }
}
