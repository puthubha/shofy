import { Component, OnInit } from '@angular/core';
import { userListData } from 'src/app/components/interface';
import { LoginServiceService } from 'src/app/components/services/login-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  apiData: userListData[] = [];
  constructor(private loginService: LoginServiceService) {}

  ngOnInit(): void {
    this.loginService.getAllUserData().subscribe((res: any) => {
      if (res && res.data && res.data.length > 0) {
        this.apiData = res.data;
      }
    });
  }
}
