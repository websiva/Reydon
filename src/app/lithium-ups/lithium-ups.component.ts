import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lithium-ups',
  templateUrl: './lithium-ups.component.html',
  styleUrl: './lithium-ups.component.css'
})
export class LithiumUPSComponent implements OnInit {
  currentIndex: number = 0;
  interval: any;
  currentSlide: number = 0;
  currentSlideIndex = 0;

  // Method to go to the next slide
  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.productImages.length;
  }

  // Method to go to the previous slide
  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.productImages.length) % this.productImages.length;
  }

  ngOnInit(): void {
    // Automatic slide change every 5 seconds
    this.startSlider();
  }

  changeSlide(direction: number): void {
    this.currentIndex += direction;
    if (this.currentIndex < 0) {
      this.currentIndex = this.sliderData.length - 1; // Loop to last slide
    } else if (this.currentIndex >= this.sliderData.length) {
      this.currentIndex = 0; // Loop to first slide
    }
  }

  startSlider() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.sliderData.length;
    }, 6000);
  }

  productImages = [
    { src: 'products/battery/product_image/product1.jpg', alt: 'Product 1' },
    { src: 'products/battery/product_image/product2.jpg', alt: 'Product 2' },
    { src: 'products/battery/product_image/product3.jpg', alt: 'Product 3' },
    { src: 'products/battery/product_image/product4.jpg', alt: 'Product 4' },
    { src: 'products/battery/product_image/product5.jpg', alt: 'Product 5' }
  ];

  // Slider Data
  sliderData = [
    {
      image: 'products/battery/slider-image/eco_friendly.jpg',
      heading: 'Sustainable Energy for a Greener Future',
      description: 'Our eco-friendly lithium UPS systems harness renewable energy, helping you reduce your carbon footprint while enjoying reliable power.'
    },
    {
      image: 'products/battery/slider-image/power_protection.jpg',
      heading: 'Shield Your Devices with Confidence',
      description: 'Protect your critical equipment from unexpected power interruptions and surges with our advanced lithium UPS solutions designed for maximum reliability.'
    },
    {
      image: 'products/battery/slider-image/rapid_charging.jpg',
      heading: 'Get Back to Power in No Time',
      description: 'Experience rapid charging capabilities with our lithium UPS systems, ensuring your devices are powered up and ready to go when you need them most.'
    },
    {
      image: 'products/battery/slider-image/remote_monitoring.jpg',
      heading: 'Stay Connected, Stay In Control',
      description: 'Monitor and manage your UPS performance from anywhere with our intelligent remote monitoring system, providing real-time updates and alerts for your peace of mind.'
    },
    {
      image: 'products/battery/slider-image/zero_maintanace.jpg',
      heading: 'Worry-Free Power Solutions',
      description: 'Enjoy hassle-free operation with our zero-maintenance lithium UPS systems, engineered for durability and long-lasting performance without the need for regular upkeep.'
    }
  ];

  lithiumBatteryFeatures: string[] = [
    "DSP based Pure Sine Wave UPS",
    "20 KHz Noiseless Operation",
    "More Efficient & Reduce Human Error",
    "Resettable Circuit Breaker",
    "LCD with Audible Alarm",
    "Build-in Thermal Sensor",
    "For Computer & Home Appliances",
    "No Protruding Wires",
    "No Fumes",
    "All-in-one Integrated Design",
    "Battery Life up to 10 Years",
    "Zero Maintenance",
    "Rapid Charging",
    "Superior Performance",
    "Space-saving Compact Design"
  ];

  batteryHighlights: { name: string, svg: string }[] = [
    {
      name: "Quick installation",
      svg: "products/battery/highlights/quick-installation.svg"
    },
    {
      name: "Lightweight",
      svg: "products/battery/highlights/lightweight.svg"
    },
    {
      name: "Faster rechargeable times",
      svg: "products/battery/highlights/faster-recharge.svg"
    },
    {
      name: "Longer life span",
      svg: "products/battery/highlights/long_life.svg" // You may need to provide this SVG file path if it exists
    },
    {
      name: "Highest power availability",
      svg: "products/battery/highlights/highest_power_availability.svg"
    },
    {
      name: "Compactness",
      svg: "products/battery/highlights/compactness.svg"
    },
    {
      name: "Surge and Noise Protection",
      svg: "products/battery/highlights/noise_protection.svg"
    },
    {
      name: "Zero Transfer Time to Battery",
      svg: "products/battery/highlights/zero_transfer_time_to_battery.svg"
    }
  ];

  batteryApplicationAreas = [
    { name: "All Commercial Buildings", image: "commercial-building.jpg" },
    { name: "Offices", image: "offices.jpg" },
    { name: "Schools & Colleges", image: "school.jpg" },
    { name: "Industrial Workstations", image: "industrial-workstation.jpg" },
    { name: "Public Buildings", image: "public_building.jpg" },
    { name: "Temples", image: "temple.jpg" },
    { name: "CCTV & Systems working areas", image: "cctv.jpg" },
    { name: "Emergency lighting areas", image: "emergency-exit.jpg" },
    { name: "PLC & SCADA systems", image: "PLC_SCADA_systems.jpg" },
    { name: "Bank", image: "bank.jpg" },
    { name: "ATM", image: "ATM.jpg" }
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
}
