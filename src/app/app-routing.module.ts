import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadDelayed } from "./shared/preload-delayed";

const routes: Routes = [
  {
    path: 'books',
    loadChildren: './books/books.module#BooksModule',
    data: {
      preload: true
    }
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadDelayed})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
