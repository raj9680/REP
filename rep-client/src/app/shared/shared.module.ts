import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MultiSliderComponent } from './multi-slider/multi-slider.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MultiSliderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent, FooterComponent
  ]
})
export class SharedModule { }
