import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutServiceService {

  apiUrl:string = "https://localhost:7277/";

  constructor(private http:HttpClient) { }

  
}
