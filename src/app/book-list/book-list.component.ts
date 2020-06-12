import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../interface/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: Book[] = [];
  failMessage: string;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAll()
      .subscribe(result => {
        this.bookList = result;
      }, error => {
        this.failMessage = 'LIST BOOK FAIL !';
      });
  }

  deleteBook(i) {
    const book = this.bookList[i];
    if (confirm('Are you sure you want to delete it?')) {
      this.bookService.deleteBook(book.id)
        .subscribe((result) => {
          this.bookList = this.bookList.filter(t => t.id !== book.id);
        });
    }
  }
}
