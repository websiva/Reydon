import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {
  contactForm:FormGroup;

  constructor(private route:ActivatedRoute,private formBuilder:FormBuilder){
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

    const email=localStorage.getItem('email');
      
    if(email){
      this.contactForm.controls['email'].setValue(email);
    }
  }

  ngSubmit(){
    console.log(this.contactForm.value);
    localStorage.removeItem('email');
    this.contactForm.reset();
  }

}
