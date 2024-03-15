import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OurProfessionalsService {
  constructor(private _httpClient: HttpClient) { }

  getAgentLists(): Observable<any[]> {
    return  this._httpClient.get<any[]>("http://localhost:4200/assets/demo-api/agents.json");
  }
}
