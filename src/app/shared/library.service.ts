import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class LibraryService {

	public books: Book[] = [];

	public newestSorted: boolean = true;

	constructor() { this.load (); }

	public load () {
		let saveBooks = localStorage.getItem('books');
		if ( ! saveBooks ) return;
		this.books = JSON.parse(saveBooks);
	}

	public save () {
		localStorage.setItem('books', JSON.stringify(this.books));
	}

	public hasBook ( bookId: string ) {
		for ( let value of this.books ) {
			if ( value.id === bookId ) return true;
		}
		return false;
	}

	public addBook ( book: Book ) {
		if ( ! this.hasBook ( book.id ) ) {
			this.books.unshift(book);
			this.save ();
		}
	}

	public ReverseBooks () {
		this.books = this.books.reverse();
		this.newestSorted = ! this.newestSorted;
		this.save();
	}

	public getIndex ( bookId: string ) : number {
		let index = 0;
		for ( let value of this.books ) {
			if ( value.id === bookId ) return index;
			index++;
		}
		return null;
	}

	public removeBook ( book: Book ) {
		if ( this.hasBook ( book.id ) ) {
			let index = this.getIndex ( book.id );
			this.books.splice(index,1);
			this.save ();
		}
	}

}
