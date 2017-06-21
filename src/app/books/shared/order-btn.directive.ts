import { Directive, ElementRef, Input } from '@angular/core';
import { IBook } from "app/books/shared/custom-types";

@Directive({
  selector: '[thomasOrderBtn]'
})
export class OrderBtnDirective {
  @Input() set thomasOrderBtn(book: string) {
    console.log(book);
    var parsedBook: IBook = JSON.parse(book);
    this.orderBtnElement.innerText = `Order '${parsedBook.title}'`;
  };

  private orderBtnElement: HTMLButtonElement = document.createElement("button");

  constructor(elementRef: ElementRef) {
    this.orderBtnElement.onclick = () => {
      console.log(this.orderBtnElement.innerText);
    };
    elementRef.nativeElement.appendChild(this.orderBtnElement);
  }

}
