import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent implements OnInit, AfterViewInit {
sectionName:string="";
  constructor(private activeRoute:ActivatedRoute){}


  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(data => {
      this.sectionName = data['sectionName'];
    });
  }

  ngAfterViewInit() {
    this.scrollToSection(this.sectionName);
  }

scrollToSection(sectionName:string){
  const element = document.getElementById(sectionName);
  if(element){
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition, // Use the correct position relative to the document
      behavior: 'smooth'    // Enable smooth scrolling
    });
  }
}

  mainDetails = [
    {
      MainTitle: "Real Estate Services",
      SectionQuestions: [
        {
          Question: "What services does Reydon Resources offer?",
          SectionDescription: "Reydon Resources provides a wide range of services, including:",
          Services: [
            {
              Title: "Real Estate Services:",
              Description: "Residential and commercial plots, building sales & services, and property management services."
            },
            {
              Title: "Interior Design:",
              Description: "Install unique designs of Reydon interior with high-quality materials for both homes and offices to make your dreams a reality."
            },
            {
              Title: "Reydon Furnitures:",
              Description: "High-quality modern furniture for your present lifestyle solutions."
            },
            {
              Title: "Modern AI-Linked Equipment and Services:",
              Description: "Smart home devices and solutions."
            }
          ]
        }
      ]
    },
    {
      MainTitle: "Property Management Services",
      SectionQuestions: [
        {
          Question: "What does property management involve?",
          SectionDescription: "",
          Services: [
            {
              Title: "",
              Description: "Property management companies handle various tasks related to properties. These services include tenant screening, rent collection, revenue generation, commercialisation, maintenance, repairs, and legal matters of the property."
            }
          ]
        },
        {
          Question: "Why should I consider property management services?",
          SectionDescription: "",
          Services: [
            {
              Title: "",
              Description: "Outsourcing property management ensures efficient operations, tenant satisfaction, and overall profitability for property owners."
            }
          ]
        }
      ]
    },

    {
      MainTitle: "Interior Design Services",
      SectionQuestions: [
        {
          Question: "What can Reydon Resources offer in terms of interior design?",
          SectionDescription: "",
          Services: [
            {
              Title: "",
              Description: "Reydon offers unique designs of interiors with high quality standard materials for both homes and offices to fulfil your dreams become reality."
            }
          ]
        },
        {
          Question: "How can AI enhance interior design?",
          SectionDescription: "",
          Services: [
            {
              Title: "",
              Description: "Consider integrating AI-linked devices for smart homes and offices. These devices can enhance comfort, efficiency, and aesthetics."
            }
          ]
        }
      ]
    },
    {
      MainTitle: "AI-Linked Devices for Homes and Offices",
      SectionQuestions: [
        {
          Question: "What are some AI gadgets for homes?",
          SectionDescription: "Reydon makes your loved home a Smart AI Home:",
          Services: [
            {
              Title: "Home Robot",
              Description: "A home assistant that controls devices."
            },
            {
              Title: "Lithium Inverter Smart Charging Unit",
              Description: "Smart charging solution for homes."
            },
            {
              Title: "AI-Powered Lights",
              Description: "Enhance gaming sessions."
            },
            {
              Title: "AI-Powered All Electronic Gadgets",
              Description: "For safety and security with modern lifestyle."
            },
            {
              Title: "AI-Powered Smart Kitchen",
              Description: "For home makers and foodies."
            },
            {
              Title: "Mood-Monitoring Lighting",
              Description: "Adjusts based on your mood."
            },
            {
              Title: "Snore-Tackling Smart Pillow",
              Description: "Improves sleep quality."
            },
            {
              Title: "EV Smart Fast Charging Units",
              Description: "Designed for home use."
            },
            {
              Title: "Solar Panels",
              Description: "For domestic energy needs."
            }
          ]
        }
      ]
    }
  ]
  extraAwraness=[
    {
      MainTitle: "Premium Plots",
      SectionQuestions: [
        {
          Question: "What factors should I consider when buying a plot?",
          Answer: "Consider location, infrastructure, legal clearances, future development plans, and proximity to essential services."
        },
        {
          Question: "How is the price of a premium plot determined?",
          Answer: "Prices are influenced by location, plot size, amenities, demand, and future development prospects."
        },
        {
          Question: "Can I get financing for a commercial plot purchase?",
          Answer: "Yes, many banks and financial institutions offer loans for purchasing commercial plots, subject to eligibility and documentation."
        },
        {
          Question: "What are premium plots?",
          Answer: "Premium plots are high-value parcels of land located in prime areas, often offering better amenities, views, and proximity to important locations like business hubs and recreational facilities."
        },
        {
          Question: "What are commercial plots?",
          Answer: "Commercial plots are land parcels designated for business activities like offices, shops, and other commercial establishments."
        },
        {
          Question: "What are service apartments?",
          Answer: "Service apartments are fully furnished apartments available for short or long-term stays, providing hotel-like amenities and services."
        },
        {
          Question: "What is a resort?",
          Answer: "A resort is a commercial establishment offering lodging, entertainment, and recreational facilities."
        },
        {
          Question: "Are resorts profitable?",
          Answer: "They can be profitable if well-managed and located in a popular tourist destination."
        },
        {
          Question: "What is a farm house?",
          Answer: "A farm house is a residential property located on agricultural land, often used as a second home or vacation retreat."
        },
        {
          Question: "What are the uses of farm land?",
          Answer: "Uses include agriculture, horticulture, livestock farming, and sometimes agro-tourism."
        },
      ]
    },
    {
      MainTitle: "Commercial Plots",
      SectionQuestions: [
        {
          Question: "What are commercial plots?",
          Answer: "Commercial plots are land parcels designated for business activities like offices, shops, and other commercial establishments."
        },
        {
          Question: "What should I check before purchasing a commercial plot?",
          Answer: "Verify zoning regulations, accessibility, infrastructure, legal documentation, and potential for business growth."
        },
        {
          Question: "Can I get financing for a commercial plot purchase?",
          Answer: "Yes, many banks and financial institutions offer loans for purchasing commercial plots, subject to eligibility and documentation."
        }
      ]
    },
    {
      MainTitle: "Resorts & Farm House",
      SectionQuestions: [
        {
          Question: "What is a resort?",
          Answer: "A resort is a commercial establishment offering lodging, entertainment, and recreational facilities."
        },
        {
          Question: "What is a farm house?",
          Answer: "A farm house is a residential property located on agricultural land, often used as a second home or vacation retreat."
        },
        {
          Question: "What are the uses of farm land?",
          Answer: "Uses include agriculture, horticulture, livestock farming, and sometimes agro-tourism."
        },
        {
          Question: "What should I look for in a resort investment?",
          Answer: "Look for location, amenities, target market, competition, and return on investment."
        },
        {
          Question: "Are resorts profitable?",
          Answer: "They can be profitable if well-managed and located in a popular tourist destination."
        }
      ]
    },
    {
      MainTitle: "Service Apartments",
      SectionQuestions: [
        {
          Question: "What are service apartments?",
          Answer: "Service apartments are fully furnished apartments available for short or long-term stays, providing hotel-like amenities and services."
        },
        {
          Question: "What are the advantages of staying in a service apartment?",
          Answer: "Advantages include more space, kitchen facilities, cost-effectiveness for longer stays, and a homely atmosphere."
        },
        {
          Question: "Can service apartments be a good investment?",
          Answer: "Yes, they can offer good returns, especially in urban areas with high demand from business travelers and tourists."
        }
      ]
    },
    {
      MainTitle: "Lithium Battery Inverters",
      SectionQuestions: [
        {
          Question: "What are lithium battery inverters?",
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
      ]
    },
    {
      MainTitle: "EV Charging Units",
      SectionQuestions: [
        {
          Question: "What are EV charging units?",
          Answer: "EV charging units are devices that supply electric energy to recharge electric vehicles."
        },
        {
          Question: "What types of EV chargers are available?",
          Answer: "There are Level 1 (slow), Level 2 (moderate), and DC fast chargers, each offering different charging speeds."
        },
        {
          Question: "Can I install an EV charging unit at home?",
          Answer: "Yes, many EV charging units are designed for home installation, though you may need professional assistance for installation."
        }
      ]
    },
    {
      MainTitle: "Solar Panels for Domestic and Farming Projects",
      SectionQuestions: [
        {
          Question: "What are the benefits of installing solar panels?",
          Answer: "Benefits include reduced electricity bills, lower carbon footprint, renewable energy use, and potential government incentives."
        },
        {
          Question: "How do I determine the right size of the solar panel system for my needs?",
          Answer: "Consider your energy consumption, roof space, budget, and sunlight availability."
        },
        {
          Question: "Are solar panels a good investment for farms?",
          Answer: "Yes, they can significantly reduce energy costs and provide a reliable power source for agricultural operations."
        }
      ]
    }
  ]
  realEstateAwarness = [
    {
      MainTitle: "Real Estate",
      SectionQuestions: [
        {
          Question: "What factors should I consider when buying a plot?",
          Answer: "Consider location, infrastructure, legal clearances, future development plans, and proximity to essential services."
        },
        {
          Question: "How is the price of a premium plot determined?",
          Answer: "Prices are influenced by location, plot size, amenities, demand, and future development prospects."
        },
        {
          Question: "Can I get financing for a commercial plot purchase?",
          Answer: "Yes, many banks and financial institutions offer loans for purchasing commercial plots, subject to eligibility and documentation."
        },
        {
          Question: "What are premium plots?",
          Answer: "Premium plots are high-value parcels of land located in prime areas, often offering better amenities, views, and proximity to important locations like business hubs and recreational facilities."
        },
        {
          Question: "What are commercial plots?",
          Answer: "Commercial plots are land parcels designated for business activities like offices, shops, and other commercial establishments."
        },
        {
          Question: "What are service apartments?",
          Answer: "Service apartments are fully furnished apartments available for short or long-term stays, providing hotel-like amenities and services."
        },
        {
          Question: "What is a resort?",
          Answer: "A resort is a commercial establishment offering lodging, entertainment, and recreational facilities."
        },
        {
          Question: "Are resorts profitable?",
          Answer: "They can be profitable if well-managed and located in a popular tourist destination."
        },
        {
          Question: "What is a farm house?",
          Answer: "A farm house is a residential property located on agricultural land, often used as a second home or vacation retreat."
        },
        {
          Question: "What are the uses of farm land?",
          Answer: "Uses include agriculture, horticulture, livestock farming, and sometimes agro-tourism."
        },
      ]
    }
  ];
  batteryAwarness = [
    {
      MainTitle: "Lithium Battery Inverters",
      SectionQuestions: [
        {
          Question: "What are lithium battery inverters?",
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
      ]
    }
  ];
  zoneTableData = [
    {
      zone: 'Zone 1', zoneName: 'Coimbatore', districts: [
        'Coimbatore, The Nilgiris, Erode, Tiruppur, Karur, Salem and Namakkal'
      ], count: 7
    },
    {
      zone: 'Zone 2', zoneName: 'Dharmapuri', districts: [
        'Dharmapuri, Vellore, Thirupathur, Ranipet and Krishnagiri'
      ], count: 5
    },
    {
      zone: 'Zone 3', zoneName: 'Villupuram', districts: [
        'Villupuram, Thiruvannamalai, Cuddalore and Kallakurichi'
      ], count: 4
    },
    {
      zone: 'Zone 4', zoneName: 'Trichy', districts: [
        'Nagapattinam, Thiruvarur, Thanjavur, Trichy, Ariyalur, Perambalur, Mayiladurai and Pudukottai'
      ], count: 8
    },
    {
      zone: 'Zone 5', zoneName: 'Madurai', districts: [
        'Dindigul, Madurai, Theni, Virudhunagar, Sivaganga and Ramanathapuram'
      ], count: 6
    },
    {
      zone: 'Zone 6', zoneName: 'Tirunelveli', districts: [
        'Tirunelveli, Thoothukudi, Kanyakumari and Tenkasi'
      ], count: 4
    },
    {
      zone: 'Zone 7', zoneName: 'Chengalpattu', districts: [
        'Chengalpattu, Kancheepuram and Thiruvallur'
      ], count: 3
    },
    {
      zone: 'Zone 8', zoneName: 'Chennai', districts: [
        'Chennai and surroundings'
      ], count: 3
    }
  ];
  carpetAreaTableData = [
    { element: 'Living room/Hall', carpetArea: 'Yes', builtUpArea: 'Yes', superBuiltUpArea: 'Yes' },
    { element: 'Bedroom', carpetArea: 'Yes', builtUpArea: 'Yes', superBuiltUpArea: 'Yes' },
    { element: 'Dining room', carpetArea: 'Yes', builtUpArea: 'Yes', superBuiltUpArea: 'Yes' },
    { element: 'Kitchen', carpetArea: 'Yes', builtUpArea: 'Yes', superBuiltUpArea: 'Yes' },
    { element: 'Bathroom', carpetArea: 'Yes', builtUpArea: 'Yes', superBuiltUpArea: 'Yes' },
    { element: 'Pooja room', carpetArea: 'Yes', builtUpArea: 'Yes', superBuiltUpArea: 'Yes' },
    { element: 'Study room & Guest room', carpetArea: 'Yes', builtUpArea: 'Yes', superBuiltUpArea: 'Yes' },
    { element: 'Home Theater/ GYM', carpetArea: 'Yes', builtUpArea: 'Yes', superBuiltUpArea: 'Yes' },
    { element: 'Utility areas', carpetArea: 'Yes', builtUpArea: 'Yes', superBuiltUpArea: 'Yes' },
    { element: 'Staircase (inside the house)', carpetArea: 'Yes', builtUpArea: 'Yes', superBuiltUpArea: 'Yes' },
    { element: 'Balcony', carpetArea: 'No', builtUpArea: 'Yes', superBuiltUpArea: 'Yes' },
    { element: 'Staircase (outside the house)', carpetArea: 'No', builtUpArea: 'Yes', superBuiltUpArea: 'Yes' },
    { element: 'Terrace', carpetArea: 'No', builtUpArea: 'Yes', superBuiltUpArea: 'Yes' },
    { element: 'Verandah / Portico', carpetArea: 'No', builtUpArea: 'Yes', superBuiltUpArea: 'Yes' },
    { element: 'Lift', carpetArea: 'No', builtUpArea: 'No', superBuiltUpArea: 'Yes' },
    { element: 'Lobby', carpetArea: 'No', builtUpArea: 'No', superBuiltUpArea: 'Yes' },
    { element: 'Garden / Walking Track', carpetArea: 'No', builtUpArea: 'No', superBuiltUpArea: 'Yes' },
    { element: 'Swimming pool', carpetArea: 'No', builtUpArea: 'No', superBuiltUpArea: 'Yes' }
  ];

  unit: string[] = ['Acre', 'Cent', 'Sqft', 'Ground', 'Sq. Mtr', 'Sq. Yrd', 'Hectare'];

  units: number[][] = [
    [1, 100, 43560, 18.15, 4046.85, 4840, 0.40469],  // Acre
    [0.01, 1, 435.6, 0.1815, 40.46, 48.4, 0.00404],  // Cent
    [0.00002, 0.002, 1, 0.0004, 0.09, 0.1, 0.000009],  // Sqft
    [0.05, 5.51, 2400.35, 1, 223, 266.71, 0.02],  // Ground
    [0.0002, 0.02, 10.76, 0.004, 1, 1.2, 0.0001],  // Sq. Mtr
    [0.0002, 0.02, 9, 0.003, 0.8, 1, 0.00008],  // Sq. Yrd
    [2.47, 247.13, 107639, 44.84, 10000, 11959.89, 1]  // Hectare
  ];

  selectedFromUnit: string = 'Acre'; // Default from unit
  selectedToUnit: string = 'Acre'; // Default to unit
  inputValue: number = 1; // Input value for conversion
  convertedValue: number | string = '1'; // Store converted value

  // Method to convert the value from one unit to another
  convertValue() {
    try {
      const fromIndex = this.unit.indexOf(this.selectedFromUnit); // Get index of from unit
      const toIndex = this.unit.indexOf(this.selectedToUnit); // Get index of to unit

      // Check if indexes are valid
      if (fromIndex === -1 || toIndex === -1) {
        throw new Error('Invalid units selected.');
      }

      // Use the correct indexing for conversion
      const conversionFactor = this.units[fromIndex][toIndex]; // Conversion factor based on selected units
      this.convertedValue = this.inputValue * conversionFactor; // Perform conversion
    } catch (error) {
      console.error(error);
      this.convertedValue = 'Invalid units'; // Error handling
    }
  }
}
