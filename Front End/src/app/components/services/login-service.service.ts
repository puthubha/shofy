import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData, SignUpdata } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(private http: HttpClient) {}

  passwordEye() {
    const passwordInput: any = document.getElementById(
      'tp_password'
    ) as HTMLInputElement;
    const openEyeIcon: any = document.getElementById('close-eye');
    const closeEyeIcon: any = document.getElementById('open-eye');

    openEyeIcon.addEventListener('click', function () {
      passwordInput.type = 'text';
      openEyeIcon.style.display = 'none';
      closeEyeIcon.style.display = 'block';
    });
    closeEyeIcon.addEventListener('click', function () {
      passwordInput.type = 'password';
      openEyeIcon.style.display = 'block';
      closeEyeIcon.style.display = 'none';
    });
  }

  private api = 'http://localhost:8080';

  // getSignUpData() {
  //   return this.http.get<SignUpApidata[]>(this.loginApi);
  // }

  postLoginData(value: LoginData) {
    const body = {
      emailId: value.email,
      password: value.password,
    };
    return this.http.post(`${this.api}/login`, body);
  }

  postSignUpData(value: SignUpdata) {
    const body = {
      name: value.name,
      emailId: value.email,
      password: value.password,
    };
    return this.http.post(`${this.api}/signup`, body);
  }

  getAllUserData(){
    return this.http.get(`${this.api}/getAllUsers`)
  }
}
