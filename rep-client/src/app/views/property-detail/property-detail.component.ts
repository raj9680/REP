import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertySearchService } from '../services/property-search.service';


interface carouselImage {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  images: any[] = []

  
  indicators: boolean = true;
  selectedIndex: number = 0;
  slideInterval: number = 3000;
  autoSlide: boolean = false;
  listingKeyNumeric: string = '';
  PropertyDetail:any = null;
  constructor(private route: ActivatedRoute, private readonly propertySearchService: PropertySearchService) { }

  ngOnInit(): void {
    if(this.autoSlide) {
      this.autoSlideImages()
    }
    this.route.params.subscribe(params => {
      this.listingKeyNumeric = params['id'];
    });
    this.propertySearchService.getPropertyDetailByKey(this.listingKeyNumeric).subscribe(data => {
      console.log(data);
      this.PropertyDetail = data;
      this.images = this.PropertyDetail.imagesUrl;
    });
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if(this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }
  // openGoogleMap(lat:string, log:string){
  //   // window.open('https://www.google.com/maps?q=51.06263052,-114.04455602', '_blank').focus();
    
  // }
  openGoogleMap(lat:string, log:string){
    window.open('https://www.google.com/maps?q='+lat+','+log, '_blank');
}
}
