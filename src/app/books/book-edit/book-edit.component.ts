import { Component, OnInit } from '@angular/core';
import { IBook } from '../shared/custom-types';
import { BooksService } from '../shared/books.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'thomas-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  public book: IBook;

  constructor(private bookService: BooksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: { isbn: string }) => {
      this.bookService
        .getBook(params.isbn)
        .subscribe(book => {
          this.book = book;
        });
    });
  }

  submitBook(){
    this.bookService
      .updateBook(this.book)
      .subscribe(()=>{
        this.router.navigate(['..']);
      });
  }
}
