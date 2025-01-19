import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AuthComponent } from '../../auth/auth.component';
import { AuthorComponent } from '../../shared/components/author/author.component';
import { MatButton } from '@angular/material/button';
import { TestService } from '../../books/services/test.service';
import { clearInterval } from 'node:timers';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit,AfterViewChecked,OnDestroy {

  constructor(public _testService: TestService) { }
  ngOnDestroy(): void {
    
  }
  
  public count: number = 1;
  @ViewChild(AuthorComponent) private childcomponent: AuthorComponent;
  @ViewChild('clickmebutton') private clickmebutton: MatButton;


  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.childcomponent.setData(12);

    //   this.count < 10 ? this.clickmebutton.disabled = false : this.clickmebutton.disabled = true;

    // }, 0);

  }
  ngAfterViewChecked(): void {
      this.count < 10 ? this.clickmebutton.disabled = false : this.clickmebutton.disabled = true;
  }
  public btnClick(): void {
    this.count++
  }
}
