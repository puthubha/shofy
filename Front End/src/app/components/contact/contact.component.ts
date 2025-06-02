import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from '../services/contact-us.service';
import { SweetAlertService } from '../services/sweet-alert.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactUsForm: FormGroup;
  constructor(
    private contactUsService: ContactUsService,
    private SweetAlert: SweetAlertService
  ) {
    this.contactUsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    if (this.contactUsForm.valid) {
      this.contactUsService
        .postFaqQuestionData(this.contactUsForm.value)
        .subscribe({
          next: (responce: any) => {
            if (responce && responce.status) {
              this.SweetAlert.success(responce.message);
            }
          },
          error: (err) => {
            if (err) {
              this.SweetAlert.success(err.error.message);
            }
          },
        });
    } else {
      this.SweetAlert.error('please fill up details');
    }
  }
}
