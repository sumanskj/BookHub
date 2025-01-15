import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Public-Components/home/home.component';
import { AboutUsComponent } from './Public-Components/about-us/about-us.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { BooksComponent } from './books/books.component';
import { AuthComponent } from './auth/auth.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'books',component:BooksComponent, loadChildren:() => import('./books/books.module').then(x=>x.BooksModule),},
  {path:'auth',component:AuthComponent, loadChildren:() => import('./auth/auth.module').then(x=>x.AuthModule)},
  
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
