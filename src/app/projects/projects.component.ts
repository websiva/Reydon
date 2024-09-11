import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PropertyDataService } from '../angular-service/property-data.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  Types: string[] = [];
  FilteredProjects: any[] = [];
  FilterProject2: any[] = [];
  selectedType: string = "All";
  selectedProperty: string = "All";
  selectedCity: string = "All";
  selectedZone = "All";
  queryZone:string="All";
  queryType:string="All";
  dateValue: string = "";
  filterVisible = false;
  filterButtonContent = "Show Filters";
  Maxprice: number = 0;
  MinPrice:number=0;
  pricePerUnit: number = 0;
  selectedUnit: string = 'Sq Ft';
  activeFilter: string = '';

  constructor(private propertyDataService: PropertyDataService, private cdr: ChangeDetectorRef, private router: Router,
    private activeRoute:ActivatedRoute) {

  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(params => {
      const city = params['zone'];
      const type = params['projectType'];
  
      this.queryZone = city || 'All'; // Default to 'All' if no parameter is provided
      this.queryType = type || 'All'; // Default to 'All' if no parameter is provided
  
      this.loaddata(); // Reload data and apply filters
    });
  }

  //Getting full object from service
  loaddata() {
    this.propertyDataService.getAllData().subscribe(data => {
      this.LayoutData = data;
      this.FilteredProjects = this.LayoutData;
      this.FilterProject2 = this.FilteredProjects;
      this.updateInitialDropdownValues();
      this.filterProjects();
    });
  }
  updateInitialDropdownValues() {
    this.GettingZones();
    this.GettingCities();
    this.GettingTypes();
    this.GetingCategories();
    this.getMaximumPricePerSqFt();
    this.cdr.detectChanges();
    this.selectedZone=this.queryZone;
    this.selectedType=this.queryType;
    if(this.queryZone!=="All"){
      this.activeFilter='zone';
    }
    if(this.queryType!=="All"){
      this.activeFilter="type";
    }
    if (this.selectedZone !== 'All'||this.selectedType!=="All") {
      this.filterProjects();
      this.updateDropdownValues();
      this.FilterProject2 = this.FilteredProjects;
    }
  }

  updateDropdownValues() {
    if (this.activeFilter !== 'zone') this.GettingZones();
    if (this.activeFilter !== 'city') this.GettingCities();
    if (this.activeFilter !== 'type') this.GettingTypes();
    if (this.activeFilter !== 'property') this.GetingCategories();
    this.getMaximumPricePerSqFt();
    this.cdr.detectChanges();
  }

  //Getting types from service
  GettingTypes() {
    const types = this.FilteredProjects.map(item => item.Type);
    this.Types = ['All', ...[...new Set(types)]];
  }

  //Getting unique category from service
  GetingCategories() {
    const categories = this.FilteredProjects.map(item => item.Category);
    this.Categories = ['All', ...[...new Set(categories)]];
  }

  //Getting unique cities from service
  GettingCities() {
    const cities = this.FilteredProjects.map(item => item.AddressDetails.Taluk);
    this.ProjectCities = ['All', ...[...new Set(cities)]];
  }

  //Getting zone from service
  GettingZones() {
    const zones = this.FilteredProjects.map(item => item.AddressDetails.Zone);
    this.Zones = ['All', ...[...new Set(zones)]];
  }

  onUnitChange(event: any) {
    this.resetFilter();
    this.selectedUnit = event.target.value;
    this.updateMaxPrice();
    //this.filterProjectsBasedonPrice();
  }

  updateMaxPrice() {
    // Reset to original max price when unit is Sq Ft
    if (this.selectedUnit === 'Sq Ft') {
      this.getMaximumPricePerSqFt(); // Reset to original value
    } else if (this.selectedUnit === 'Cent') {
      this.getMaximumPricePerSqFt();
      this.Maxprice = Math.round((this.Maxprice * 435.60)/10)*10; // Convert Sq Ft to Cent
      this.MinPrice = Math.round((this.MinPrice * 435.60)/10)*10;
      this.pricePerUnit = this.Maxprice;
    }
    // Trigger change detection if needed
    this.cdr.detectChanges();
  }

    //Getting maximum price
    getMaximumPricePerSqFt() {
      this.Maxprice = this.FilteredProjects.reduce((max, item) => item.PricePerSqFt > max ? item.PricePerSqFt : max, 0);
      this.MinPrice=this.FilteredProjects.reduce((min, item) => item.PricePerSqFt < min ? item.PricePerSqFt : min, this.Maxprice);
      this.pricePerUnit = this.Maxprice;
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


  filterProjects() {
    this.FilteredProjects = this.LayoutData.filter(project => {
      const matchesZone = this.selectedZone === 'All' || project.AddressDetails.Zone === this.selectedZone;
      const matchesCity = this.selectedCity === 'All' || project.AddressDetails.Taluk === this.selectedCity;
      const matchesType = this.selectedType === 'All' || project.Type === this.selectedType;
      const matchesProperty = this.selectedProperty === 'All' || project.Category === this.selectedProperty;

      return matchesZone && matchesCity && matchesType && matchesProperty;
    });
  }

  filterProjectsBasedonPrice() {
    this.FilteredProjects = this.FilterProject2.filter(project => {
      let projectPrice = project.PricePerSqFt;

      // Convert Cent to Sq Ft if necessary
      if (this.selectedUnit === 'Cent') {
        projectPrice *= 435.60; // Convert from Cent to Sq Ft
        projectPrice = roundToNearestTen(projectPrice);
      }

      function roundToNearestTen(value: number) {
        return Math.round(value / 10) * 10;
      }

      // Compare project price with maxPrice
      return projectPrice <= this.pricePerUnit;
    });
  }

  onFilterChange(filterName: string) {
    this.activeFilter = filterName;  // Set active filter
    this.filterProjects();
    this.updateDropdownValues();
    this.FilterProject2 = this.FilteredProjects;

    //alert(this.Maxprice);
  }

  toggleFilters() {
    this.filterVisible = !this.filterVisible;
    if (!this.filterVisible) {
      this.filterButtonContent = "Show filters";
    }
    else {
      this.filterButtonContent = "Hide filters";
    }
  }

  onPriceChange(event: any): void {
    this.pricePerUnit = event.target.value;
    console.log(`Selected price per sq ft: ${this.pricePerUnit}`);
    this.filterProjectsBasedonPrice();
  }

  resetFilter() {
    this.FilteredProjects = this.LayoutData;
    this.FilterProject2=this.FilteredProjects;
    this.selectedType = "All";
    this.selectedProperty = "All";
    this.selectedCity = "All";
    this.queryZone="All";
    this.selectedUnit= 'Sq Ft';
    this.changeZoneQueryFromUrl("zone","All");
    this.changeZoneQueryFromUrl("projectType","All");
    this.updateInitialDropdownValues();
  }

  goingDetailPage(category: string, projectName: string, projectId: string) {
    const formattedProjectName = projectName.replace(/\s+/g, '-').toLowerCase();
    this.router.navigate(["/" + category, formattedProjectName], { queryParams: { id: projectId } });
  }

  changeZoneQueryFromUrl(paramkey:string,paramValue:string){
    //getting all the query params from activeroute
    const allQueryParams = {...this.activeRoute.snapshot.queryParams};

    //deleting queryparam on the acive route
    allQueryParams[paramkey]=paramValue;

    this.router.navigate([],{relativeTo:this.activeRoute,queryParams:allQueryParams,queryParamsHandling:'merge'});


  }


}
