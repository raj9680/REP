import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

}
