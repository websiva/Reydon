import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { PostFormDataService } from '../angular-service/post-form-data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  name:string="";
  email:string="";
  phone:string="";
  location:string="";
  message:string="";
  subject:string="";
  contactForm:FormGroup;

  constructor(private route:ActivatedRoute,private formBuilder:FormBuilder,private googleSheetservice:PostFormDataService){
    this.contactForm=this.formBuilder.group({
      name:["",[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required]],
      location:['',[Validators.required]],
      message:['',[Validators.required]],
      subject:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  ngSubmit(){

    const sheetData={
      Name:this.name,
      Email:this.email,
      PhoneNumber:this.phone,
      Location:this.location,
      Subject:this.subject,
      Message:this.message
    };
    this.googleSheetservice.StoreContactUsPageFormData(sheetData).subscribe((response:any)=>{
      if(response&&response.success!==false){
        alert("Data submitted successfully");
      }
    },error=>{
      alert("Data submission failure, Please try again!")
    })

    this.contactForm.reset();
  }

}
