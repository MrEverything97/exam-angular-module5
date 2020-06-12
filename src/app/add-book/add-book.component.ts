import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../interface/book';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookList: Book[] = [];
  failMessage: string;
  successMessage: string;
  bookForm: FormGroup;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup(
      {
        title: new FormControl('',
          [Validators.required,
            Validators.minLength(10)]),
        author: new FormControl('',
          [Validators.required,
            Validators.minLength(10)]),
        description: new FormControl('',
          [Validators.required,
            Validators.minLength(10)])
      }
    );
  }
  onSubmit() {
    if (this.bookForm.valid) {
      const {value} = this.bookForm;
      this.bookService.createBook(value)
        .subscribe(result => {
          this.bookList.push(result);
          this.successMessage = 'Add book successfully !';
          this.bookForm.reset({
            title: '',
            author: '',
            description: '',
          });
        }, error => {
          this.failMessage = 'Add book fail !';
        });
    }
  }
}
