import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyDataService } from '../angular-service/property-data.service';
import { Proximity } from '../models/layout-proximity';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PostFormDataService } from '../angular-service/post-form-data.service';

@Component({
  selector: 'app-villa-details',
  templateUrl: './villa-details.component.html',
  styleUrl: './villa-details.component.css'
})
export class VillaDetailsComponent implements OnDestroy,OnInit {
  contactForm: FormGroup;
  contcatFormName: string = '';
  contactFormEmail: string = "";
  contactFormPhoneNumber: string = "";
  contactFormMessage: string = "";
  contactFormProject: string = "";
  contactFormDownloadType: string = "";
  contactFormModalOpen:boolean=false;
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
  downloadFormId: string = '';
  downloadDocumentLink: string = "";
  modalImageUrl: string = '';

  YoutubeLink: string = '';
  safeYoutubeUrl!: SafeResourceUrl;
  safeMapLink!: SafeResourceUrl;
  scrollToTopBtn: boolean = false;

  constructor(private formBuilder: FormBuilder, private activeroute: ActivatedRoute, private propertyDataService: PropertyDataService, private router: Router,
    private sanitizer: DomSanitizer, private googleFormDataSercice: PostFormDataService) {
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
    try {
      this.activeroute.queryParams.subscribe(async (data) => {
        this.ProjectId = data['id'];
        console.log(this.ProjectId);
        await this.loadPropertyData(this.ProjectId);
      });
      this.activeroute.params.subscribe(async (data) => {
        this.ProjectName = data['projectName'];
        console.log(this.ProjectName);
        await this.loadPropertyData(this.ProjectId);
      });

      //setting contactformfilled status to false
      let sessionValue=sessionStorage.getItem("contactFormFilled");
      if(sessionValue=="true"){
        this.contactFormModalOpen=true;
      }
      else{
        this.contactFormModalOpen=false;
      }
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
        //this.firsttwentyPlots();
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

  //background color for card labels
  getLabelBackgroundColor(type: string): string {
    switch (type) {
      case 'Residential':
        return '#7BC42B'; // Green for Residential
      case 'Commercial':
        return '#F68712'; // Orange for Commercial
      case 'Layout':
        return '#5A5C5B'; // Gray for Layout
      case 'Building':
        return '#004274'; // Dark Blue for Building
      case 'Apartment':
        return '#00B0FF'; // Light Blue for Apartment
      case 'Villa House':
        return '#FF6F61'; // Coral for Villa
      default:
        return 'transparent'; // Default case
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
  /*firsttwentyPlots() {
    this.FirstTwentyPlots = this.ProjectData[0].plots.slice(0, 20);
    console.log(this.FirstTwentyPlots);
  }*/

  //Interval for banner images
  startSlider() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.BannerImages.length;
    }, 4000);
  }

  ngSubmitFileDownloadform() {
    console.log(this.contactForm.value);
    this.fileDownloadForm.reset();
  }

  //submitting project contact form data to google sheet
  ngContactFormSubmit(projectName:string) {
    this.contactFormProject=projectName
;    const sheetData = {
      Name: this.contcatFormName,
      Email: this.contactFormEmail,
      PhoneNumber: this.contactFormPhoneNumber,
      Message:this.contactFormMessage,
      ProjectName: this.contactFormProject
    };

    this.googleFormDataSercice.StoreProjectContactUsPageFormData(sheetData).subscribe((response: any) => {
      if (response && response.sucess !== false) {
        alert("Data submitted successfully!")
      }
      else {
        alert('Failed to submit data. Please try again.');
      }
    }, error => {
      alert('Failed to submit data. Please try again.');
    });
    this.contactForm.reset();
  }

  setDownloadFormId(projectName: string, value: string, fileLink: string) {
    this.contactFormProject = projectName;
    this.contactFormDownloadType = value;
    this.downloadFormId = value;
    this.downloadDocumentLink = fileLink;

    let contactFormStatus = sessionStorage.getItem("contactFormFilled");
    if (contactFormStatus == "true") {
        this.contactFormModalOpen=true;      
        this.downloadDocument();
    }
    else {      
      this.contactFormModalOpen=false;
     }
  }

  //downloading file and submitting data to google sheet
  downloadFile() {
    const sheetData = {
      Name: this.contcatFormName,
      PhoneNumber: this.contactFormPhoneNumber,
      Email: this.contactFormEmail,
      ProjectName: this.contactFormProject,
      DocumentType: this.contactFormDownloadType
    };

    this.googleFormDataSercice.StoreDownloadFormDataInGoogleSheet(sheetData).subscribe((response: any) => {
      if (response && response.sucess !== false) {
        sessionStorage.setItem("contactFormFilled", "true");
        this.downloadDocument();
        this.contactFormModalOpen=true;
      }
      else {
        alert('Failed to submit data. Please try again.');
      }
    }, error => {
      alert('Failed to submit data. Please try again.');
    });
  }

  downloadDocument() {
    const link = document.createElement('a');
    link.href = `${this.downloadDocumentLink}`;
    link.download = this.downloadFormId;
    link.click();
  }

  openBannerImages(image: string) {
    this.modalImageUrl = image;
    console.log(image);
  }

  //scroll to top button functionalities
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition > 100) {
      this.scrollToTopBtn = true;
    }
    else {
      this.scrollToTopBtn = false;
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  gettingBankIconUrl(bankName: string): string {
    switch (bankName) {
      case "SBI":
        return "https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207782/SBI_smdxe4.png";
      case "ICICI":
        return "https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207781/ICICI_racnzb.png";
      case "KVB":
        return "https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207782/KVB_l9e66q.png";
      case "HDFC":
        return "https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207781/HDFC_haiang.png";
      case "AXIS":
        return "https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207780/AXIS_hycydv.png";
      default:
        return "icon not available";
    }
  }

  faqs = [
    {
      Question: "What is Carpet Area?",
      Answer: "A carpet area is an area that can be covered by carpet, or a net usable area is called a carpet area. The carpet area is the distance between the inner walls."
    },
    {
      Question: "What is Build up Area?",
      Answer: "The built-up area in a flat is its carpet area, plus the space taken by the walls. The build-up area in a flat also includes other unusable areas like balcony, terrace etc. Built-up area = Carpet area + area of walls + area of balcony."
    },
    {
      Question: "What is Super Build up Area?",
      Answer: "Super built-up area is the built-up area of the property, along with the proportionate area of the common facilities in the housing project. These facilities may include the lobby, the lift shaft, the stairs, the swimming pool, the garden, the park and clubhouse, etc. Super built-up area = Built-up area + proportionate common area."
    }
  ];


  ngOnDestroy(): void {
    clearInterval(this.interval);
    sessionStorage.removeItem("contactFormFilled");
  }
}
