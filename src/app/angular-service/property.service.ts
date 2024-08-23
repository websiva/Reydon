import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { property } from '../models/property-model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  apiUrl: string = 'https://localhost:7277/Properties/GetAllProperties';
  constructor(private http: HttpClient) { }

  properties: property[] = [
    /*{
      id: 1,
      title: "Serenity Haven",
      description: "A luxurious villa offering tranquility and breathtaking views.",
      image: "plots/plot-1.png",
      size: "10000 sq ft",
      address: "123 Serenity Lane, Chennai, Tamil Nadu, India",
      amenities: ["Private Pool", "Spa", "Home Theater"],
      features: ["Panoramic Views", "Elegant Design"],
      mapUrl: "http://maps.example.com/serenityhaven"
    },
    {
      id: 2,
      title: "Sunset Retreat",
      description: "A beautiful villa with stunning sunset views and modern comforts.",
      image: "plots/plot-2.png",
      size: "11000 sq ft",
      address: "456 Sunset Drive, Coimbatore, Tamil Nadu, India",
      amenities: ["Infinity Pool", "Outdoor Lounge", "Gym"],
      features: ["Sunset Views", "Contemporary Design"],
      mapUrl: "http://maps.example.com/sunsetretreat"
    },
    {
      id: 3,
      title: "Opulent Oasis",
      description: "Experience unparalleled luxury in this opulent villa with extensive amenities.",
      image: "plots/plot-3.png",
      size: "12000 sq ft",
      address: "789 Opal Road, Madurai, Tamil Nadu, India",
      amenities: ["Private Spa", "Wine Cellar", "Game Room"],
      features: ["Exclusive Area", "Luxurious Finishes"],
      mapUrl: "http://maps.example.com/opulentoasis"
    },
    {
      id: 4,
      title: "Grandview Estate",
      description: "Spacious villa with expansive views and high-end finishes.",
      image: "plots/plot-4.png",
      size: "15000 sq ft",
      address: "101 Grandview Blvd, Tiruchirappalli, Tamil Nadu, India",
      amenities: ["Heated Pool", "Home Office", "Library"],
      features: ["Grand Views", "Modern Elegance"],
      mapUrl: "http://maps.example.com/grandviewestate"
    },
    {
      id: 5,
      title: "Harmony Heights",
      description: "A peaceful villa set on a hill, offering serene surroundings and luxury amenities.",
      image: "plots/plot-5.png",
      size: "13000 sq ft",
      address: "202 Harmony Hills, Salem, Tamil Nadu, India",
      amenities: ["Private Gym", "Outdoor Kitchen", "Jacuzzi"],
      features: ["Hilltop Views", "Quiet Neighborhood"],
      mapUrl: "http://maps.example.com/harmonyheights"
    },
    {
      id: 6,
      title: "Tranquil Meadows",
      description: "Luxurious villa surrounded by lush meadows and exquisite landscapes.",
      image: "plots/plot-6.png",
      size: "14000 sq ft",
      address: "303 Tranquil Path, Erode, Tamil Nadu, India",
      amenities: ["Swimming Pool", "Tennis Court", "Garden"],
      features: ["Peaceful Setting", "Spacious Grounds"],
      mapUrl: "http://maps.example.com/tranquilmeadows"
    },
    {
      id: 7,
      title: "Elegance Enclave",
      description: "An exclusive villa with sophisticated design and luxurious amenities.",
      image: "plots/plot-7.png",
      size: "15000 sq ft",
      address: "404 Elegance Avenue, Vellore, Tamil Nadu, India",
      amenities: ["Home Theater", "Private Pool", "Fitness Center"],
      features: ["Elegant Design", "High-end Finishes"],
      mapUrl: "http://maps.example.com/eleganceenclave"
    },
    {
      id: 8,
      title: "Prestige Manor",
      description: "A grand villa featuring regal architecture and modern comforts.",
      image: "plots/plot-8.png",
      size: "16000 sq ft",
      address: "505 Prestige Lane, Kanchipuram, Tamil Nadu, India",
      amenities: ["Indoor Pool", "Library", "Wine Cellar"],
      features: ["Regal Architecture", "Luxurious Interiors"],
      mapUrl: "http://maps.example.com/prestigemanor"
    },
    {
      id: 9,
      title: "Royal Crest Villas",
      description: "A collection of royal villas with unmatched luxury and exclusivity.",
      image: "plots/plot-9.png",
      size: "17000 sq ft",
      address: "606 Royal Crest Road, Tirunelveli, Tamil Nadu, India",
      amenities: ["Private Spa", "Outdoor Entertainment Area", "Home Office"],
      features: ["Exclusive Community", "Exceptional Design"],
      mapUrl: "http://maps.example.com/royalcrestvillas"
    },
    {
      id: 10,
      title: "Azure Ridge",
      description: "A stunning villa with panoramic views and a modern design.",
      image: "plots/plot-10.png",
      size: "18000 sq ft",
      address: "707 Azure Ridge, Cuddalore, Tamil Nadu, India",
      amenities: ["Infinity Pool", "Rooftop Terrace", "Cinema Room"],
      features: ["Breathtaking Views", "Contemporary Architecture"],
      mapUrl: "http://maps.example.com/azureridge"
    }*/
  ]

  GetAllProperty(): Observable<property[]> {
    /*this.http.get(this.apiUrl).pipe(catchError(error=>{
      console.error('Error fetching properties:', error);
      return of ([]);
    })).subscribe(data=>{
      this.properties = data as any[];
      return this.properties;
    })*/

    //return this.http.get<property[]>(this.apiUrl);
    return of(this.properties).pipe(catchError(error => {
      console.error("Error when fetching", error);
      return of([]);
    }))
  }


}
