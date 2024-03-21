import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OurProfessionalsService } from '../services/our-professionals.service';

@Component({
  selector: 'app-our-professional-detail',
  templateUrl: './our-professional-detail.component.html',
  styleUrls: ['./our-professional-detail.component.css']
})
export class OurProfessionalDetailComponent implements OnInit {
  agents: any[] = [];
  memberProperties: any = null;
  agent: any = "";
  memberKeyNumeric: string = '';
  officeKeyNumeric: string = '';
  public isDescriptionMore: boolean = false;
  page: number = 1;
  itemsPerPage = 6;
  totalItems : any; 
  constructor(private route: ActivatedRoute, private _agentService: OurProfessionalsService) {    
    this.route.params.subscribe(params => {
      this.memberKeyNumeric = params['id'].split('-')[0];
      this.officeKeyNumeric = params['id'].split('-')[1];
    });
   }

  ngOnInit(): void {
    this.agentDetail();
    this.agentProperties();
  }

  agentDetail() {

    this._agentService.getAgentDetailByKey(this.memberKeyNumeric).subscribe(data => {
      this.agent = data;
    });
  }
  agentProperties() {

    this._agentService.GetMemberPropertyList(this.memberKeyNumeric,this.officeKeyNumeric).subscribe(data => {
      this.memberProperties = data;
    });
  }
  gty(page: any){
    this._agentService.GetMemberPropertyList(this.memberKeyNumeric,this.officeKeyNumeric).subscribe((data: any) => {
      this.memberProperties = data;
      this.totalItems = data.properties.lenght;
    })
  }
  ngOnDestroy() {
    // this.routeSub.unsubscribe();
  }

}
