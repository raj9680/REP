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
  getAgentDetailByKey(key: string): Observable<any[]> {
    return  this._httpClient.get<any[]>(this.httpURL + `api/Member/GetOurProfessionalsDetails?key=` + key);
  }
  GetMemberPropertyList(memberkey: string,officekey: string): Observable<any[]> {
    return  this._httpClient.get<any[]>(this.httpURL + `api/Member/GetMemberPropertyList?memberKey=` + memberkey + '&officeKey=' + officekey);
  }

  SaveClientContactInfo(request: any): Observable<any> {
    return this._httpClient.post(this.httpURL + `api/Member/SaveClientContactInfo`, request);
  }
  SubmitMemberReview(request: any): Observable<any> {
    return this._httpClient.post(this.httpURL + `api/Member/SubmitMemberReview`, request);
  }
}