import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { WhyRepComponent } from './About/why-rep/why-rep.component';
import { JoinRepComponent } from './About/join-rep/join-rep.component';
import { OurProfessionalsComponent } from './our-professionals/our-professionals.component';
import { PropertySearchComponent } from './property-search/property-search.component';
import { HomeEvaluationComponent } from './home-evaluation/home-evaluation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { OurProfessionalDetailComponent } from './our-professional-detail/our-professional-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskDirective } from '../shared/Directives/inputmask.directive';
import { AboutUsComponent } from './About/about-us/about-us.component';
import { ListingTypesComponent } from './listing-types/listing-types.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';



@NgModule({
  declarations: [
    WhyRepComponent,
    JoinRepComponent,
    OurProfessionalsComponent,
    PropertySearchComponent,
    HomeEvaluationComponent,
    ContactUsComponent,
    HomePageComponent,
    PropertyDetailComponent,
    OurProfessionalDetailComponent,
    InputMaskDirective,
    AboutUsComponent,
    ListingTypesComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD4BkHYhOwZ8xIEsqj_eR0vnsY2kGwCJrc'
    }),
    ChartModule,
    AgmJsMarkerClustererModule,    
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    DialogModule
  ]
  // providers: [ ]
})
export class ViewsModule { }
