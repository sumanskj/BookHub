import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookModel } from '../../models/book.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-books',
  standalone: false,

  templateUrl: './add-books.component.html',
  styleUrl: './add-books.component.scss'
})
export class AddBooksComponent implements OnInit {
  @ViewChild('myform') myform: NgForm;
  public model: BookModel
  ngOnInit(): void {
    this.model = new BookModel();
    // this.model.id = 1;
    // this.model.title = "Book";
    // this.model.description = "Description";
    // this.model.author = "Author";
    // this.model.pages = 1;
    this.model.price = 100;
    this.model.published = true;
    // this.model.publishDate=;

  }

  constructor(private _bookservice: BookService) { }

  prices: any[] = [
    { value: 100, viewValue: "Rs. 100" },
    { value: 200, viewValue: "Rs. 200" },
    { value: 300, viewValue: "Rs. 300" },
    { value: 400, viewValue: "Rs. 400" }
  ];

  // public addBook(value: any): void {
  //   const book: BookModel = new BookModel();
  //   book.id = value.id;
  //   book.title = value.title;
  //   book.description = value.description;
  //   book.author = value.author;
  //   book.price = value.price;
  //   book.pages = value.pages;
  //   book.published = value.published;
  //   book.publishDate = value.publishDate;
  //   this._bookservice.addBook(book);
  // }
  public addBook(): void {
if(this.myform.valid)
{
  this._bookservice.addBook(this.model);
  alert('A New Book has been Created Successfully !')
} 
  else
{
  alert('Please fill up correctly!')
}
  }
}
