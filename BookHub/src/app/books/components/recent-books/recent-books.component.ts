import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-recent-books',
  standalone: false,
  
  templateUrl: './recent-books.component.html',
  styleUrl: './recent-books.component.scss'
})
export class RecentBooksComponent implements OnInit {
public recentBooks: BookModel[] = []
  constructor(public bookService: BookService) {
  
    }
  ngOnInit(): void {
    this.recentBooks = this.bookService.getRecentBooks();
  }
}
