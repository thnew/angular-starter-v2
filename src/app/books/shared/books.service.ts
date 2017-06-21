import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IBook } from '../shared/custom-types';

@Injectable()
export class BooksService {
  private restRoot = 'http://localhost:4730/books';

  constructor(private http: Http) { }

  getBooks() {
    const url = this.restRoot;
    return this.http.get(url)
      .map(res => res.json());
  }

  getBook(isbn: string): Observable<IBook> {
    const url = `${this.restRoot}/${isbn}`;
    return this.http.get(url)
      .map(res => res.json());
  }

  updateBook(book): Observable<IBook> {
    const url = `${this.restRoot}/${book.isbn}`;
    return this.http.patch(url, book)
      .map(res => res.json());
  }

  createBook(book): Observable<IBook> {
    const url = `${this.restRoot}`;
    return this.http.post(url, book)
      .map(res => res.json());
  }

  deleteBook(book): Observable<any> {
    const url = `${this.restRoot}/${book.isbn}`;
    return this.http.delete(url)
      .map(res => res.json());
  }
}
