import { Component, OnInit } from '@angular/core';
import { PropertyDataService } from '../angular-service/property-data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  LayoutData: any[] = [];
  Categories: string[] = [];
  ProjectCities: string[] = [];
  Zones: string[] = [];
  Types:string[]=["All","Residential","Commercial"];
  FilteredProjects:any[]=[];
  searchKeyword:string="";
  selectedType:string="All";
  selectedProperty: string = "All";
  selectedCity: string = "All";
  selectedZone = "All";
  dateValue:string="";
  filterVisible=false;
  filterButtonContent="Show Filters";

  constructor(private propertyDataService: PropertyDataService) { 

  }

  ngOnInit() {
    this.loaddata();
    this.GetingCategories();
    this.GettingCities();
    this.GettingZones();
  }

  //Getting full object from service
  loaddata() {
    this.propertyDataService.getAllData().subscribe(data => {
      this.LayoutData = data;
      console.log(this.LayoutData);
      this.FilteredProjects=this.LayoutData;
      console.log(this.FilteredProjects);
    })
  }

  //Getting unique category from service
  GetingCategories() {
    this.propertyDataService.getUniqueCategories().subscribe(categories => {
      this.Categories = ['All', ...categories];
      console.log(this.Categories);
    })
  }

  //Getting unique cities from service
  GettingCities() {
    this.propertyDataService.getCities().subscribe(cities => {
      this.ProjectCities = ['All', ...cities];
      console.log(this.ProjectCities);
    })
  }

  //Getting zone from service
  GettingZones() {
    this.propertyDataService.getZones().subscribe(zones => {
      this.Zones = ['All', ...zones];
      console.log(this.Zones);
    })
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

  calculateRelativeTime(date: string|Date):string{
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

  filterProjects() {
    console.log('Filtering with:', {
      searchKeyword: this.searchKeyword,
      selectedType: this.selectedType,
      selectedProperty: this.selectedProperty,
      selectedCity: this.selectedCity,
      selectedZone: this.selectedZone,
    });

    this.FilteredProjects = this.LayoutData.filter(project => {
      const matchesKeyword = this.searchKeyword ? project.ProjectName.toLowerCase().includes(this.searchKeyword.toLowerCase()) : true;
      const matchesZone = this.selectedZone === 'All' || project.AddressDetails.Zone === this.selectedZone;
      const matchesCity = this.selectedCity === 'All' || project.AddressDetails.Taluk === this.selectedCity;
      const matchesType = this.selectedType === 'All' || project.Type === this.selectedType;
      const matchesProperty = this.selectedProperty === 'All' || project.Category === this.selectedProperty;

      return matchesKeyword && matchesZone && matchesCity && matchesType && matchesProperty;
    });

    console.log('FilteredProjects:', this.FilteredProjects); // Verify filtered results
  }

  onFilterChange() {
    this.filterProjects();
  }

  toggleFilters(){
    this.filterVisible=!this.filterVisible;
    if(!this.filterVisible){
      this.filterButtonContent="Show filters";
    }
    else{
       this.filterButtonContent="Hide filters";
    }
  }

}
