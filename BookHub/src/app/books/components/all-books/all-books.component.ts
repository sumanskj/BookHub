import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-all-books',
  standalone: false,

  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.scss',

})
export class AllBooksComponent implements OnInit {
  public books: BookModel[] = []
  constructor(public bookService: BookService) {

  }

  ngOnInit(): void {
    this.getAllBooks();
    // const allbooks = this.bookService.getAllBook();
    // allbooks.forEach(a => {
    //   var obj = new BookModel();
    //   obj.id = a.id;
    //   obj.title = a.title;
    //   obj.description = a.description;
    //   obj.author = a.author;
    //   this.books.push(obj);
    // })

  }
  displayedColumns: string[] = ['Id', 'title', 'description', 'author'];
  dataSource = new MatTableDataSource<BookModel>(this.books);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private getAllBooks(): void {
    this.bookService.getAllBook().subscribe(books => {
      this.books = books
      // console.log(books);
    })
  }
}

