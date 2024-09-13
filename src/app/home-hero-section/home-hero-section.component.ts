import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-hero-section',
  templateUrl: './home-hero-section.component.html',
  styleUrl: './home-hero-section.component.css'
})
export class HomeHeroSectionComponent implements OnInit {

  email:string='';
  interval: any;
  currentIndex: number = 0;
  constructor(private router:Router){}

  bannerImages:string[]=[
    "https://res.cloudinary.com/dbzme4gd3/image/upload/v1726208002/home-her-banner-4_hdommi.jpg",
    "https://res.cloudinary.com/dbzme4gd3/image/upload/v1726208001/home-her-banner-3_zobnty.jpg",
    "https://res.cloudinary.com/dbzme4gd3/image/upload/v1726208001/home-her-banner-2_r2ankx.jpg",
    "https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207999/home-her-banner-1_fi4mjr.jpg"
  ]

  titles:string[]=[
    "Welcome to Reydon Resources Private Limited",
    "Expert Guidance, Every Step",
    "Our Mission"
  ]

  paragraphs:string[]=[
    "Reliable expertise for all your real estate and property management needs.",
    "Where your real estate dreams become reality",
    "Provide exceptional real estate services that exceed expectations"
  ]



  ngOnInit(): void {
    this.startSlider();
  }


    startSlider() {
      this.interval = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.bannerImages.length;
      }, 5000);
    }

 
}
