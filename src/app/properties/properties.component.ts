import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { property } from '../models/property-model';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent implements OnInit {
  properties:property[]=[];
  isLoading:boolean=true;
  apiUrl: string = 'https://localhost:7277/Properties/GetAllProperties';

  constructor(private http:HttpClient,private route:ActivatedRoute){

  }

  ngOnInit(): void {
    this.loadProperty();
  }

  loadProperty(){
    this.route.data.subscribe(data=>{
      this.properties=data['properties'];
      console.log(this.properties);
      this.isLoading=false;
    })

    /*this.http.get(this.apiUrl).pipe(
      catchError(error=>{
        console.error('Error fetching properties:', error);
        this.isLoading=false;
        return of ([]);
      })
    ).subscribe(data=>{
      this.properties=data as any[];
      this.isLoading=false;
    });*/
  }



  bookProperty(propertyId:number){
    console.log("Property booked:", propertyId);
  }

}
