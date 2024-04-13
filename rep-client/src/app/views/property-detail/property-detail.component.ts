import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertySearchService } from '../services/property-search.service';
import { Chart, registerables } from 'node_modules/chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
})
export class PropertyDetailComponent implements OnInit {
  images: any[] = [];

  /* Mortage Fields */
  downPaymentPercentage: number = 20;
  interestRatePercentage: number = 5;
  loanTerms: number = 20;

  propertyTaxPercentage: any = 1.2;
  monthlyPropertyTax:any;
  monthlyPmiPercentage: any = 0;
  monthlyPmi: any = 0;
  pmiPercentage: any = 0;
  homeInsurance: any = 1500;
  hoa:any = 0;
  totalMonthlyPayment: any;
  
  downPaymentPrice: any;
  monthlyInterestRate: any;
  loanAmount: any;
  interestRate: any;

  indicators: boolean = true;
  selectedIndex: number = 0;
  slideInterval: number = 3000;
  autoSlide: boolean = false;
  listingKeyNumeric: string = '';
  PropertyDetail: any = null;
  myChart: any;

  @ViewChild('next') nextElement: ElementRef | any;
  @ViewChild('prev') prevElement: ElementRef | any;

  constructor(
    private route: ActivatedRoute,
    private readonly propertySearchService: PropertySearchService
  ) {}

  ngOnInit(): void {
    
    
    if (this.autoSlide) {
      this.autoSlideImages();
    }

    this.route.params.subscribe((params) => {
      this.listingKeyNumeric = params['id'];
    });

    this.propertySearchService
      .getPropertyDetailByKey(this.listingKeyNumeric)
      .subscribe((data) => {
        this.PropertyDetail = data;
        this.downPaymentPrice = this.PropertyDetail.listPrice;
        this.loanAmount = this.downPaymentPrice - this.downPaymentPrice * 0.2;
        this.interestRate = this.CalcMonthlyInterestRate(
          this.loanAmount,
          this.interestRatePercentage
        );
        this.images = this.PropertyDetail.imagesUrl;
      });
  }

  // Banner Image
  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  } // End

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  nextClick() {
    var elm =
      this.nextElement.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName('slide-parent');
    elm.append(item[0]);
  }

  prevClick() {
    var elm =
      this.nextElement.nativeElement.parentElement.parentElement.children[0];
    var item = elm.getElementsByClassName('slide-parent');
    elm.prepend(item[item.length - 1]);
  }
  // End

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  openGoogleMap(lat: string, log: string) {
    window.open('https://www.google.com/maps?q=' + lat + ',' + log, '_blank');
  }

  /* Monthly Interest Rate Calculator */
  CalcMonthlyInterestRate(loanAmt: any, intRate: any) {
    this.interestRate =
      (loanAmt *
        ((intRate / 12 / 100) *
          Math.pow(1 + intRate / 12 / 100, this.loanTerms * 12))) /
      (Math.pow(1 + intRate / 12 / 100, this.loanTerms * 12) - 1);
      
    this.monthlyPropertyTax = this.downPaymentPrice * (this.propertyTaxPercentage/100) / 12;
    this.monthlyPmi = this.downPaymentPrice * (this.monthlyPmiPercentage/100) / 12;
    this.MortageChart(loanAmt, this.interestRate, this.monthlyPropertyTax, this.homeInsurance);
    return Math.round(this.interestRate);
  }

  
  // Chart
  mortageData: any;
  MortageChart(principalAmount: any, interestRate: any, monthlyTax:any, homeInsurance:any) {
    this.mortageData = {
      labels: ['Principal & Interest', 'Total Interest', 'Total Property Tax', 'Total Home Insurance'],
      datasets: [{
        data: [
          Math.round(principalAmount + interestRate * this.loanTerms * 12),
          Math.round(interestRate * this.loanTerms * 12 - principalAmount),
          Math.round(monthlyTax * this.loanTerms * 12),
          Math.round(homeInsurance * this.loanTerms * 12)
        ],
      }],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(50, 168, 82)', 'rgb(209, 205, 75)'],
      hoverOffset: 4,
    }
  }
}
