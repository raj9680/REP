import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertySearchService {

  readonly httpURL;
  constructor(private http: HttpClient) {
    this.httpURL = environment.apiEndpoint;
   }

   getPropertyDetailByKey(listingKeyNumeric: string): Observable<any[]> {
    return this.http.get<any>(this.httpURL + `api/Property/GetPropertyDetailByKey?key=` + listingKeyNumeric);
  }

}
