import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';
import { LibraryService } from '../shared/library.service';


@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

	@Input()
	public book: Book;

	constructor (  public libraryService: LibraryService ) { }

	ngOnInit() {
	}

}
