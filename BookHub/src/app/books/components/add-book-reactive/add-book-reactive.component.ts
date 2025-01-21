import { assertPlatform, Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { FormControl, FormGroup } from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'app-add-book-reactive',
  standalone: false,

  templateUrl: './add-book-reactive.component.html',
  styleUrl: './add-book-reactive.component.scss'
})
export class AddBookReactiveComponent {
  prices: any[] = [
    { value: 100, viewValue: "Rs. 100" },
    { value: 200, viewValue: "Rs. 200" },
    { value: 300, viewValue: "Rs. 300" },
    { value: 400, viewValue: "Rs. 400" }
  ];
  public addBookForm: FormGroup;
  constructor(private _bookService: BookService) {
    this.addBookForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      description: new FormControl(),
      author: new FormControl(),
      pages: new FormControl(),
      price: new FormControl(),
      published: new FormControl(),
      publishDate: new FormControl()
    })
  }

  public addBook() {
    if (this.addBookForm.valid) {
      this._bookService.addBook(this.addBookForm.value)
      alert('A new book has been added successfully')
    }
    else {
      alert('there is an error in Form');
    }
  }
}
