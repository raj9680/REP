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

  GetPropertyBySearch(searchQueryText: string): Observable<any> {
    return this.http.post<any>(this.httpURL + `api/Home/GetSearchProperty?searchQueryText=` + searchQueryText, null);
  }
}