import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-energy-storage-system',
  templateUrl: './energy-storage-system.component.html',
  styleUrl: './energy-storage-system.component.css'
})
export class EnergyStorageSystemComponent implements OnInit {
  currentIndex: number = 0;
  interval: any;
  currentSlide: number = 0;
  currentSlideIndex = 0;
  imagesPerSlide = 6;

  activeIndex = 0; // To keep track of the active slide index

  // This method is triggered when the slide changes
  onSlideChange(event: any) {
    const swiper = event.target.swiper; // Get the Swiper instance
    this.activeIndex = swiper.activeIndex; // Update the active index
  }

  @HostListener('window:resize',['$event'])
  onResize(event:any):void{
    this.setImagesPerSlide(window.innerWidth);
  }
  
  ngOnInit(): void {
    this.setImagesPerSlide(window.innerWidth);
  }

  setImagesPerSlide(width:number):void{
    this.imagesPerSlide=width<768?3:6;
  }

  nextSlide(): void {
    if (this.currentSlideIndex + this.imagesPerSlide >= this.productImages.length) {
      this.currentSlideIndex = 0; // Reset to first slide
    } else {
      this.currentSlideIndex += this.imagesPerSlide;
    }
  }

  prevSlide(): void {
    if (this.currentSlideIndex === 0) {
      this.currentSlideIndex = Math.floor((this.productImages.length - 1) / this.imagesPerSlide) * this.imagesPerSlide;
    } else {
      this.currentSlideIndex -= this.imagesPerSlide;
    }
  }

  productImages = [
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727968553/12v-80ah_m3feiq.png', alt: '12v 80Ah Battery' },
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727968582/96v96Ah2_qlqc05.jpg', alt: '96V 96Ah Battery 2' },
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727968598/4824-without-address-1280x1280_ury0tj.jpg', alt: '4824 Battery' },
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727968615/adirath-UPS-1280x970_ovlfpl.jpg', alt: 'Adirath UPS' },
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727968632/Bike-Batteries-copy_hehbqk.png', alt: 'Bike Battery' },
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727968648/Electric-Vehicle-Batteries-1280x1122_wh5egs.jpg', alt: 'Electric Vehicle Batteries' },
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727968662/ESS-Battery_b3tn3h.jpg', alt: 'ESS Battery' },
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727969277/product1_ven0mt.jpg', alt: 'Product 3' },
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727968699/IMG_20220616_172144-1280x958_xsbahb.jpg', alt: 'Battery IMG 20220616' }
];

carouselSlides = [
  {
    imageUrl: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965877/EV_d13fxu.jpg',
    heading: 'Electric Vehicle Battery',
    description: 'Driven by technological advances! Energy Storage for a Better World.'
  },
  {
    imageUrl: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965885/zero_maintanace_y1axmp.jpg',
    heading: 'Worry-Free Power Solutions',
    description: 'Enjoy hassle-free operation with our zero-maintenance lithium UPS systems, engineered for durability and long-lasting performance without the need for regular upkeep.'
  },
  {
    imageUrl: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965879/power_protection_p5boxa.jpg',
    heading: 'Shield Your Devices with Confidence',
    description: 'Protect your critical equipment from unexpected power interruptions and surges with our advanced lithium UPS solutions designed for maximum reliability.'
  },
  {
    imageUrl: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965880/rapid_charging_dm7rqn.webp',
    heading: 'Get Back to Power in No Time',
    description: 'Experience rapid charging capabilities with our lithium UPS systems, ensuring your devices are powered up and ready to go when you need them most.'
  },
  {
    imageUrl: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965881/remote_monitoring_xen2wu.jpg',
    heading: 'Stay Connected, Stay In Control',
    description: 'Monitor and manage your UPS performance from anywhere with our intelligent remote monitoring system, providing real-time updates and alerts for your peace of mind.'
  },
  {
    imageUrl: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965875/eco_friendly_gyrpug.jpg',
    heading: 'Sustainable Energy for a Greener Future',
    description: 'Our eco-friendly lithium UPS systems harness renewable energy, helping you reduce your carbon footprint while enjoying reliable power.'
  },
  {
    imageUrl: 'phttps://res.cloudinary.com/dbzme4gd3/image/upload/v1727965878/industrial_applications_ox4n51.jpg',
    heading: 'Industrial Applications',
    description: 'The next generation of electric vehicle batteries, with greater range and improved safety!'
  }
];
  
  batteryHighlights: { name: string, svg: string }[] = [
    {
      name: "Battery back-up system",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966060/Battery_aioakt.svg"
    },
    {
      name: "Durability",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966062/Durability_leiapn.svg"
    },
    {
      name: "Increased stability",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966070/Stability_myvb9w.svg"
    },
    {
      name: "Environmental-friendly",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966063/Eco_friendly_qbkzp8.svg" // You may need to provide this SVG file path if it exists
    },
    {
      name: "Economical",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966064/Economical_yyzl6q.svg"
    },
    {
      name: "Better life cycle",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966067/Lifecycle_liuqyf.svg"
    },
    {
      name: "Low maintenance",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966068/Low_maintenance_qisgb7.svg"
    },
    {
      name: "High safety level",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966066/High_Safety_pvqdrz.svg"
    }
  ];

  batteryApplicationAreas = [
    { name: "Telecom Energy Storage System", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966112/Telecom_fsxrh2.jpg" },
    { name: "EV Charging stations", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966104/ev_lqcc71.jpg" },
    { name: "Petrol Bunk", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966108/petrol-bunk_its8mt.jpg" },
    { name: "Wind Power Plants", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966113/windpower_focrgt.jpg" },
    { name: "Farm House", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966106/form_house_wdj45t.jpg" },
    { name: "Remote area Buildings", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966109/remote-area_mislgf.jpg" },
    { name: "Solar Street Lights", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966110/solar-strret-lighty_mcjrmd.jpg" }
  ];

 

  tableHeaders = [
    'Battery Type',
    'Cell Type',
    'Nominal Voltage (V)',
    'Voltage Range (V)',
    'Nominal Capacity (Ah)',
    'Nominal Energy (Wh)',
    'Available Energy (Wh)',
    'Continuous Charging Current (A)',
    'Continuous Discharging Current (A)',
    '30s Peak Discharging Current (A)',
    'T (Charging, °C)',
    'T (Discharging, °C)',
    'Humidity (%)',
    'Dimension (L/W/H, mm)',
    'Weight (kg)',
    'Cycle Life (times)',
    'Communication Protocol'
  ];

  batteryData = [
    ['12V', 'LFP', 'Cylindrical', 12.8, 14.6, 96, 1229, 1401.6, 40, 80, 240, '<70°C', '<70°C', '90%-95%', '310*300*100', 13.69, 2000, 'No'],
    ['24V', 'LFP', 'Cylindrical', 25.6, 29.2, 96, 2457, 2803.2, 40, 80, 240, '<70°C', '<70°C', '90%-95%', '310*300*185', 25.26, 2000, 'No'],
    ['36V', 'LFP', 'Cylindrical', 38.4, 43.8, 96, 3686, 4204.8, 40, 80, 240, '<70°C', '<70°C', '90%-95%', '575*420*100', 37.24, 2000, 'No'],
    ['48V', 'LFP', 'Cylindrical', 48, 54.75, 96, 4608, 5256, 40, 80, 240, '<70°C', '<70°C', '90%-95%', '575*300*185', 43.6, 2000, 'No']
  ];
}
