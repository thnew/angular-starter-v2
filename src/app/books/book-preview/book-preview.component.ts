import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from './../shared/custom-types';
@Component({
  selector: 'thomas-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  @Input() book: IBook;
  @Output() bookselected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectThisBook(title: string) {
    this.bookselected.emit(title);
  }
}
