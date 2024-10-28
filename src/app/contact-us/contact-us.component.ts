import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { PostFormDataService } from '../angular-service/post-form-data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  name: string = "";
  email: string = "";
  phone: string = "";
  location: string = "";
  message: string = "";
  subject: string = "";
  contactForm: FormGroup;
  safeMapLink!: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private googleSheetservice: PostFormDataService,
     private sanitizer: DomSanitizer) {
    this.contactForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      location: ['', [Validators.required]],
      message: ['', [Validators.required]],
      subject: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.bypasslinkSafety();
  }

  ngSubmit() {

    const sheetData = {
      Date: new Date().toLocaleDateString('en-GB'),
      Name: this.name,
      Email: this.email,
      PhoneNumber: this.phone,
      Location: this.location,
      Subject: this.subject,
      Message: this.message
    };
    this.googleSheetservice.StoreContactUsPageFormData(sheetData).subscribe((response: any) => {
      if (response && response.success !== false) {
        alert("Data submitted successfully");
      }
    }, error => {
      alert("Data submission failure, Please try again!")
    })

    this.contactForm.reset();
  }

  bypasslinkSafety() {
    //converting normal google map location url to safe url
    const mapLink = `https://www.google.com/maps/embed/v1/place?key=AIzaSyB-05IYBDNd81n3uNbcfrCriwnq-ZWJ8ag&q=10.747171,79.12376`;
    this.safeMapLink = this.sanitizer.bypassSecurityTrustResourceUrl(mapLink);
  }

}
