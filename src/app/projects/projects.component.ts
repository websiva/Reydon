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
  priceFilterProjects: any[] = [];
  dropDownFilterProjects:any[]=[];
  selectedType: string = "All";
  selectedProperty: string = "All";
  selectedDistrict: string = "All";
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
    //this.resetFilter();
    this.activeRoute.queryParams.subscribe(params => {
      const zone = params['zone'];
      //const type = params['projectType'];
  
      this.queryZone = zone || 'All'; // Default to 'All' if no parameter is provided
      //this.queryType = type || 'All'; // Default to 'All' if no parameter is provided
      this.loaddata(); // Reload data and apply filters
    });
  }

  //Getting full object from service
  loaddata() {
    this.propertyDataService.getAllData().subscribe(data => {
      this.LayoutData = data;
      this.FilteredProjects = this.LayoutData;
      this.priceFilterProjects = this.FilteredProjects;
      this.dropDownFilterProjects=this.FilteredProjects;
      this.updateInitialDropdownValues();
      this.filterProjects();
    });
  }
  updateInitialDropdownValues() {
    this.GettingZones();
    this.GettingDistricts();
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
      this.FilteredProjects=this.dropDownFilterProjects;
      this.priceFilterProjects = this.FilteredProjects;
      this.updateDropdownValues();
      //this.FilterProject2 = this.FilteredProjects;
    }
  }

  updateDropdownValues() {
    if (this.activeFilter !== 'zone') this.GettingZones();
    if (this.activeFilter !== 'district') this.GettingDistricts();
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
  GettingDistricts() {
    const cities = this.FilteredProjects.map(item => item.AddressDetails.District);
    this.ProjectCities = ['All', ...[...new Set(cities)]];
  }

  //Getting zone from service
  GettingZones() {
    const zones = this.FilteredProjects.map(item => item.AddressDetails.Zone);
    this.Zones = ['All', ...[...new Set(zones)]];
  }

  onUnitChange(event: any) {
    //this.resetFilter();
    this.FilteredProjects=this.dropDownFilterProjects;
    this.selectedUnit = event.target.value;
    //alert(this.selectedUnit);
    this.updateMaxPrice();
  }

  resetWhenunitChange(){

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




  filterProjects() {
    this.dropDownFilterProjects = this.LayoutData.filter(project => {
      const matchesZone = this.selectedZone === 'All' || project.AddressDetails.Zone === this.selectedZone;
      const matchesCity = this.selectedDistrict === 'All' || project.AddressDetails.District === this.selectedDistrict;
      const matchesType = this.selectedType === 'All' || project.Type === this.selectedType;
      const matchesProperty = this.selectedProperty === 'All' || project.Category === this.selectedProperty;

      return matchesZone && matchesCity && matchesType && matchesProperty;
    });
  }

  filterProjectsBasedonPrice() {
    this.FilteredProjects = this.priceFilterProjects.filter(project => {
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
    this.selectedUnit="Sq Ft";
    this.activeFilter = filterName;  // Set active filter
    this.filterProjects();
    this.FilteredProjects=this.dropDownFilterProjects;
    this.priceFilterProjects = this.FilteredProjects;
    this.updateDropdownValues();
  }

  onPriceChange(event: any): void {
    this.pricePerUnit = event.target.value;
    //console.log(`Selected price per sq ft: ${this.pricePerUnit}`);
    this.filterProjectsBasedonPrice();
  }

  resetFilter() {
    this.FilteredProjects = this.LayoutData;
    //this.FilterProject2=this.FilteredProjects;
    this.selectedType = "All";
    this.selectedProperty = "All";
    this.selectedDistrict = "All";
    this.queryZone="All";
    //this.selectedUnit= 'Sq Ft';
    this.changeZoneQueryFromUrl("zone","All");
    //this.changeZoneQueryFromUrl("projectType","All");
    this.updateInitialDropdownValues();
  }

  goingDetailPage(category: string, projectName: string, projectId: string) {
    const formattedProjectName = projectName.replace(/\s+/g, '-').toLowerCase();
    this.router.navigate(["/" + category, formattedProjectName], { queryParams: { id: projectId } });
  }

  changeZoneQueryFromUrl(paramkey:string,paramValue:string){
    //getting all the query params from activeroute
    const allQueryParams = {...this.activeRoute.snapshot.queryParams};

    //change queryparam value on the acive route
    allQueryParams[paramkey]=paramValue;

    this.router.navigate([],{relativeTo:this.activeRoute,queryParams:allQueryParams,queryParamsHandling:'merge'});
  }

  gotoFAQ(sectionName:string){
    this.router.navigate(['FAQ'],{queryParams:{sectionName:sectionName}});
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
}
