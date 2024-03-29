import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  readonly httpURL;
  constructor(private http: HttpClient) {
    this.httpURL = environment.apiEndpoint;
    // this.httpURL = "https://musing-lehmann.108-175-0-196.plesk.page/";
  }
   
  
  getFeaturedProperties(): Observable<any[]> {
    return this.http.get<any>(this.httpURL + `api/Home/GetHomeProperties`).pipe(
      map(data => data.featured_properties)
    );
  }


  getDiamondProperties(): Observable<any[]> {
    return this.http.get<any>(this.httpURL + `api/Home/GetHomeProperties`).pipe(
      map(data => data.diamond_properties)
    );
  }

  // getDiamondProperties(): Observable<any[]> {
  //   return this.http.get<any>("http://localhost:4200/assets/demo-api/sampleMultiProperty.json").pipe(
  //     map(data => data.diamond_properties)
  //   );
  // }
}