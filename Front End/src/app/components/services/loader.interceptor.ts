import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable, timer } from 'rxjs';
import { LoderService } from './loder.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loderService: LoderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const requestStartTime = Date.now();
    this.loderService.show();

    
    return next.handle(request).pipe(
      finalize(() => {
        const elapsedTime = Date.now() - requestStartTime;
        const remainingTime = 1000 - elapsedTime;
        
        if (remainingTime > 0) {
          // Wait remaining time if API was too fast
          timer(remainingTime).subscribe(() => this.loderService.hide());
        } else {
          // Hide immediately if 1 sec already passed
          this.loderService.hide();
        }
      })
    );
  }
}
