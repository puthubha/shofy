import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactApiData } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  constructor(private http: HttpClient) {}

  private contactApi = 'http://localhost:8000/contact';   //https://6633f1aff7d50bbd9b4b2919.mockapi.io/contact

  getContactData() {
    return this.http.get<contactApiData[]>(this.contactApi);
  }

  postContactData(value: contactApiData[]) {
    return this.http.post<contactApiData[]>(this.contactApi, value);
  }
}
