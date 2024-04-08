import { Component, OnInit } from '@angular/core';
import { PropertySearchService } from '../services/property-search.service';
import { ClusterStyle } from '@agm/js-marker-clusterer/services/google-clusterer-types';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HomePageService } from '../services/home-page.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css']
})
export class PropertySearchComponent implements OnInit {


  lat: number = 51.0642845;
  lng: number = -114.1395738;
  
  propertiesFound: any[] = [];
  page: number = 1;
  itemsPerPage = 10;
  totalItems : any; 
  private searchSubject = new Subject<string>();
  inlineSearchLoader: boolean = false;
  searchResult: any = null;
  searchQueryText: string = '';
  constructor(private _propertySearchService: PropertySearchService, private homePage: HomePageService, private route: ActivatedRoute,) {
    this.route.params.subscribe(params => {
      this.searchQueryText = params['query'];
      console.log(params['query'])
    });
   }

  ngOnInit(): void {
    this.getPropertyAdvanceSearch();
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe((searchValue) => {
      this.performSearch(searchValue);
    });
  }
  performSearch(searchValue: string) {
    // Perform the actual search operation here
    if (searchValue.length > 2) {
      this.inlineSearchLoader = true;
      this.homePage.GetPropertyBySearch(searchValue).subscribe((data: any) => {
        this.searchResult = data;
        this.inlineSearchLoader = false;
      });
    }
    else {
      this.searchResult = null;
    }
  }
  ChangePropertySearchVal() {
    this.searchSubject.next(this.searchQueryText);
  }
  getPropertyAdvanceSearch(){
    this.propertiesFound = [];
    this._propertySearchService.getPropertyAdvanceSearch(this.searchQueryText ? this.searchQueryText : '').subscribe((data: any) => {
      this.propertiesFound = data;
    })
  }
  
  gty(page: any){
    this.getPropertyAdvanceSearch();
  }
  markerClicked(event:any){
    debugger;
  }

  
  clusterStyles: ClusterStyle[] =  [
    {
        textColor: "white",
        url: 'data:image/svg+xml;charset=UTF-8,' +
        encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" xmlns:xlink="http://www.w3.org/1999/xlink">' +
          '<circle cx="20" cy="20" r="17" fill="#10579f" stroke="white" stroke-width="2" />' + // Blue circle background with white border
          '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="8">' +
          '</text>' +
          '</svg>'
        ),
        height: 40,
      width: 40,
      textSize: 11,
     // anchor: [5, 0], // Adjust text position within cluster
    }
];
markerIcon = {
  url: '../../../assets/images/advanced-marker.png', // Blue marker icon
  scaledSize: new google.maps.Size(40, 40) // Adjust marker size if needed
};



}
