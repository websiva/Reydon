import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyDataService } from '../angular-service/property-data.service';
import { Proximity } from '../models/layout-proximity';

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
  RelatedProjects: any[] = [];
  ProjectZone: string = '';
  ProjectCategory: string = '';
  mainLocation:{ Latitude: number, Longitude: number }={
    Latitude: 0,
    Longitude: 0
  };
  proximityLocations:Proximity[]=[];

  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private propertyDataService: PropertyDataService, private router: Router) {
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
      this.CollectingLocationsFromMainData();
    });
    this.propertyDataService.getAllData().subscribe(data => {
      this.RelatedProjects = data.filter(project => project.AddressDetails.Zone === this.ProjectZone && project.Category === this.ProjectCategory);
    });
  }

  GettingObjectValues() {
    this.ProjectZone = this.ProjectData[0].AddressDetails?.Zone;
    this.ProjectCategory = this.ProjectData[0].Category;
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

  goingDetailPage(category: string, projectName: string, projectId: string) {
    const formattedProjectName = projectName.replace(/\s+/g, '-').toLowerCase();
    this.router.navigate(["/" + category, formattedProjectName], { queryParams: { id: projectId } });
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

  //collecting location coordinates from object

  CollectingLocationsFromMainData() {
    this.mainLocation = {
      Latitude: this.ProjectData[0].AddressDetails.Latitude,
      Longitude: this.ProjectData[0].AddressDetails.Longitude
    }

    
    const nearByProximity = this.ProjectData[0].NearByProximity;
    
    if (nearByProximity && nearByProximity.length > 0) {
      this.proximityLocations = nearByProximity.map((location: Proximity) => ({
        ProximityName: location.ProximityName,
        Distance: location.Distance,
        Duration: location.Duration,
        Latitude: location.Latitude,
        Longitude: location.Longitude,
        Category:location.Category
      }));
      console.log('Proximity Locations:', this.proximityLocations);
    } else {
      console.warn('NearByProximity array is empty or undefined.');
    }
  }

  //Selecting aminities icon
  getAmenityIcon(amenityName: string): string {
    switch (amenityName) {
      case 'Street Light':
        return 'streetlight.svg';
      case 'Black top Tar road':
        return 'BlackTopRoad.svg';
      case 'White Top Metal Road':
        return 'WhiteTopRoad.svg';
      case 'Water Pipeline Connection':
        return 'WaterPipeline.svg';
      case 'Water Tank':
        return 'WaterTank.svg';
      case 'Drainage system':
        return 'Drainage.svg';
      case 'Drainage system (Covered)':
        return 'DrainageClosed.svg';
      case 'Entrance Arch':
        return 'Entrance.svg';
      case 'Compound wall/Gated community':
        return 'GatedCommunity.svg';
      case 'Landscaped Garden':
        return 'Garden.svg';
      case 'Parking':
        return 'Parking.svg';
      case 'Security':
        return 'Security.svg';
      case 'Power Backup':
        return 'PoweBackup.svg';
      case '24x7 CCTV / Surveillance cameras':
        return 'CCTV.svg';
      case 'Children\'s Play Area':
        return 'PlayArea.svg';
      case 'Swimming Pool':
        return 'SwimmingPool.svg';
      case 'Gymnasiums':
        return 'Gymnasiums.svg';
      case 'Club House':
        return 'ClubHouse.svg';
      case 'Convention center':
        return 'ConventionCenter.svg';
      case 'Jogging/Walking Track':
        return 'JoggingWalkingTrack.svg';
      case 'Temple/Religious activity places':
        return 'Temple.svg';
      case 'Sports Area (Tennis court, Basketball court, etc)':
        return 'SportsArea.svg';
      case 'EV Charging station':
        return 'EVChargingStation.svg';
      case 'High-Speed Internet':
        return 'HighSpeedInternet.svg';
      case 'Elevators / Lift':
        return 'Elevators.svg';
      case 'Waste Management System (STP)':
        return 'WasteManagement.svg';
      case 'Movie Mini Theatre':
        return 'MovieTheatre.svg';
      case 'Rain Water Harvesting':
        return 'RainWaterHarvest.svg';
      case 'Water Softener Plant':
        return 'WaterSoftenerPlant.svg';
      case 'Spa/Saloon':
        return 'SpaSaloon.svg';
      case 'Indoor Super Market':
        return 'SuperMarket.svg';
      case 'Restaurant':
        return 'Restaurant.svg';
      case 'Coffee Shop':
        return 'CoffeeShop.svg';
      case 'Pet friendly':
        return 'PetFriendly.svg';
      case 'Elder\'s Recreation centre':
        return 'ElderCentre.svg';
      case 'Battery car facility':
        return 'BatteryCar.svg';
      case 'Smoke free zone':
        return 'SmokeFreeZone.svg';
      case 'Bus Stop':
        return 'BusStop.svg';
      case 'Eco Friendly Environment':
        return 'EcoFriendly.svg';
      case 'others':
        return 'Others.svg'; // Default icon for other amenities
      default:
        return 'DefaultIcon.svg'; // Fallback for unknown amenities
    }
  }

  //selecting proximity icon
  proximityIcon(proximity:string):string{
    switch(proximity){
      case 'bus-stand':
        return "";
        default:
          return 'DefaultIcon.svg';
    }
  }

}
