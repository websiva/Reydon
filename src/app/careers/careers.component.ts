import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

  currentProject:any={};
  jobList = [
    {
      jobCode: 'JC01',
      segmentType: 'Real Estate',
      jobTitle: 'Sales Executive - (Real Estate)',
      location: ['Tanjavore, Trichy, Karur, Madurai, Theni'],
      department: 'Sales & Marketing',
      cardExperience:'2-3 Yrs',
      jobType: ['Full Time, Part Time'],
      jobShortDescription: 'We are seeking a motivated and dynamic Real Estate Sales Executive to join our team.',
      qualificationSkillRequirements: ['School Passed, Any Degree or Diploma,',' Having Valid RERA License is Preferable',
      'Strong understandings of Sales & Marketting  and logistics services.','Ability to travel as required.'],
      keyResponsibilities: [
        'Identifying and pursuing new sales opportunities.',
        'Building and maintaining relationships with clients.',
        'Arrange for Projects Site Visit & Provide detailed information to potential buyers.',
        'Negotiate the transaction and close the deals.',
        'Staying update in current market trends and latest technology.',
        'Strong communication and negotiation skills.'
      ],
      experience: 'Minimum two years experience in real estate sales in Residential, Commercial Layout & Buildings',
      salary: 'Variable Pay Incentive Based on Performance',
      perksBenefits: [
        'Competitive, with performance-based incentives more than industry standard',
        'Comprehensive training and career growth opportunities',
        'Benefits of package including health insurance, conveyance allowance, and more.'
      ],
      validDrivingLicense: 'Should have Valid Driving License for Motor Cycle or Car (MCWG, LMV)',
      ownVehicle: 'Should have Owned Two wheeler',
      applicationProcess: 'Apply Now & Send Your updated Resume with recent photograph to our official email id : reydonrpl@gmail.com',
      awarenessSource: 'Social Media',
      deadline: '10/30/2024',
      contactInformation: {
        name: 'Mr. Kumaran',
        phone: '77089 43894'
      }
    },
    {
      jobCode: 'JC02',
      segmentType: 'Sales & Service',
      jobTitle: 'Sales Executive - (Product Sales and Service)',
      location: ['Chennai, Trichy, Madurai, Coimbatore, Salem, Tirunelveli, Kerala'],
      department: 'Sales & Marketing',
      cardExperience:'2-3 Yrs',
      jobType: ['Full Time, Part Time'],
      jobShortDescription: 'We are seeking a motivated and dynamic young Sales Executive to join our team.',
      qualificationSkillRequirements: [
        'Bachelor’s degree or Diploma / ITI in Electrical / Electronics is preferable.',
        'Minimum of 2-3 years of experience in sales, preferably in Inverter, UPS, and battery sales and service.',
        'Proven track record of achieving sales targets and growing revenue.',
        'Strong understanding of Sales & Marketing and logistics services.',
        'Ability to travel as required.'
      ],
      keyResponsibilities: [
        'Identifying and pursuing new sales opportunities.',
        'Building and maintaining relationships with clients.',
        'Conducting Demo Presentation, Participate in Trade Exibitions, Run Sales Compaigns.',
        'Negotiate the transaction and close the deals.',
        'Staying update in current market trends and latest technology.',
        'Strong communication and negotiation skills.'
      ],
      experience: 'Minimum two to three years experience in electronic product sales, especially UPS, inverter, and battery sales and service.',
      salary: 'As per Industry Standard',
      perksBenefits: [
        'Salary with performance-based incentive structure.',
        'Comprehensive training and career growth opportunities.',
        'Benefits of package including health insurance, conveyance allowance, and more.'
      ],
      validDrivingLicense: 'Should have Valid Driving License for Motor Cycle or Car (MCWG, LMV)',
      ownVehicle: 'Should have Owned Two wheeler',
      applicationProcess: 'Apply Now & Send Your updated Resume with recent photograph to our official email id : reydonrpl@gmail.com',
      awarenessSource: 'Friends',
      deadline: '10/30/2024',
      contactInformation: {
        name: 'Mr. Kumaran',
        phone: '77089 43894'
      }
    }
  ];
  
  viewJobDetails(value:string){
    this.currentProject=this.jobList.filter(job=>job.jobCode===value);
    console.log(this.currentProject);
  }
  ApplyJob(jobcode:string){
    const googleFormLink="https://docs.google.com/forms/d/e/1FAIpQLScdtvgzOU1ZEd1tJh41wBat25o3zATZlfNfFHZdXRDFoTWoog/viewform?usp=sf_link";

    window.open(googleFormLink,'_blank');
  }
}
