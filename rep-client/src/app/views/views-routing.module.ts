import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertySearchComponent } from './property-search/property-search.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OurProfessionalsComponent } from './our-professionals/our-professionals.component';
import { OurProfessionalDetailComponent } from './our-professional-detail/our-professional-detail.component';
import { HomeEvaluationComponent } from './home-evaluation/home-evaluation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WhyRepComponent } from './About/why-rep/why-rep.component';
import { JoinRepComponent } from './About/join-rep/join-rep.component';
import { AboutUsComponent } from './About/about-us/about-us.component';

const routes: Routes = [
  {
      path: "", children: [
          { path: "home", component:HomePageComponent },
          { path: "property-search", component: PropertySearchComponent },
          { path: "property-detail/:id", component: PropertyDetailComponent },
          { path: "our-professionals", component: OurProfessionalsComponent },
          { path: "our-professional/:id", component: OurProfessionalDetailComponent },
          { path: "home-evaluation", component: HomeEvaluationComponent },
          { path: "contact-us", component: ContactUsComponent },
          { path: "about-us", component: AboutUsComponent },
          { path: "why-rep", component: WhyRepComponent },
          { path: "join-rep", component: JoinRepComponent },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
