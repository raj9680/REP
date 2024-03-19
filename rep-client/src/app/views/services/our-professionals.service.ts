import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OurProfessionalsService {
  readonly httpURL;
  constructor(private _httpClient: HttpClient) {
    this.httpURL = environment.apiEndpoint;
   }

  getAgentLists(): Observable<any[]> {
    return  this._httpClient.get<any[]>(this.httpURL + `api/Member/GetOurProfessionals?skip=0&take=10`);
  }
}