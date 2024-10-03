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
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/3Wheeler-Battery.png', alt: '3 Wheeler Battery' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/12v-80ah.png', alt: '12v 80Ah Battery' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/48V-1280x1280.jpg', alt: '48V Battery' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/96V96Ah.jpg', alt: '96V 96Ah Battery' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/96v96ah1.jpg', alt: '96V 96Ah Battery 1' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/96v96Ah2.jpg', alt: '96V 96Ah Battery 2' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/4824-without-address-1280x1280.jpg', alt: '4824 Battery' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/adirath-UPS-1280x970.jpg', alt: 'Adirath UPS' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/Bike-Batteries-copy.png', alt: 'Bike Battery' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/DSC04040-1280x854.jpg', alt: 'Battery DSC04040' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/Electric-Vehicle-Batteries-1280x1122.jpg', alt: 'Electric Vehicle Batteries' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/ESS-Battery.jpg', alt: 'ESS Battery' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/ESS-Battery1.jpg', alt: 'ESS Battery 1' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/IMG_20220430_103710-1280x1280.jpg', alt: 'Battery IMG 20220430' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/IMG_20220517_172255-1280x2123.jpg', alt: 'Battery IMG 20220517' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/IMG_20220526_125601-1280x1699.jpg', alt: 'Battery IMG 20220526' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/IMG_20220616_172144-1280x958.jpg', alt: 'Battery IMG 20220616' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/IMG_20220621_152954-1280x958.jpg', alt: 'Battery IMG 20220621' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/IMG_20221008_105941-copy-1280x1014.jpg', alt: 'Battery IMG 20221008' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/Rickshaw-Battery.png', alt: 'Rickshaw Battery' },
    { src: 'https://eeepvtltd.com/wp-content/uploads/2022/12/Robot-Battery-1280x1280.png', alt: 'Robot Battery' }
];

  lithiumBatteryFeatures = [
    { feature: "DSP based Pure Sine Wave UPS", img: "DSP.png" },
    { feature: "20 KHz Noiseless Operation", img: "20hz.png" },
    { feature: "More Efficient & Reduce Human Error", img: "smd_design.png" }, 
    { feature: "Resettable Circuit Breaker", img: "circuit_breaker.png" },
    { feature: "LCD with Audible Alarm", img: "audible_alaram.png" },
    { feature: "Build-in Thermal Sensor", img: "thermal_sensor.png" },
    { feature: "For Computer & Home Appliances", img: "computer_home.png" },
    { feature: "No Protruding Wires", img: "protruding_wires.png" },
    { feature: "No Fumes", img: "no_fumes.png" },
    { feature: "All-in-one Integrated Design", img: "integrated_design.png" },
    { feature: "Battery Life up to 10 Years", img: "battery_life.png" },
    { feature: "Zero Maintenance", img: "maintanance.png" },
    { feature: "Rapid Charging", img: "rapid_charging.png" },
    { feature: "Superior Performance", img: "superior_performence.png" },
    { feature: "Space-saving Compact Design", img: "compact_design.png" }
  ];

  batteryHighlights: { name: string, svg: string }[] = [
    {
      name: "Battery back-up system",
      svg: "products/battery/highlights/quick-installation.svg"
    },
    {
      name: "Durability",
      svg: "products/battery/highlights/lightweight.svg"
    },
    {
      name: "Increased stability",
      svg: "products/battery/highlights/faster-recharge.svg"
    },
    {
      name: "Environmental-friendly",
      svg: "products/battery/highlights/long_life.svg" // You may need to provide this SVG file path if it exists
    },
    {
      name: "Economical",
      svg: "products/battery/highlights/highest_power_availability.svg"
    },
    {
      name: "Better life cycle",
      svg: "products/battery/highlights/compactness.svg"
    },
    {
      name: "Low maintenance",
      svg: "products/battery/highlights/noise_protection.svg"
    },
    {
      name: "High safety level",
      svg: "products/battery/highlights/zero_transfer_time_to_battery.svg"
    }
  ];

  batteryApplicationAreas = [
    { name: "Telecom Energy Storage System", image: "Telecom.jpg" },
    { name: "EV Charging stations", image: "ev.jpg" },
    { name: "Petrol Bunk", image: "petrol-bunk.jpg" },
    { name: "Wind Power Plants", image: "windpower.jpg" },
    { name: "Farm House", image: "form_house.jpg" },
    { name: "Remote area Buildings", image: "remote-area.jpg" },
    { name: "Solar Street Lights", image: "solar-strret-lighty.jpg" }
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
      question: 'What is a Lithium-Ion Battery?',
      answer: 'A lithium-ion battery is a rechargeable battery type that uses lithium ions to store and release energy. It is widely used in portable electronics, electric vehicles, and renewable energy systems.'
    },
    {
      question: 'How long does a lithium-ion battery last?',
      answer: 'The lifespan of a lithium-ion battery typically ranges between 2 to 10 years, depending on usage patterns, charging cycles, and environmental factors.'
    },
    {
      question: 'Are lithium-ion batteries safe?',
      answer: 'Lithium-ion batteries are generally safe when used properly. However, misuse, overcharging, or exposure to extreme heat can lead to safety hazards, including fire or explosion.'
    },
    {
      question: 'What are the benefits of using lithium-ion batteries?',
      answer: 'Lithium-ion batteries have a high energy density, low self-discharge rate, and are lightweight, making them ideal for use in portable electronics and electric vehicles.'
    },
    {
      question: 'How do I prolong the life of my lithium-ion battery?',
      answer: 'To prolong the life of a lithium-ion battery, avoid overcharging, minimize exposure to high temperatures, and follow recommended usage and charging practices.'
    }
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
