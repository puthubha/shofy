import { Component, OnInit } from '@angular/core';
import { SignUpApidata } from 'src/app/components/interface';
import { LoginServiceService } from 'src/app/components/services/login-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  apiData: SignUpApidata[] = [];
  constructor(private loginService: LoginServiceService) {}

  ngOnInit(): void {
    // this.loginService.getSignUpData().subscribe((data) => {
    //   this.apiData = data;
    // });
  }
}
