import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from '../shared/books.service';
import { IBook } from '../shared/custom-types';

@Component({
  selector: 'thomas-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  private books: IBook[];

  constructor(private booksService: BooksService, private route: ActivatedRoute, private router: Router){
    
  }

  ngOnInit() {
    // this.booksService.getBooks().subscribe(resp => console.log(resp));
    this.booksService.getBooks().subscribe(resp => this.books = resp);
  }

  onBookSelect(book: IBook) {
    this.router.navigate([book.isbn], { relativeTo: this.route });
  }
}
