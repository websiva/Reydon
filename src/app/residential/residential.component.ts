import { Component, OnInit } from '@angular/core';
import { PropertyDataService } from '../angular-service/property-data.service';

@Component({
  selector: 'app-residential',
  templateUrl: './residential.component.html',
  styleUrl: './residential.component.css'
})
export class ResidentialComponent implements OnInit {
  LayoutData: any[] = [];
  Categories: string[] = [];
  ProjectCities: string[] = [];
  Zones: string[] = [];
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
  }

  //Getting full object from service
  loaddata() {
    this.propertyDataService.getAllData().subscribe(data => {
      this.LayoutData = data.filter(project=>project.Type === 'Residential');
      this.FilteredProjects = this.LayoutData;
      this. gettingUniqueCategories();
      this. GettingCities();
      this.GettingZones();
    })
  }

  //Getting unique cities from service
  GettingCities(){
    const cities = this.LayoutData.map(item=>item.AddressDetails.Taluk);
    this.ProjectCities=['All',...cities];
  }

  //extract unique categories
  gettingUniqueCategories(){
    const categories = this.LayoutData.map(item=>item.Category);
    this.Categories= ['All',...new Set(categories)]
  }


  //Getting zone from service
  GettingZones() {
    const zones = this.LayoutData.map(item=>item.AddressDetails.Zone);
    this.Zones = ['All', ...zones];
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
