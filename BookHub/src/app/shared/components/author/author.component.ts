import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TestService } from '../../../books/services/test.service';

@Component({
  selector: 'app-author',
  standalone: false,

  templateUrl: './author.component.html',
  styleUrl: './author.component.scss'
})
export class AuthorComponent implements OnChanges {
@Input() dataCounter:number;
  constructor(private _testService: TestService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  public data: number

  public setData(val: number): void {
    this.data = val;
  }
  public btnSendClick(): void {
    this._testService.myData = 'This data from child';
  }
}
