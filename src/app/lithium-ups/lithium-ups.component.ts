import { CommonModule } from '@angular/common';
import { Component, OnInit,HostListener,CUSTOM_ELEMENTS_SCHEMA,ChangeDetectionStrategy,signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lithium-ups',
  standalone:true,
  imports:[CommonModule,RouterModule,RouterOutlet],
  templateUrl: './lithium-ups.component.html',
  styleUrl: './lithium-ups.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LithiumUPSComponent implements OnInit {
  currentSlideIndex = 0;
  expandedIndex = 0;
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
    // Old images
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965810/product2_gflxii.jpg', alt: '2kva' },
    { src: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727969111/1KVA_ezm3ap.png', alt: '1kva' },
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
    imageUrl: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965875/eco_friendly_gyrpug.jpg',
    heading: 'Sustainable Energy for a Greener Future',
    description: 'Our eco-friendly lithium UPS systems harness renewable energy, helping you reduce your carbon footprint while enjoying reliable power.'
  },
  {
    imageUrl: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965878/industrial_applications_ox4n51.jpg',
    heading: 'Industrial Applications',
    description: 'The next generation of electric vehicle batteries, with greater range and improved safety!'
  }
];

  lithiumBatteryFeatures = [
    { feature: "DSP based Pure Sine Wave UPS", img: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965760/DSP_y5jpy5.png" },
    { feature: "20 KHz Noiseless Operation", img: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965710/20hz_gdtsse.png" },
    { feature: "More Efficient & Reduce Human Error", img: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965719/smd_design_crxk6u.png" }, 
    { feature: "Resettable Circuit Breaker", img: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965712/circuit_breaker_enlna8.png" },
    { feature: "LCD with Audible Alarm", img: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965711/audible_alaram_icrceo.png" },
    { feature: "Build-in Thermal Sensor", img: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965721/thermal_sensor_wmxdmm.png" },
    { feature: "For Computer & Home Appliances", img: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965714/computer_home_xwqcla.png" },
    { feature: "No Protruding Wires", img: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965717/protruding_wires_gpwhyl.png" },
    { feature: "No Fumes", img: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965717/no_fumes_xzd2wx.png" },
    { feature: "All-in-one Integrated Design", img: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965717/no_fumes_xzd2wx.png" },
    { feature: "Battery Life up to 10 Years", img: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965712/battery_life_u6iijx.png" },
    { feature: "Zero Maintenance", img: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965716/maintanance_zakjlw.png" },
    { feature: "Rapid Charging", img: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965718/rapid_charging_ttfgpt.png" },
    { feature: "Superior Performance", img: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965720/superior_performence_aosgao.png" },
    { feature: "Space-saving Compact Design", img: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965713/compact_design_lyqsfa.png" }
  ];

  batteryHighlights: { name: string, svg: string }[] = [
    {
      name: "Quick installation",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965769/quick-installation_epgpyy.svg"
    },
    {
      name: "Lightweight",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965767/lightweight_kwstm1.svg"
    },
    {
      name: "Faster rechargeable times",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965765/faster-recharge_xmjhsn.svg"
    },
    {
      name: "Longer life span",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965767/long_life_gvezhw.svg"
    },
    {
      name: "Highest power availability",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965766/highest_power_availability_jxdue7.svg"
    },
    {
      name: "Compactness",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965765/compactness_qezi5o.svg"
    },
    {
      name: "Surge and Noise Protection",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965768/noise_protection_wqjgtw.svg"
    },
    {
      name: "Zero Transfer Time to Battery",
      svg: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965770/zero_transfer_time_to_battery_v0jfxx.svg"
    }
  ];

  batteryApplicationAreas = [
    { name: "All Commercial Buildings", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965665/commercial-building_rbkrvk.jpg" },
    { name: "Offices", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965665/offices_vaj0gp.jpg" },
    { name: "Schools & Colleges", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965666/school_zgwcog.jpg" },
    { name: "Industrial Workstations", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965664/industrial-workstation_dv6wcl.jpg" },
    { name: "Public Buildings", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965666/public_building_matckp.jpg" },
    { name: "Temples", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965666/temple_gmeb8j.jpg" },
    { name: "CCTV & Systems working areas", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965664/cctv_ns2gis.jpg" },
    { name: "Emergency lighting areas", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965664/emergency-exit_qanjbl.jpg" },
    { name: "PLC & SCADA systems", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965665/PLC_SCADA_systems_rmxjfd.jpg" },
    { name: "Bank", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965664/bank_yrcyqq.jpg" },
    { name: "ATM", image: "https://res.cloudinary.com/dbzme4gd3/image/upload/v1727965664/ATM_re3clu.jpg" }
  ];

  inverterTroubleshooting: string[] = [
    "No output in Inverter, check the ON/OFF switch.",
    "No Output with Long buzzer sound during mains, check the MCB.",
    "There is no battery charging indication, check the input voltage.",
    "Call Technical Assistance."
  ];

  specifications = [
    {
      model: 'EEE2500',
      capacity: '2KVA',
      input: {
        ratedACVoltage: '230VAC (1Ph + N + PE)',
        voltageRange: 'Inverter mode 100 - 280VAC * 5VAC UPS Mode 180 - 270VAC ± 5VAC',
        frequencyRange: '50 Hz ±0.5 Hz',
      },
      battery: {
        chemistry: 'LiFePO4',
        voltage: '25.6VDC',
        capacity: '1.9kW',
        chargingCurrentMax: '0.25C at 100% load(configurable)',
        lowVoltageProtection: '20.8± 0.2VDC'
      },
      output: {
        ratedVoltage: '230VAC (1Ph + N)',
        frequencyRange: '50 Hz ±0.5 Hz',
        voltageRegulation: '± 1%',
        harmonicDistortion: '<3%',
        CrestFactor: '3:1/5 milliseconds (UPS Mode)',
        efficiency: '98% UPS Mode',
        overload: '≤100% 50 Min'
      },
      systemFeatures: {
        display: 'LCD Display',
        ipRating: 'IP40',
        alarmProtection: 'Short Circuit, Input Under/Over Voltage, Over Temperature, Over Load',
        audibleAlarms: 'Low battery, Overload, Fuse Blown',
        ledIndications: 'Mains on, Charging on, UPS on',
        lcdDisplayInformation: 'AC mains input voltage, AC output voltage, AC mains ON/OFF, Output Load percentage, Battery voltage, UPS mode ON/OFF, Low Battery, Over Load, Over Temperature, Short Circuit'
      }
    },
    {
      model: 'EEE1550',
      capacity: '1KVA',
      input: {
        ratedACVoltage: '230V AC (1Ph + N + PE)',
        voltageRange: 'Inverter mode 100 - 280V AC ±5VAC, UPS Mode 180 - 270V AC ±5VAC',
        frequencyRange: '50 Hz ±0.5 Hz',
      },
      battery: {
        chemistry: 'LiFePO4',
        voltage: '25.6VDC',
        capacity: '1KW',
        chargingCurrentMax: '0.25C at 100% load(configurable)',
        lowVoltageProtection: '20.8± 0.2VDC'
      },
      output: {
        ratedVoltage: '230VAC (1Ph + N)',
        frequencyRange: '50 Hz ±0.5 Hz',
        voltageRegulation: '± 1%',
        harmonicDistortion: '<3%',
        CrestFactor: '3:1/5 milliseconds (UPS Mode)',
        efficiency: '98% UPS Mode',
        overload: '≤100% 50 Min'
      },
      systemFeatures: {
        display: 'LCD Display',
        ipRating: 'IP40',
        alarmProtection: 'Short Circuit, Input Under/Over Voltage, Over Temperature, Over Load',
        audibleAlarms: 'Low battery, Overload, Fuse Blown',
        ledIndications: 'Mains on, Charging on, UPS on',
        lcdDisplayInformation: 'AC mains input voltage, AC output voltage, AC mains ON/OFF, Output Load percentage, Battery voltage, UPS mode ON/OFF, Low Battery, Over Load, Over Temperature, Short Circuit'
      }
    }
  ];


  faqs = [
    {
      Question: "What is advantage of your Li-ion Battery vs others?",
      Answer: "Lithium battery inverters are devices that store energy in lithium batteries and convert it to electricity for home or business use during power outages."
    },
    {
      Question: "What are the benefits of lithium battery inverters?",
      Answer: "Benefits include longer lifespan, higher efficiency, lower maintenance, and faster charging compared to traditional batteries."
    },
    {
      Question: "How do I choose the right lithium battery inverter?",
      Answer: "Consider your energy needs, budget, brand reputation, warranty, and after-sales support."
    }
  ];
}
