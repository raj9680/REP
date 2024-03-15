import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class HomePageService {
  getDiamond() {
    throw new Error('Method not implemented.');
  }


  private url = 'https://localhost:7047/api/Home/GetHomeProperties'; // Path to your JSON file



  constructor(private http: HttpClient) { }


  getFeaturedProperties(): Observable<any[]> {
    return this.http.get<any>(this.url).pipe(
      map(data => data.featured_properties)
    );
  }
  getDiamondProperties(): Observable<any[]> {
    return this.http.get<any>(this.url).pipe(
      map(data => data.diamond_properties)
    );
  }
}





