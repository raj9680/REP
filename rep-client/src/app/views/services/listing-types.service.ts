import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListingTypeService {

  readonly httpURL;
  constructor(private http: HttpClient) {
    this.httpURL = environment.apiEndpoint;
  }
   
  
  getFeaturedProperties(): Observable<any[]> {
    return this.http.get<any>(this.httpURL + `api/Property/GetAllFeatureProperties`);
  }


  getDiamondProperties(): Observable<any[]> {
    return this.http.get<any>(this.httpURL + `api/Property/GetAllDiamondProperties`);
  }
}
