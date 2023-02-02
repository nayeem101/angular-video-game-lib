import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  construct() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': environment.RAPID_API_KEY,
        'x-rapidapi-host': environment.RAPID_API_HOST,
      },
      setParams: {
        key: environment.RAWG_GAME_DB_API_KEY,
      },
    });

    return next.handle(req);
  }
}
