import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyDataService } from '../angular-service/property-data.service';
import { Proximity } from '../models/layout-proximity';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit, OnDestroy {
  contactForm: FormGroup;
  fileDownloadForm: FormGroup;
  ProjectName: string = '';
  ProjectId: string = '';
  ProjectData: any[] = [];
  RelatedProjects: any[] = [];
  ProjectZone: string = '';
  ProjectCategory: string = '';
  mainLocation: { Latitude: number, Longitude: number } = {
    Latitude: 0,
    Longitude: 0
  };
  proximityLocations: Proximity[] = [];
  FirstTwentyPlots: any[] = [];
  BannerImages: string[] = [];
  interval: any;
  currentIndex: number = 0;
  downloadFormId:string='';
  modalImageUrl: string = '';

  YoutubeLink: string = '';
  safeYoutubeUrl!: SafeResourceUrl;
  safeMapLink!: SafeResourceUrl;
  scrollToTopBtn:boolean=false;

  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private propertyDataService: PropertyDataService, private router: Router,
    private sanitizer: DomSanitizer) {
    this.contactForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
    this.fileDownloadForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]]
    });
  }

  async ngOnInit() {
    this.activeroute.queryParams.subscribe(async (data) => {
      this.ProjectId = data['id'];
      console.log(this.ProjectId);
    });
    this.activeroute.params.subscribe(async (data) => {
      this.ProjectName = data['projectName'];
      console.log(this.ProjectName);
    })
    try {
      await this.loadPropertyData(this.ProjectId);
    } catch (error) {
      console.error(error);
    }

  }

  async loadPropertyData(projectId: string): Promise<void> {
    try {
      this.propertyDataService.getAllData().subscribe(data => {
        this.ProjectData = data.filter(project => project.ProjectId === projectId);
        console.log(this.ProjectData);
        this.GettingObjectValues();
        this.CollectingLocationsFromMainData();
        this.firsttwentyPlots();
        this.startSlider();
        this.bypasslinkSafety();
        //this.youtubeVideoId = this.extractVideoId(this.YoutubeLink);
      });
      this.propertyDataService.getAllData().subscribe(data => {
        this.RelatedProjects = data.filter(project => project.AddressDetails.Zone === this.ProjectZone && project.Category === this.ProjectCategory && project.ProjectId !== this.ProjectId);
      });

    } catch (error) {
      console.error(error);
    }

  }

  bypasslinkSafety() {
    // converting normal youtube url to safe url
    this.safeYoutubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.YoutubeLink);
    //converting normal google map location url to safe url
    const mapLink = `https://www.google.com/maps/embed/v1/place?key=AIzaSyB-05IYBDNd81n3uNbcfrCriwnq-ZWJ8ag&q=${this.mainLocation.Latitude},${this.mainLocation.Longitude}&maptype=satellite`;
    this.safeMapLink = this.sanitizer.bypassSecurityTrustResourceUrl(mapLink);
  }

  GettingObjectValues() {
    this.ProjectZone = this.ProjectData[0].AddressDetails?.Zone;
    this.ProjectCategory = this.ProjectData[0].Category;
    this.BannerImages = this.ProjectData[0].BannerImagesNames;
    this.YoutubeLink = this.ProjectData[0].YoutubeLink;
  }

  ngSubmit() {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

  ngSubmitFileDownloadform() {
    console.log(this.contactForm.value);
    this.fileDownloadForm.reset();
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
      return `${diffInMonths} months`;
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
        Category: location.Category
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
      case 'Gated community':
        return 'GatedCommunity.svg';
      case 'Landscaped Garden':
        return 'Garden.svg';
      case 'Parking':
        return 'Parking.svg';
      case 'Security':
        return 'Security.svg';
      case 'Power Backup':
        return 'PoweBackup.svg';
      case '24x7 CCTV Surveillance':
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
      case 'Jogging Track':
        return 'JoggingWalkingTrack.svg';
      case 'Religious activity places':
        return 'Temple.svg';
      case 'Sports Area':
        return 'SportsArea.svg';
      case 'EV Charging station':
        return 'EVChargingStation.svg';
      case 'High-Speed Internet':
        return 'HighSpeedInternet.svg';
      case 'Elevators':
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
  proximityIcon(proximity: string): string {
    switch (proximity) {
      case 'bus-stand':
        return "";
      default:
        return 'DefaultIcon.svg';
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Scroll to the element with a slight offset
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 50, // Adjust the offset as needed
        behavior: 'smooth'
      });
    }
  }


  //get first 20 plot details
  firsttwentyPlots() {
    this.FirstTwentyPlots = this.ProjectData[0].plots.slice(0, 20);
    console.log(this.FirstTwentyPlots);
  }

  //Interval for banner images
  startSlider() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.BannerImages.length;
    }, 4000);
  }

  downloadDocument() {
    this.downloadFile('heritage-avenue-brochure.pdf', 'application/pdf');
  }

  downloadFile(fileName: string, fileType: string) {
    const link = document.createElement('a');
    link.href = `${window.location.origin}/brochures/${fileName}`;
    alert(link.href);
    link.download = fileName;
    link.click();
  }

  setDownloadFormId(value:string){
    this.downloadFormId=value;
  }

  openBannerImages(image:string){
    this.modalImageUrl=image;
    console.log(image);
  }

  //scroll to top button functionalities
  @HostListener("window:scroll",[])
  onWindowScroll(){
    const scrollPosition = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
    if(scrollPosition>100){
      this.scrollToTopBtn=true;
    }
    else{
      this.scrollToTopBtn=false;
    }
  }

  scrollToTop(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
