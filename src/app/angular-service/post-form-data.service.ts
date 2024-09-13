import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostFormDataService {

  constructor(private http: HttpClient) { }


  StoreDownloadFormDataInGoogleSheet(sheetData: any): Observable<any> {
    const sheetDbUrl = 'https://sheetdb.io/api/v1/t882yb3yhk1gw?sheet=download data';

    return this.http.post(sheetDbUrl, sheetData).pipe(
      tap((response) => console.log('Data sent successfully', response)),
      catchError((error) => {
        console.error('Error sending data', error);
        return of({ success: false }); // Return an object indicating failure
      })
    );
  }

  StoreContactUsPageFormData(sheetData:any):Observable<any>{
    const sheetDbUrl = 'https://sheetdb.io/api/v1/t882yb3yhk1gw?sheet=Contact Us Data';

    return this.http.post(sheetDbUrl, sheetData).pipe(
      tap((response) => console.log('Data sent successfully', response)),
      catchError((error) => {
        console.error('Error sending data', error);
        return of({ success: false }); // Return an object indicating failure
      })
    );
  }

  StoreProjectContactUsPageFormData(sheetData:any):Observable<any>{
    const sheetDbUrl = 'https://sheetdb.io/api/v1/t882yb3yhk1gw?sheet=Project ContactForm';

    return this.http.post(sheetDbUrl, sheetData).pipe(
      tap((response) => console.log('Data sent successfully', response)),
      catchError((error) => {
        console.error('Error sending data', error);
        return of({ success: false }); // Return an object indicating failure
      })
    );
  }
}
