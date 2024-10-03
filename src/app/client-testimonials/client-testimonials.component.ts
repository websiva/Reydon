import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client-testimonials',
  standalone:true,
  imports:[CommonModule,RouterModule,RouterOutlet],
  templateUrl: './client-testimonials.component.html',
  styleUrl: './client-testimonials.component.css'
})
export class ClientTestimonialsComponent {

  testimonials = [
    {
      name: "Mr Varadharajan",
      place: "Ranipettai",
      message: '"Reydon Resources helped me find my dream home. Their team was professional, attentive, and made the process seamless."',
      avatar: "https://ui-avatars.com/api/?name=Varadharajan&background=007bff&color=fff"
    },
    {
      name: "Mrs Sree Vidhya",
      place: "Chennai",
      message: '"Exceptional service and a dedicated team. I highly recommend Reydon Resources for all your real estate needs."',
      avatar: "https://ui-avatars.com/api/?name=Sree+Vidhya&background=28a745&color=fff"
    },
    {
      name: "Mr Michael Jhonson",
      place: "Trichy",
      message: '"Their property management services are top-notch. My investment properties are well-maintained and profitable."',
      avatar: "https://ui-avatars.com/api/?name=Michael+Jhonson&background=ffc107&color=fff"
    },
    {
      name: "Ms Ananya Sharma",
      place: "Coimbatore",
      message: '"I was impressed by the personalized attention and commitment to finding the perfect property for my needs."',
      avatar: "https://ui-avatars.com/api/?name=Ananya+Sharma&background=dc3545&color=fff"
    },
    {
      name: "Mr Rajesh Patel",
      place: "Madurai",
      message: '"The team at Reydon Resources went above and beyond to ensure a smooth buying experience. Highly recommended!"',
      avatar: "https://ui-avatars.com/api/?name=Rajesh+Patel&background=17a2b8&color=fff"
    },
    {
      name: "Mrs Elizabeth Thomas",
      place: "Salem",
      message: '"Their expertise and knowledge of the market were invaluable in helping us secure the best deal on our new home."',
      avatar: "https://ui-avatars.com/api/?name=Elizabeth+Thomas&background=6c757d&color=fff"
    },
    {
      name: "Mr Ahmed Khan",
      place: "Tirunelveli",
      message: '"Reydon Resources provided excellent service from start to finish. They made the whole process stress-free and enjoyable."',
      avatar: "https://ui-avatars.com/api/?name=Ahmed+Khan&background=343a40&color=fff"
    },
    {
      name: "Ms Priya Reddy",
      place: "Vellore",
      message: '"I am very happy with the rental property management services. My tenants are satisfied, and I have peace of mind."',
      avatar: "https://ui-avatars.com/api/?name=Priya+Reddy&background=007bff&color=fff"
    },
    {
      name: "Mr Deepak Mehta",
      place: "Erode",
      message: '"From the first consultation to the final transaction, Reydon Resources demonstrated professionalism and integrity."',
      avatar: "https://ui-avatars.com/api/?name=Deepak+Mehta&background=28a745&color=fff"
    },
    {
      name: "Mrs Kavita Sharma",
      place: "Thanjavur",
      message: '"Their attention to detail and customer-first approach made all the difference in finding our perfect home."',
      avatar: "https://ui-avatars.com/api/?name=Kavita+Sharma&background=dc3545&color=fff"
    }
  ];
  

  //visibleTestmonials=[];

  displayedTestmonialsCount=4;
  initialIndex=0;
  finalIndex=this.displayedTestmonialsCount;

get visibleTestmonials(){
  return this.testimonials.slice(this.initialIndex,this.finalIndex);
}

  toggleShowAll(){
    this.initialIndex=this.finalIndex;
    this.finalIndex=this.initialIndex+4;

    if(this.initialIndex>=this.testimonials.length){
      this.initialIndex=0;
      this.finalIndex=this.displayedTestmonialsCount;
    }
  }

}
