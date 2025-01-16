import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  public getAllBook() : BookModel[] {
return [
  {
    "id" : 1,
    "title":"C",
    "description": "This is C",
    "author":"Danish Riche"
  },
  {
    "id" : 2,
    "title":"C++",
    "description": "This is C++",
    "author":"Kishan Paul"
  }
]
  }
}
