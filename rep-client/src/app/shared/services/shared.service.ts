import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public footerLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor() { }

}
