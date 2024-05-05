import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { RealtorsComponent } from './realtors/realtors.component';
import { EnquiryReceivedComponent } from './enquiry-received/enquiry-received.component';
import { EvaluationReceivedComponent } from './evaluation-received/evaluation-received.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MyPropertiesComponent,
    RealtorsComponent,
    EnquiryReceivedComponent,
    EvaluationReceivedComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
