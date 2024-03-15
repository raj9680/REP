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

  private routeSub: any;
  agents: any[] = [];
  agent: any = "";
  constructor(private route: ActivatedRoute, private _agentService: OurProfessionalsService) { }

  ngOnInit(): void {
    this.agentDetail();
  }

  agentDetail() {
    this.route.params.subscribe(params => {
      this.routeSub = params['id'];
    });

    this._agentService.getAgentLists().subscribe(data => {
      this.agent = data.find(o => o.agent_id == this.routeSub);
      console.log(this.agent);
    });
  }

  ngOnDestroy() {
    // this.routeSub.unsubscribe();
  }

}
