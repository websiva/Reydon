import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyDataService {
  //private jsonUrl = 'assets/data/LayoutInputFormat.json';
  private jsonUrl = environment.jsonUrl;
  constructor(private http: HttpClient) { }

  //Retriving all data from json file
  getAllData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl).pipe(
      catchError(error => {
        console.error('Error fetching data:', error);
        return of([]); // Return an empty array on error
      })
    );
  }
}
