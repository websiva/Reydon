import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FAQComponent {

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
  awarness = [
    {
      MainTitle: "",
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
  
}
