import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { PropertyDataService } from '../angular-service/property-data.service';
import { Router } from '@angular/router';

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
  Types: string[] = [];
  FilteredProjects: any[] = [];
  selectedType: string = "All";
  selectedProperty: string = "All";
  selectedCity: string = "All";
  selectedZone = "All";
  dateValue: string = "";
  filterVisible = false;
  filterButtonContent = "Show Filters";
  Maxprice: number = 0;
  pricePerUnit: number = 0;
  selectedUnit: string = 'Sq Ft';

  constructor(private propertyDataService: PropertyDataService, private cdr: ChangeDetectorRef,private router:Router) {

  }

  ngOnInit() {
    this.loaddata();
  }

  //Getting full object from service
  loaddata() {
    this.propertyDataService.getAllData().subscribe(data => {
      this.LayoutData = data.filter(project=>project.Type === 'Residential');
      this.FilteredProjects = this.LayoutData;
      this.updateDropdownValues();
    })
  }

  updateDropdownValues() {
    this.GetingCategories();
    this.GettingCities();
    this.GettingZones();
    this.GettingTypes();
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

  //Getting maximum price
  getMaximumPricePerSqFt() {
    this.Maxprice = this.FilteredProjects.reduce((max, item) => item.PricePerSqFt > max ? item.PricePerSqFt : max, 0);
    this.pricePerUnit = this.Maxprice;
  }

  onUnitChange(event: any) {
    this.selectedUnit = event.target.value;
    this.updateMaxPrice();
    this.filterProjects();
  }

  updateMaxPrice() {
    // Reset to original max price when unit is Sq Ft
    if (this.selectedUnit === 'Sq Ft') {
      this.getMaximumPricePerSqFt(); // Reset to original value
    } else if (this.selectedUnit === 'Cent') {
      this.getMaximumPricePerSqFt();
      this.Maxprice = this.Maxprice * 435.60; // Convert Sq Ft to Cent
      this.pricePerUnit = this.Maxprice;
    }

    console.log(this.Maxprice);
    // Trigger change detection if needed
    this.cdr.detectChanges();
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

      // Convert project price to Cent if needed
      let projectPrice = project.PricePerSqFt;
      if (this.selectedUnit === 'Cent') {
        projectPrice *= 435.60; // Convert Sq Ft to Cent
      }

      // Filter based on price
      const matchesPrice = projectPrice <= this.pricePerUnit;

      return matchesZone && matchesCity && matchesType && matchesProperty && matchesPrice;
    });
  }

  onFilterChange() {
    this.filterProjects();
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
    this.filterProjects();
  }

  resetFilter() {
    this.FilteredProjects = this.LayoutData;
    this.selectedType = "All";
    this.selectedProperty = "All";
    this.selectedCity = "All";
    this.selectedZone = "All";
  }

  goingDetailPage(category:string){
    this.router.navigate(["/"+category]);
  }


}
