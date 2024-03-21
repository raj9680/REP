import { Component, OnInit } from '@angular/core';
import { PropertySearchService } from '../services/property-search.service';

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css']
})
export class PropertySearchComponent implements OnInit {


  lat: number = 55.415091939445745;
  lng: number = -111.23047813876623;
  
  propertiesFound: any[] = [];
  constructor(private _propertySearchService: PropertySearchService) { }

  ngOnInit(): void {
    this.getPropertiesBySearch("any_query");
  }

  getPropertiesBySearch(query: any) {
    this._propertySearchService.getPropertyBySearch("any_query").subscribe(data => {
      this.propertiesFound = data;
      console.log(data);
    })
  }
}
