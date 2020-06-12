import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../interface/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book;
  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(
      next => (this.book = next),
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }
}
