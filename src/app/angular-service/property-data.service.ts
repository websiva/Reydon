import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyDataService {
  //private jsonUrl = 'assets/data/LayoutInputFormat.json';
  private jsonUrl = 'https://gist.githubusercontent.com/websiva/0af1545b9c067ab87477357083e9d505/raw/ReydonData.json';
  constructor(private http:HttpClient) { }

  //Retriving all data from json file
  getAllData():Observable<any[]>{
   return this.http.get<any[]>(this.jsonUrl);
  }  

}
