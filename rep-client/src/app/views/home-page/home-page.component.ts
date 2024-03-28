import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomePageService } from '../services/home-page.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [HomePageService]
})
export class HomePageComponent implements OnInit {

  math = Math;
  featuredProperties: any[] | undefined;
  diamondProperties: any[] | undefined;
  @ViewChild('catNext') nextElement: ElementRef | any;
  @ViewChild('catPrev') prevElement: ElementRef | any;
  
  constructor(private homePage: HomePageService, public _sharedService: SharedService) { }
  imageObject: Array<object> = [
    {
    image: 'https://mukeshswami.com/frontend/images/home/citycenter.webp',
    thumbImage: 'https://mukeshswami.com/frontend/images/home/citycenter.webp',
    alt: '1',
    title: 'City Center',
    }, 
    {
    image: 'https://mukeshswami.com/frontend/images/home/north.webp',
    thumbImage: 'https://mukeshswami.com/frontend/images/home/north.webp',
    title: 'North Calgary',
    alt: '2',
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    },
    {
      image: 'https://mukeshswami.com/frontend/images/home/north-East.webp',
      thumbImage: 'https://mukeshswami.com/frontend/images/home/north-East.webp',
      title: 'North East Calgary',
      alt: '3',
      order: 2 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    },
    {
      image: 'https://mukeshswami.com/frontend/images/home/east-west.webp',
      thumbImage: 'https://mukeshswami.com/frontend/images/home/east-west.webp',
      title: 'East Calgary',
      alt: '4',
      order: 3 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    },
    {
      image: 'https://mukeshswami.com/frontend/images/home/south-east.webp',
      thumbImage: 'https://mukeshswami.com/frontend/images/home/south-east.webp',
      title: 'South East Calgary',
      alt: '5',
      order: 4 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    },
    {
      image: 'https://mukeshswami.com/frontend/images/home/south-west.webp',
      thumbImage: 'https://mukeshswami.com/frontend/images/home/south-west.webp',
      title: 'North West Calgary',
      alt: '6',
      order: 5 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    },
    {
      image: 'https://mukeshswami.com/frontend/images/home/north-west.webp',
      thumbImage: 'https://mukeshswami.com/frontend/images/home/north-west.webp',
      title: 'West Calgary',
      alt: '7',
      order: 6 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    }
  ];
  
  ngOnInit(): void {
    //getFeaturedProperties
    this.homePage.getFeaturedProperties().subscribe(properties => {
      this.featuredProperties = properties;
      console.log("featured-prpperties", this.featuredProperties);
    });
    
    //getDiamondProperties
    this.homePage.getDiamondProperties().subscribe(properties => {
      this.diamondProperties = properties;
      console.log("diamond-prpperties", this.diamondProperties);
    });
  }

  // Community
  prevClick() {
    var elm = this.nextElement.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0];
    var item = elm.getElementsByClassName("cat");
    elm.prepend(item[item.length - 1]);
  }

  nextClick() {
    var elm = this.nextElement.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[1].children[0].children[0].children[0];
    var item = elm.getElementsByClassName("cat");
    elm.append(item[0]);
  }
  // Community
}
