import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookService } from './services/book.service';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { MaterialModule } from '../shared/material.module';
import { BookCardComponent } from './components/book-card/book-card.component';


@NgModule({
  declarations: [
    BooksComponent,
    AllBooksComponent,
    BookDetailsComponent,
    RecentBooksComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,    
    MaterialModule
  ],
  exports:[BookCardComponent],
  providers:[BookService]
})
export class BooksModule { }
