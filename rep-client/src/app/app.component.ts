import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SharedService } from './shared/services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
  title = 'Real Estate Professional';
  constructor(private router: Router, public _sharedService: SharedService) 
  {   }

  ngOnInit(): void {
    this.router.events.subscribe((event) => { 
        if (!(event instanceof NavigationEnd)) { 
            return; 
        } 
        window.scrollTo(0, 0) 
      });

    this.delayFooterLoad();
  }

  delayFooterLoad() {
    setTimeout(() => {
        this._sharedService.footerLoading.next(true);
    }, 2000);
  }
}
