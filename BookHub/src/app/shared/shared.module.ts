import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { AuthorComponent } from './components/author/author.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    AuthorComponent
  ],
  imports: [
    CommonModule,    
    RouterModule,
    MaterialModule,HttpClientModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MaterialModule,
    AuthorComponent,HttpClientModule
  ]
})
export class SharedModule { }
