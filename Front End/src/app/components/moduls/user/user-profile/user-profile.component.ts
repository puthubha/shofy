import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  name: string = '';
  constructor(private Router: Router) {}

  ngOnInit(): void {
    const localData = localStorage.getItem('ShofyloginData');
    const data = JSON.parse(localData);
    this.name = data[0].name;
  }

  onLogOut() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You Want To Logout!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Do it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Logout Successfully',
        });
        this.Router.navigateByUrl('/signin');
        localStorage.removeItem('ShofyloginData');
      }
    });
  }
}
