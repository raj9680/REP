import { Component, OnInit } from '@angular/core';
import { OurProfessionalsService } from '../services/our-professionals.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-our-professionals',
  templateUrl: './our-professionals.component.html',
  styleUrls: ['./our-professionals.component.css']
})
export class OurProfessionalsComponent implements OnInit {

  agents: any[] = [];
  page: number = 1;
  itemsPerPage = 8;
  totalItems : any; 
  agentName: string = "";

  constructor(private _agentService: OurProfessionalsService, public _sharedService: SharedService) { }

  ngOnInit(): void {
    this.getAgents();
  }

  getAgents() {
    this._agentService.getAgentLists(this.agentName).subscribe(data => {
      this.agents = data;
      this.page = 0;
      this.totalItems = data.length;
    });
  }

  gty(page: any){
    this._agentService.getAgentLists(this.agentName).subscribe((data: any) => {
      this.agents = data;
      this.totalItems = data.lenght;
    })
  }
}
