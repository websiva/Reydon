import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyDataService {
  //private jsonUrl = 'assets/data/LayoutInputFormat.json';
  private jsonUrl = 'https://gist.githubusercontent.com/websiva/0af1545b9c067ab87477357083e9d505/raw/f32e0734fff58b2840f689e6bae6dd9713e7ef3a/ReydonData.json';
  constructor(private http:HttpClient) { }

  //Retriving all data from json file
  getAllData():Observable<any[]>{
   return this.http.get<any[]>(this.jsonUrl);
  }

  //Retriving categories for all projects from objects
  getUniqueCategories(): Observable<string[]> {
    return this.getAllData().pipe(
      map(data => this.gettingUniqueCategories(data))
    );
  }

  //extract unique categories
  gettingUniqueCategories(data:any[]):string[]{
    const categories = data.map(item=>item.Category);
    return [...new Set(categories)]
  }

  //Retriving City from objects
  getCities():Observable<string[]>{
    return this.getAllData().pipe(
      map(data=>this.getUniqueCities(data))
    );
  }

  //extract unique city
  getUniqueCities(data:any[]):string[]{
    const cities = data.map(item=>item.AddressDetails.Taluk);
    return [...new Set(cities)];
  }

  //Retriving zone from objects
  getZones():Observable<string[]>{
    return this.getAllData().pipe(
      map(data=>this.getUniqueZones(data))
    );
  }

  //Extract unique zone from objects
  getUniqueZones(data:any[]):string[]{
    const zones = data.map(item=>item.AddressDetails.Zone)
    return [...new Set(zones)];
  }

  

}
