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
      image: "https://myproagents.com/storage/81647581/photo-81647581-1.jpeg",
      thumbImage: "https://myproagents.com/storage/81647581/photo-81647581-1.jpeg"
    },
    {
      image: "https://myproagents.com/storage/81647581/photo-81647581-3.jpeg",
      thumbImage: "https://myproagents.com/storage/81647581/photo-81647581-3.jpeg"
    },
    {
      image: "https://myproagents.com/storage/81647581/photo-81647581-6.jpeg",
      thumbImage: "https://myproagents.com/storage/81647581/photo-81647581-6.jpeg"
    },
    {
      image: "https://myproagents.com/storage/81647581/photo-81647581-12.jpeg",
      thumbImage: "https://myproagents.com/storage/81647581/photo-81647581-12.jpeg"
    },
    {
      image: "https://myproagents.com/storage/81647581/photo-81647581-15.jpeg",
      thumbImage: "https://myproagents.com/storage/81647581/photo-81647581-1.jpeg"
    }
  ]

  
  indicators: boolean = true;
  selectedIndex: number = 0;
  slideInterval: number = 3000;
  autoSlide: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.autoSlide) {
      this.autoSlideImages()
    }
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
}
