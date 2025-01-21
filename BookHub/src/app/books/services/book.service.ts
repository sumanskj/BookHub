import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  private allbooks  = [
    {
      "id": 1,
      "title": "C",
      "description": "This is C",
      "author": "Danish Riche",
      "pages":256,
      "price":5000,
      "published":true
    },
    {
      "id": 2,
      "title": "C++",
      "description": "This is C++",
      "author": "Kishan Paul",
      "pages":704,
      "price":3500,
      "published":true
    },
    {
      "id": 3,
      "title": "JAVA",
      "description": "This is Java",
      "author": "Karun Nayar",
      "pages":521,
      "price":1500,
      "published":true
    },
    {
      "id": 4,
      "title": "Networking",
      "description": "This is Networking book for beginners",
      "author": "Ganesh Pandit",
      "pages":741,
      "price":5278,
      "published":true
    },
    {
      "id": 5,
      "title": "Fundamental of Operatin System",
      "description": "This is book of operating system for beginners",
      "author": "Surya Sarathi Das",
      "pages":214,
      "price":4239,
      "published":true
    },
    {
      "id": 6,
      "title": "DBMS",
      "description": "This is a book of Database Management System",
      "author": "Arun Bhattachharia",
      "pages":956,
      "price":5499,
      "published":true
    }
  ];


  public getAllBook(): any[] {
    return this.allbooks;
  }

  public getRecentBooks(): any[] {
    return [
      {
        "id": 1,
        "title": "C",
        "description": "This is C",
        "author": "Danish Riche",
        "pages":256,
        "price":5000,
        "published":true
      },
      {
        "id": 2,
        "title": "C++",
        "description": "This is C++",
        "author": "Kishan Paul",
        "pages":235,
        "price":4230,
        "published":true
      },

    ]
  }
  public addBook(bookModel:BookModel):void{
    this.allbooks.push(bookModel);
  }
}
