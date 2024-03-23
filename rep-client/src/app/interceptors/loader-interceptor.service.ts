import { Injectable } from '@angular/core';
import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, delay, finalize, tap } from 'rxjs';
import { SharedService } from '../shared/services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class LoaderInterceptorService  implements HttpInterceptor {

  constructor( private _loaderService: SharedService) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    this._loaderService.isLoading.next(true);
    return next.handle(req).pipe(
      delay(1000),
      finalize(() => {
        this._loaderService.isLoading.next(false);
      })
    );
  }


}
