import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';
import { WrongchoiceComponent } from './wrongchoice/wrongchoice.component';

const routes: Routes = [
  {path: 'books' ,component:BooksComponent},
  {path: 'technology' ,component:TechnologyComponent},
  {path: '' ,component:TechnologyComponent},
  {path: '**' ,component:WrongchoiceComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
