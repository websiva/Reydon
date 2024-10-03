import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { PropertyDataService } from '../angular-service/property-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-explore-by-cities',
  standalone:true,
  imports:[CommonModule,RouterModule,RouterOutlet],
  templateUrl: './explore-by-cities.component.html',
  styleUrl: './explore-by-cities.component.css'
})
export class ExploreByCitiesComponent implements OnInit {
  cities=['Chennai','Coimbatore','Madurai','Trichy']

  realEstateProperties: any[] = []; 
  propertyCountByZone: any = {}; 

  constructor(private router:Router,private propertyDataService:PropertyDataService){}

  gotoProjects(city:string){
    this.router.navigate(['projects'],{queryParams:{zone:city}});
  }

  ngOnInit(): void {
    this.loadData();
  }

  
  loadData() {
    this.propertyDataService.getAllData().subscribe(data => {
      this.realEstateProperties = data;
      this.calculatePropertiesByZone(); 
      console.log(this.propertyCountByZone); // Calculate properties by zone
    });
  }

  calculatePropertiesByZone() {
    this.propertyCountByZone = this.realEstateProperties.reduce((count: any, property: any) => {
      const zone = property.AddressDetails?.Zone; // Access 'Zone' from AddressDetails
      if (zone) {  // Ensure that Zone is present
        if (!count[zone]) {
          count[zone] = 0;
        }
        count[zone] += 1;
      }
      return count;
    }, {});
  }

  gettingCityIconsUrl(city:string):string{
    switch(city){
      case "Chennai":
        return "https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207779/Chennai_a5tuug.jpg";
      case "Coimbatore":
        return "https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207779/Coimbatore_ww9aal.jpg";
      case "Madurai":
        return "https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207780/Madurai_q4pjg4.jpg";
      case "Trichy":
        return "https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207780/Trichy_fjb1iq.jpg";
      default:
        return "https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207779/Chennai_a5tuug.jpg"
    }
  }

}
