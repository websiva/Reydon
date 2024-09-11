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
      qualificationSkillRequirements: ['School Passed, Any Degree or Diploma,',' Having Valid RERA License is Preferable'],
      keyResponsibilities: [
        'Identifying and pursuing new sales opportunities.',
        'Building and maintaining relationships with clients.',
        'Conducting property viewings and providing detailed information to potential buyers.',
        'Negotiating sales agreements and closing deals.',
        'Staying updated on market trends and property values.',
        'Strong communication and negotiation skills.'
      ],
      experience: 'Minimum two years experience in real estate sales in Residential, Commercial Layout & Buildings',
      perksBenefits: [
        'Competitive, with performance-based incentives more than industry standard',
        'Comprehensive training and career growth opportunities',
        'Benefits of package including health insurance, conveyance allowance, and more.'
      ],
      validDrivingLicense: 'Should have Valid Driving License for Motor Cycle or Car (MCWG, LMV)',
      ownVehicle: 'Minimum one should have owned two-wheeler',
      applicationProcess: 'Submit your resume through our website (reydonrpl.in) & Email: reydonrpl@gmail.com',
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
        'Bachelor’s degree in Business, Marketing, or a related field.',
        'Minimum of 2-3 years of experience in sales, preferably in Inverter, UPS, and battery sales and service.',
        'Proven track record of achieving sales targets and growing revenue.',
        'Strong understanding of Sales & Marketing and logistics services.',
        'Ability to travel as required.'
      ],
      keyResponsibilities: [
        'Identifying and pursuing new sales opportunities.',
        'Building and maintaining relationships with clients.',
        'Conducting property viewings and providing detailed information to potential buyers.',
        'Negotiating sales agreements and closing deals.',
        'Staying updated on market trends and property values.',
        'Strong communication and negotiation skills.'
      ],
      experience: 'Minimum two to three years experience in electronic product sales, especially UPS, inverter, and battery sales and service.',
      perksBenefits: [
        'Salary with performance-based incentive structure.',
        'Comprehensive training and career growth opportunities.',
        'Benefits of package including health insurance, conveyance allowance, and more.'
      ],
      validDrivingLicense: 'Should have Valid Driving License for Motor Cycle or Car (MCWG, LMV)',
      ownVehicle: 'Minimum one should have owned two-wheeler',
      applicationProcess: 'Submit your resume through our website (reydonrpl.in) & Email: reydonrpl@gmail.com',
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

  }
}
