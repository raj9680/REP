import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _httpClient: HttpClient) { }



}
