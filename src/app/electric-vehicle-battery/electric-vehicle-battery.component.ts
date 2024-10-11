import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-electric-vehicle-battery',
  templateUrl: './electric-vehicle-battery.component.html',
  styleUrl: './electric-vehicle-battery.component.css'
})
export class ElectricVehicleBatteryComponent implements OnInit {
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
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727968553/12v-80ah_m3feiq.png', alt: '12v 80Ah Battery',name:'EV Battery' },
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1728560810/WhatsApp-Image-2021-07-14-at-3.05.50-PM-removebg-preview_vya9mp.png', alt: '96V 96Ah Battery 2',name:'EV Battery' },
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727968598/4824-without-address-1280x1280_ury0tj.jpg', alt: '4824 Battery',name:'EV Battery' },
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727968632/Bike-Batteries-copy_hehbqk.png', alt: 'Bike Battery',name:'EV Battery' },
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727968648/Electric-Vehicle-Batteries-1280x1122_wh5egs.jpg', alt: 'Electric Vehicle Batteries',name:'EV Battery' },
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1728560811/WhatsApp-Image-2021-07-14-at-3.05.50-PM-5-removebg-preview_z5vqjo.png', alt: 'ESS Battery',name:'EV Battery' }
];

carouselSlides = [
  {
    imageUrl: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1728564169/electric-car-charging-station-isolated-white-background_xbfza6.jpg',
    heading: 'Revolutionizing Transportation',
    description: 'Discover how electric vehicle batteries are transforming the automotive industry and driving the future of eco-friendly transportation.'
  },
  {
    imageUrl: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1728562349/board-3699939_izvhle.jpg',
    heading: 'Innovative Battery Designs',
    description: 'Learn about cutting-edge battery designs that improve efficiency, reduce weight, and enhance overall vehicle performance.'
  },
  {
    imageUrl: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1728562780/recycle-icon-compact-fluorescent-light-bulb-against-white-background_qi64hd.jpg',
    heading: 'Battery Recycling and Sustainability',
    description: 'Find out how battery recycling initiatives are reducing waste and contributing to a more sustainable energy ecosystem.'
  },
  {
    imageUrl: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1728562900/6089757_22735_xycxee.jpg',
    heading: 'Eco-Friendly and Sustainable',
    description: 'Manufactured with environmentally friendly materials, our EV batteries help reduce your carbon footprint while delivering high performance.'
  },
  {
    imageUrl: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1728563036/6201165_3189779_mgjbns.svg',
    heading: 'EV Charging Infrastructure',
    description: 'Understand the growing infrastructure for electric vehicle charging, making EV ownership more convenient than ever.'
  },
  {
    imageUrl: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1728563509/electric-vehicle-charger-plug-with-digital-display_q2mgt0.jpg',
    heading: 'Fast Charging Technology',
    description: 'Experience ultra-fast charging that reduces downtime, enabling you to recharge your EV battery in minutes instead of hours.'
  }
];
  
  batteryHighlights: { name: string, svg: string }[] = [
    {
      name: "Lightweight",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965767/lightweight_kwstm1.svg"
    },
    {
      name: "Reliability",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1728618557/Reliability_qhge2j.png"
    },
    {
      name: "Fast charging",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965765/faster-recharge_xmjhsn.svg"
    },
    {
      name: "Environmental-friendly",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966063/Eco_friendly_qbkzp8.svg" // You may need to provide this SVG file path if it exists
    },
    {
      name: "Ease of usage",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1728618557/Ease_of_usage_y2q3u7.png"
    },
    {
      name: "Tendency to hold charge longer",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1728618557/Tendency_to_hold_longer_pj6tt5.png"
    },
    {
      name: "Low maintenance",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966068/Low_maintenance_qisgb7.svg"
    },
    {
      name: "Cost-Effective",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727966066/High_Safety_pvqdrz.svg"
    }
  ];

  batteryApplicationAreas = [
    { name: "Electric Bike Batteries", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1728529031/electric-bike_rmm4j5.jpg" },
    { name: "Three wheelers EV Batteries", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1728528999/Three-Wheeler-EV-Batteries_ituyd2.jpg" },
    { name: "Electric Car Batteries", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1728528977/All-type-Electrical-vehicles-_E2_80_93-Four-wheelers_kukufv.jpg" },
    { name: "E Cycle Batteries", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1728528951/All-type-Electrical-vehicles_E2_80_93Cycles_zk2qim.jpg" },
    { name: "Electric Forklift Batteries", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1728528930/Fork-Lifts_lpmxvv.jpg" },
    { name: "Electrically operated vehicles", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1728528903/Electrically-operated-Movers_wituvx.jpg" }
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
    ['72V', 'NMC', 'Cylindrical', 74, 84, '31.2(As per requirements)', 2308.8, 2620.8, '20A', '50A','150A' , '25°C', '35°C', '90%', '210*155*255', 14.66, 1000, 'No'],
    ['60V', 'NMC', 'Cylindrical', 59.2, 67.2, '31.2(As per requirements)', 1847, 2097, '20A', '45A', '135A', '25°C', '35°C', '90%', '200*165*280', 11.75, 1000, 'No'],
    ['48V', 'NMC', 'Cylindrical', 48.1, 54.6, '31.2(As per requirements)', 1501, 1704, '20A', '40A', '120A', '25°C', '35°C', '90%', '150*165*255', 9.45, 1000, 'No']
  ];
}
