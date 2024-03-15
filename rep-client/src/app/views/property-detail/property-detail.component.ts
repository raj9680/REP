import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }
  
  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    if (event.target.scroll > 100) {
      alert("hello");
    }}}
