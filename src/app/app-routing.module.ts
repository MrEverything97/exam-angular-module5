import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';

import {NgModule} from '@angular/core';
import {AddBookComponent} from './add-book/add-book.component';
import {BookUpdateComponent} from './book-update/book-update.component';
import {BookDetailsComponent} from './book-details/book-details.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'book-add',
    component: AddBookComponent
  },
  {
    path: 'book-update/:id',
    component: BookUpdateComponent
  },
  {
    path: 'book/:id',
    component: BookDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
