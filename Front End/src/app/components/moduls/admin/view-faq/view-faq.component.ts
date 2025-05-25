import { Component, OnInit } from '@angular/core';
import { contactApiData } from 'src/app/components/interface';
import { ContactUsService } from 'src/app/components/services/contact-us.service';

@Component({
  selector: 'app-view-faq',
  templateUrl: './view-faq.component.html',
  styleUrls: ['./view-faq.component.css'],
})
export class ViewFaqComponent implements OnInit {
  contactApiData: contactApiData[] = [];

  constructor(private contactUsService: ContactUsService) {}

  ngOnInit(): void {
    this.contactUsService.getContactData().subscribe((data) => {
      this.contactApiData = data;
    });
  }
}
