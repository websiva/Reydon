import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyDataService } from '../angular-service/property-data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  contactForm: FormGroup;
  ProjectName: string = '';
  ProjectId: string = '';
  ProjectData: any[] = [];
  RelatedProjects:any[]=[];
  ProjectZone:string='';
  ProjectCategory:string='';

  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private propertyDataService: PropertyDataService,private router:Router) {
    this.contactForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.activeroute.queryParams.subscribe((data) => {
      this.ProjectId = data['id'];
      console.log(this.ProjectId);
    });
    this.activeroute.params.subscribe((data) => {
      this.ProjectName = data['projectName'];
      console.log(this.ProjectName);
    })
    this.loadPropertyData(this.ProjectId);
  }

  loadPropertyData(projectId: string) {
    this.propertyDataService.getAllData().subscribe(data => {
      this.ProjectData = data.filter(project => project.ProjectId === projectId);
      console.log(this.ProjectData);
      this.GettingObjectValues();
    });
    this.propertyDataService.getAllData().subscribe(data=>{
      this.RelatedProjects=data.filter(project=>project.AddressDetails.Zone===this.ProjectZone&&project.Category===this.ProjectCategory);
    });
  }

  GettingObjectValues(){
    this.ProjectZone=this.ProjectData[0].AddressDetails?.Zone;
    this.ProjectCategory=this.ProjectData[0].Category;
  }

  ngSubmit() {
    console.log(this.contactForm.value);
    localStorage.removeItem('email');
    this.contactForm.reset();
  }

  //background color for card labels
  getLabelBackgroundColor(type: string): string {
    switch (type) {
      case 'Residential':
        return '#7BC42B';
      case 'Commercial':
        return '#F68712';
      case 'Layout':
        return '#5A5C5B';
      case 'Building':
        return '#004274';
      case 'Farm Lands':
        return '#00B0FF';
      default:
        return 'transparent';
    }
  }

  openGoogleMap(googleMapLink: string) {
    if (googleMapLink) {
      window.open(googleMapLink, '_blank');
    } else {
      console.error('Google Map link is missing');
    }
  }

  goingDetailPage(category:string,projectName:string,projectId:string){
    const formattedProjectName = projectName.replace(/\s+/g, '-').toLowerCase();
    this.router.navigate(["/"+category,formattedProjectName],{queryParams:{id:projectId}});
  }

  calculateRelativeTime(date: string | Date): string {
    const now = new Date();
    const projectDate = new Date(date);
    const diffInMilliseconds = now.getTime() - projectDate.getTime();
    const diffInMonths = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 30)); // Approximate month length

    if (diffInMonths < 1) {
      return 'Just now';
    } else {
      return `${diffInMonths} months ago`;
    }
  }
}
