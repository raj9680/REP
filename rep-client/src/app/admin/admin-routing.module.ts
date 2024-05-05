import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RealtorsComponent } from './realtors/realtors.component';
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { EnquiryReceivedComponent } from './enquiry-received/enquiry-received.component';
import { EvaluationReceivedComponent } from './evaluation-received/evaluation-received.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {
      path: "", children: [
          { path: "dashboard", component: DashboardComponent },
          { path: "my-properties", component: MyPropertiesComponent },
          { path: "realtors", component: RealtorsComponent },
          { path: "enquiry-received", component: EnquiryReceivedComponent },
          { path: "enquiry-evaluation", component: EvaluationReceivedComponent },
          { path: "profile", component: MyProfileComponent }
      ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
