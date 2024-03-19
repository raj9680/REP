import { Component, HostListener, Input, OnInit } from '@angular/core';


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

  images = [
    {
      imageSrc: "https://myproagents.com/storage/81647581/photo-81647581-1.jpeg",
      imageAlt: "nature-one"
    },
    {
      imageSrc: "https://myproagents.com/storage/81647581/photo-81647581-3.jpeg",
      imageAlt: "nature-two"
    },
    {
      imageSrc: "https://myproagents.com/storage/81647581/photo-81647581-6.jpeg",
      imageAlt: "nature-three"
    },
    {
      imageSrc: "https://myproagents.com/storage/81647581/photo-81647581-12.jpeg",
      imageAlt: "nature-two"
    },
    {
      imageSrc: "https://myproagents.com/storage/81647581/photo-81647581-15.jpeg",
      imageAlt: "nature-three"
    }
  ]

  indiacators: boolean = true;
  selectedIndex: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}
