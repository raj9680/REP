import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  imageObject: Array<object> = [{
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    alt: 'alt of image',
    title: 'title of image 1'
}, {
    image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
    title: 'Image title 2',
    alt: 'Image alt',
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}
];
  ngOnInit(): void {
  }

}
