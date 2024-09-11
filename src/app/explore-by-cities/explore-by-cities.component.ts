import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyDataService } from '../angular-service/property-data.service';

@Component({
  selector: 'app-explore-by-cities',
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

}
