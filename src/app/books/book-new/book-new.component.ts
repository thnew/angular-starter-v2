import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BooksService } from '../shared/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'thomas-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss']
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private bookService: BooksService, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      subtitle: ['Default description', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
      isbn: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      publisher: this.formBuilder.group({
        name: ['', Validators.required],
        url: ['', Validators.required]
      })
    });
  }

  saveBook() {
    this.bookService
      .createBook(this.form.value)
      .subscribe(() => {
        this.router.navigate(['..']);
      });
  }

  isSaved() {
    return !this.form.dirty;
  }
}
