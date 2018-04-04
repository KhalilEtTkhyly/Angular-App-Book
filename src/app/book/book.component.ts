import { Component, OnInit } from '@angular/core';
import { GoogleBookService } from '../shared/google-book.service';
import { LibraryService } from '../shared/library.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

	public book: Book;

	constructor ( public googleBookService: GoogleBookService, public route: ActivatedRoute,
				  public libraryService: LibraryService,
	 ) {
		this.route.params.subscribe ( params => {
			if ( params["id"] ) {
				this.googleBookService.retrieveBook(params["id"]).subscribe ( book =>  this.assignBook(book));
			}
		} )
	}

	public assignBook ( book: any ) {
		this.book = this.googleBookService.bookFactory(JSON.parse(book._body));
		console.log(this.book)
	}

	ngOnInit() {
	}

}
