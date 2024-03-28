import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingTypeService } from '../services/listing-types.service';

@Component({
  selector: 'app-listing-types',
  templateUrl: './listing-types.component.html',
  styleUrls: ['./listing-types.component.css']
})
export class ListingTypesComponent implements OnInit {
  listingTypes: string = '';
  properties: any[] = [];
  page: number = 1;
  itemsPerPage = 12;
  totalItems : any; 
  constructor(private route: ActivatedRoute,private propertyService: ListingTypeService) {
    this.route.params.subscribe(params => {
      this.listingTypes = params['listingTypes'];
    });
   }

  ngOnInit(): void {
    if(this.listingTypes == 'diamond'){
     //getDiamondProperties
     this.propertyService.getDiamondProperties().subscribe(data => {
      this.properties = data;
    });
    }
    else{
      this.propertyService.getFeaturedProperties().subscribe(data => {
        this.properties = data;
      });
    }
  }

  gty(page: any){
    if(this.listingTypes == 'diamond'){
      //getDiamondProperties
      this.propertyService.getDiamondProperties().subscribe(data => {
       this.properties = data;
     });
     }
     else{
       this.propertyService.getFeaturedProperties().subscribe(data => {
         this.properties = data;
       });
     }
  }

}
