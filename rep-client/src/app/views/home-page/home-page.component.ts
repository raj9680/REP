import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomePageService } from '../services/home-page.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [HomePageService]
})
export class HomePageComponent implements OnInit, AfterViewInit {


  featuredProperties: any[] | undefined;
  diamondProperties: any[] | undefined;
  propertiesCommunities: any[] | undefined;
  evaluationAddress: any = '';
  evaluationEMail: any = '';
  searchQueryText: string = '';
  inlineSearchLoader: boolean = false;

  @ViewChild('catNext') nextElement: ElementRef | any;
  @ViewChild('catPrev') prevElement: ElementRef | any;

  private searchSubject = new Subject<string>();
  @ViewChild('addresstext') addresstext: any;
  searchResult: any = null;

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
    //Seach with debounce
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe((searchValue) => {
      this.performSearch(searchValue);
    });

    //getFeaturedProperties
    this.homePage.getFeaturedProperties().subscribe(properties => {
      this.featuredProperties = properties;
    });

    //getDiamondProperties
    this.homePage.getDiamondProperties().subscribe(properties => {
      this.diamondProperties = properties;
    });

    this.homePage.getPropertyCommunities().subscribe(data => {
      
      let _propertiesCommunities: any[] = [];
      data.forEach((value) => {
        let obj = {
          total_Count: value.total_Count,
          city: value.city,
          img_url: this.getRandomImage()
        }
        _propertiesCommunities.push(obj);
      }); 
      this.propertiesCommunities = _propertiesCommunities;
    });
  }
getRandomImage(){
  let index = Math.floor(Math.random() * 9) + 1;
  let imagesUrl = [
    'https://myproagents.com/storage/city_images/PHIMV0nMGDzZYfwBPrV6W5wIbiA1MWk3q1eWrUbr.jpg',
    'https://calgaryhomes.ca/thumbs/282x195/uploads/calgary-city-centre.jpg',
    'https://myproagents.com/storage/city_images/PHIMV0nMGDzZYfwBPrV6W5wIbiA1MWk3q1eWrUbr.jpg',
    '../../../assets/images/home/north.webp',
    '../../../assets/images/home/north-East.webp',
    '../../../assets/images/home/east-west.webp',
    '../../../assets/images/home/south-east.webp',
    '../../../assets/images/home/south-west.webp',
    '../../../assets/images/home/north-west.webp',
    '../../../assets/images/home/west-calgary.webp'
  ]
  return imagesUrl[index];
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
  display: boolean = false;

  showHomeEvauationDialog() {
    this.display = true;
  }

  ChangePropertySearchVal() {
    this.searchSubject.next(this.searchQueryText);
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
  ngOnDestroy() {
    this.searchSubject.complete();
  }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement, {
      types: ['geocode'],
      componentRestrictions: { country: 'CA' },
      strictBounds: true,
      bounds: {
        north: 60.0000, // Adjust these coordinates as needed to cover Alberta
        south: 48.9993,
        east: -110.0000,
        west: -120.0000
      }
    });
    autocomplete.addListener('place_changed', () => {
      const place: any = autocomplete.getPlace();
      if (!place.geometry) {
        //console.log("Place details not found for the input: ", input.value);
        return;
      }

      if (place.address_components.some((component: any) =>
        component.types.includes('country') && component.short_name === 'CA'
      )) {
        const province = place.address_components.find((component: any) =>
          component.types.includes('administrative_area_level_1') && component.short_name === 'AB'
        );
        this.evaluationAddress = place.formatted_address;

        if (province) {
          const address = place.formatted_address;
          console.log("Address from the Province of Alberta in Canada: ", address);
          // Proceed with the address from Alberta
        } else {
          console.log("Address is not from the Province of Alberta in Canada.");
          // Handle addresses not from Alberta
        }
      } else {
        console.log("Address is not from Canada.");
        // Handle addresses not from Canada
      }
    });
  }
}
