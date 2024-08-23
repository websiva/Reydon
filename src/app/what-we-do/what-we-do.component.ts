import { Component } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.css'
})
export class WhatWeDoComponent {

  whatWeDo = [
    {
      Title: 'Residential Sales and Rentals',
      Description: 'Helping you buy, sell, or rent homes that match your lifestyle and budget.',
      Icon: 'fa fa-home',
      routerLinkValue:'/properties'
    },
    {
      Title: 'Commercial Real Estate',
      Description: 'Assisting businesses in finding the perfect location to thrive.',
      Icon: 'fa-solid fa-building-circle-check',
      routerLinkValue:'/properties'
    },
    {
      Title: 'Property Management:',
      Description: 'Top-tier property management to maximize your investments profitability and maintenance.',
      Icon: 'fa-solid fa-hand-holding-hand',
      routerLinkValue:'/services'
    },
    {
      Title: 'Trading and Services',
      Description: 'Offering diverse trading and services to enhance quality and support real estate and property management.',
      Icon: 'fa-solid fa-chart-line',
      routerLinkValue:'/services'
    },
    {
      Title: 'Investment Opportunities',
      Description: 'Guiding investors to make informed decisions and maximize their returns.',
      Icon: 'fa-solid fa-sack-dollar',
      routerLinkValue:'/services'
    },
  ]

}
