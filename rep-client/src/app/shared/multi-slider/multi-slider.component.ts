import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-multi-slider',
  templateUrl: './multi-slider.component.html',
  styleUrls: ['./multi-slider.component.css']
})
export class MultiSliderComponent {

@ViewChild('next') nextElement: ElementRef | any;
@ViewChild('prev') prevElement: ElementRef | any;

constructor() {
  
}


nextClick() {
  var elm = this.nextElement.nativeElement.parentElement.parentElement.children[0];
  var item = elm.getElementsByClassName("item");
  elm.append(item[0]);
}

prevClick() {
  var elm = this.nextElement.nativeElement.parentElement.parentElement.children[0];
  var item = elm.getElementsByClassName("item");
  elm.prepend(item[item.length - 1]);
}

}
