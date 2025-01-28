import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { FormBuilder, FormControl, FormGroup, UntypedFormArray, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book-reactive',
  standalone: false,

  templateUrl: './add-book-reactive.component.html',
  styleUrl: './add-book-reactive.component.scss'
})
export class AddBookReactiveComponent implements OnInit {
  public titleErrorMessage: string;
  prices: any[] = [
    { value: 100, viewValue: "Rs. 100" },
    { value: 200, viewValue: "Rs. 200" },
    { value: 300, viewValue: "Rs. 300" },
    { value: 400, viewValue: "Rs. 400" }
  ];
  public addBookForm: FormGroup;

  constructor(private _bookService: BookService,private _formBuilder:FormBuilder) {
    
  }
  ngOnInit(): void {
    this.initForm();
    const titleControl = this.addBookForm.get('title');
    titleControl?.valueChanges.subscribe(x => {
      this.validateTitleControl(titleControl as FormControl);
      // console.log(x);
      // console.log(titleControl.errors);

      
    })
  }
  private initForm():void{
    this.addBookForm = this._formBuilder.group({
      id: ['',Validators.required],
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      description: ['', Validators.required],
      // author: ['', Validators.required],
      pages: ['', [Validators.min(10), Validators.max(100)]],
      price: ['', Validators.required],
      published: ['', Validators.required],
      publishDate: ['', Validators.required],
      authors: this._formBuilder.array([this.getAuthorControl(), this.getAuthorControl()])
    })
  }

  public addBook() {
    if (this.addBookForm.valid) {
      this._bookService.addBook(this.addBookForm.value)
      alert('A new book has been added successfully')
    }
    else {
      alert('There is an error in Form');
    }
  }
  private validateTitleControl(titleControl: FormControl): void {
    this.titleErrorMessage='';
    if (titleControl.errors && (titleControl.touched || titleControl.dirty)) {
      if (titleControl.errors?.required) {
        this.titleErrorMessage = 'Please Enter Title';
      }else if (titleControl.errors?.minLength) {      
        this.titleErrorMessage='Minimum Length should be '+ titleControl.errors?.minLength?.requiredLength;
        // this.titleErrorMessage = 'Minimum Length should be 10';
      }
    }
  }
  public get authors() {
    return <UntypedFormArray>this.addBookForm.get('authors');
  }

  public addMoreAuthor(): void {
    this.authors.push(this.getAuthorControl());
  }

  public removeAuthor(i: number): void {
    this.authors.removeAt(i);
  }
  private getAuthorControl(): UntypedFormGroup {
    return this._formBuilder.group({
      fullName: '',
      address: ''
    });
  }
}
