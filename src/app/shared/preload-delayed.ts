import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';

export class PreloadDelayed {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if(route.data == null) {
      return;
    }

    if ((route.data !== undefined) && (route.data.preload)) {
      return Observable.of(true).delay(3000).flatMap(() => fn());
    }
    if (route.data.preload) {
      return fn();
    }
  }
}