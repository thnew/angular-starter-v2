import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BookNewComponent } from "app/books/book-new/book-new.component";

@Injectable()
export class LeaveGuard implements CanDeactivate<BookNewComponent> {
  canDeactivate(target: BookNewComponent)
   {
     if (!target.isSaved()) {
     return window.confirm('Do you really want to cancel?');
   } else {
     return true;
   }
  }
}
