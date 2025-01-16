import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { RecentBooksComponent } from './components/recent-books/recent-books.component';


const routes: Routes = [
  // { path: '', redirectTo: 'all-book', pathMatch: 'full' },
  { path: 'all-books', component: AllBooksComponent },
  { path: 'recent-books', component: RecentBooksComponent },
  { path: 'book-details/:id', component: BookDetailsComponent }
];

// const routes: Routes = [
//   // { path: '', redirectTo: 'all-book', pathMatch: 'full' },
//   {
//     path: 'books', component: BooksComponent, children: [
//       { path: 'all-books', component: AllBooksComponent },
//       { path: 'book-details/:id', component: BookDetailsComponent }]
//   }

//];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class BooksRoutingModule { }
