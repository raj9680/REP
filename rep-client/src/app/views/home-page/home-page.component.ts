import { Component, Input, OnInit } from '@angular/core';
import { HomePageService } from '../services/home-page.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  featuredProperties: any[] | undefined;
  diamondProperties: any[] | undefined;
  
  constructor(private homePage: HomePageService) { }
  imageObject: Array<object> = [{
    image: 'https://mukeshswami.com/frontend/images/home/citycenter.webp',
    thumbImage: 'https://mukeshswami.com/frontend/images/home/citycenter.webp',
    alt: 'City Center',
    title: 'City Center',
    
}, {
    image: 'https://mukeshswami.com/frontend/images/home/north.webp',
    thumbImage: 'https://mukeshswami.com/frontend/images/home/north.webp',
    title: 'North Calgary',
    alt: 'North Calgary',
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'https://mukeshswami.com/frontend/images/home/north-East.webp',
  thumbImage: 'https://mukeshswami.com/frontend/images/home/north-East.webp',
  title: 'North East Calgary',
  alt: 'North East Calgary',
  order: 2 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'https://mukeshswami.com/frontend/images/home/east-west.webp',
  thumbImage: 'https://mukeshswami.com/frontend/images/home/east-west.webp',
  title: 'East Calgary',
  alt: 'East Calgary',
  order: 3 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'https://mukeshswami.com/frontend/images/home/south-east.webp',
  thumbImage: 'https://mukeshswami.com/frontend/images/home/south-east.webp',
  title: 'South East Calgary',
  alt: 'South East Calgary',
  order: 4 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'https://mukeshswami.com/frontend/images/home/south-west.webp',
  thumbImage: 'https://mukeshswami.com/frontend/images/home/south-west.webp',
  title: 'North West Calgary',
  alt: 'North West Calgary',
  order: 5 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'https://mukeshswami.com/frontend/images/home/north-west.webp',
  thumbImage: 'https://mukeshswami.com/frontend/images/home/north-west.webp',
  title: 'West Calgary',
  alt: 'West Calgary',
  order: 6 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}
];
  ngOnInit(): void {
    this.homePage.getFeaturedProperties().subscribe(properties => {
      this.featuredProperties = properties;
    });
    //getDiamondProperties
    this.homePage.getDiamondProperties().subscribe(properties => {
      this.diamondProperties = properties;
    });
    console.log("Hi");
  }

  getDiamond(): void {
  
  }

  alert() {
    return null;
  }

}
