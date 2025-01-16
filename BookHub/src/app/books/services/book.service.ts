import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  public getAllBook() : any[] {
return [
  {
    "id": 1,
    "title": "C",
    "description": "This is C",
    "author": "Danish Riche"
  },
  {
    "id" : 2,
    "title":"C++",
    "description": "This is C++",
    "author":"Kishan Paul"
  },
  {
    "id" : 3,
    "title":"JAVA",
    "description": "This is Java",
    "author":"Karun Nayar"
  },
  {
    "id" : 4,
    "title":"Networking",
    "description": "This is Networking book for beginners",
    "author":"Ganesh Pandit"
  },
  {
    "id" : 5,
    "title":"Fundamental of Operatin System",
    "description": "This is book of operating system for beginners",
    "author":"Surya Sarathi Das"
  },
  {
    "id" : 6,
    "title":"DBMS",
    "description": "This is a book of Database Management System",
    "author":"Arun Bhattachharia"
  }
]
  }

  public getRecentBooks() : any[] {
    return [
      {
        "id": 1,
        "title": "C",
        "description": "This is C",
        "author": "Danish Riche"
      },
      {
        "id" : 2,
        "title":"C++",
        "description": "This is C++",
        "author":"Kishan Paul"
      },
      
    ]
      }
}
