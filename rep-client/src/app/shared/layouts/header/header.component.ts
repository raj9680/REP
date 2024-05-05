import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public IsAdmin$ = new BehaviorSubject<boolean>(false);
  constructor(private _footerloaderService: SharedService) { }

  ngOnInit(): void {
    this._footerloaderService.IsFooter$.subscribe(x => {
      this.IsAdmin$.next(x);
    })
  }

}
