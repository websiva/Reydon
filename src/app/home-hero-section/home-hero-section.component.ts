import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-hero-section',
  templateUrl: './home-hero-section.component.html',
  styleUrl: './home-hero-section.component.css'
})
export class HomeHeroSectionComponent implements OnInit {

  email:string='';
  constructor(private router:Router){}

  bannerImages:string[]=[
    "home-banner/home-her-banner-1.jpg",
    "home-banner/home-her-banner-2.jpg",
    "home-banner/home-her-banner-3.jpg",
    "home-banner/home-her-banner-4.jpg",
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

  images:string[]=[
    "slide1.jpg",
    "slide-4.jpg",
    "slide3.jpg",
    "slide2.jpg"
  ]

  index:number=0;
  currentBackground:string=this.bannerImages[this.index];
  isFadingIn:boolean=true;

  ngOnInit(): void {
    //this.changeContent();
    this.changeBannerImages();
  }

  /*changeContent():void{
    setInterval(()=>{
      this.index=(this.index+1)%this.titles.length;
      this.title=this.titles[this.index];
      this.paragraphText=this.paragraphs[this.index];
      this.imageAddress=this.images[this.index];
    },6000)
  }*/

  changeBannerImages():void{
    setInterval(()=>{
      this.isFadingIn=false;
      setTimeout(()=>{
        this.index=(this.index+1)%this.bannerImages.length;
        this.currentBackground=this.bannerImages[this.index];
        this.isFadingIn=true;
      },2000);
    },10000);
  }

  SendEmail(){
    localStorage.setItem('email',this.email);
    this.router.navigate(['/contact']);
  }
}
