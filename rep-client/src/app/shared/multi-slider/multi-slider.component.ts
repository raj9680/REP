import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-multi-slider',
  templateUrl: './multi-slider.component.html',
  styleUrls: ['./multi-slider.component.css']
})
export class MultiSliderComponent {

constructor(private el: ElementRef) {
  
}

@HostListener('click')
nextClick() {
  var elm = this.el.nativeElement.parentElement;
  console.log(elm);
}

prevClick() {
  throw new Error('Method not implemented.');
}

}
