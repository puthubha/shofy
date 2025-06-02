import { Component, OnInit } from '@angular/core';
import { faqQuestionApiData } from 'src/app/components/interface';
import { ContactUsService } from 'src/app/components/services/contact-us.service';
import { SweetAlertService } from 'src/app/components/services/sweet-alert.service';

@Component({
  selector: 'app-view-faq',
  templateUrl: './view-faq.component.html',
  styleUrls: ['./view-faq.component.css'],
})
export class ViewFaqComponent implements OnInit {
  contactApiData: faqQuestionApiData[] = [];

  constructor(
    private contactUsService: ContactUsService,
    private sweetAlert: SweetAlertService
  ) {}

  ngOnInit(): void {
    this.contactUsService.getFaqQuestionData().subscribe({
      next: (responce: any) => {
        if (responce && responce.status) {
          this.contactApiData = responce.data;
          this.sweetAlert.success(responce.message);
        }
      },
      error: (err: any) => {
        if (err) {
          this.sweetAlert.error(err.error.message);
        }
      },
    });
  }
}
