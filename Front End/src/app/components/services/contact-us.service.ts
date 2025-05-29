import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { faqQuestionApiData } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class ContactUsService {
  constructor(private http: HttpClient) {}

  private contactApi = 'http://localhost:8080/faqQuestions';

  getFaqQuestionData() {
    return this.http.get<faqQuestionApiData[]>(this.contactApi);
  }

  postFaqQuestionData(value: faqQuestionApiData[]) {
    return this.http.post<faqQuestionApiData[]>(this.contactApi, value);
  }
}
