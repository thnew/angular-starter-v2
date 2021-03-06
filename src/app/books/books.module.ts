import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { PagesPipe } from './shared/pages.pipe';
import { OrderBtnDirective } from './shared/order-btn.directive';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookNewComponent } from './book-new/book-new.component';

import { BooksService } from './shared/books.service';
import { LeaveGuard } from './shared/leave.guard';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [BooksComponent],
  declarations: [BooksComponent, BookListComponent, BookPreviewComponent, BookDetailsComponent, PagesPipe, OrderBtnDirective, BookEditComponent, BookNewComponent],
  providers: [BooksService, LeaveGuard]
})
export class BooksModule {
}
