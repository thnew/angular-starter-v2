import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from '../shared/books.service';
import { IBook } from '../shared/custom-types';
import { PagesPipe } from '../shared/pages.pipe';
import { OrderBtnDirective } from '../shared/order-btn.directive';

@Component({
  selector: 'thomas-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  public book: IBook;
  public pagesCount: string;
  
  constructor(private bookService: BooksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: { isbn: string }) => {
      this.bookService
        .getBook(params.isbn)
        .subscribe(book => {
          this.book = book;
          this.pagesCount = new PagesPipe().transform(this.book.numPages, "Seitenzahl");
        });
    });
  }

  deleteBook() {
    this.bookService
      .deleteBook(this.book)
      .subscribe(() => {
        this.router.navigate(['..']);
      });
  }
}
