import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public IsAdmin$ = new BehaviorSubject<boolean>(false);
  public footerLoader: any = new BehaviorSubject<boolean>(false);

  constructor(private _footerloaderService: SharedService) {

    _footerloaderService.footerLoading.subscribe(result => {
      this.footerLoader = result;
    });
  }

  ngOnInit(): void {
    this._footerloaderService.IsFooter$.subscribe(x => {
      this.IsAdmin$.next(x);
    })
  }

}
