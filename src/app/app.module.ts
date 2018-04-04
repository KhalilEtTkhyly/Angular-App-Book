import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookComponent } from './book/book.component';
import { LibraryComponent } from './library/library.component';
import { SearchComponent } from './search/search.component';
import { BookCardComponent } from './book-card/book-card.component';
import { PagerComponent } from './pager/pager.component';
import { LoaderComponent } from './loader/loader.component';
import { GoogleBookService } from './shared/google-book.service';
import { LibraryService } from './shared/library.service';


const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch:'full' },
  { path: 'search', component: SearchComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'book/:id', component: BookComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookComponent,
    LibraryComponent,
    SearchComponent,
    BookCardComponent,
    PagerComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [GoogleBookService,LibraryService],
  bootstrap: [AppComponent]
})

export class AppModule { }
