import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Book } from './book';


@Injectable()
export class GoogleBookService {

	public API_PATH: string = "https://www.googleapis.com/books/v1/volumes";
	public loading: boolean = false;
	public initialized: boolean = false;
	public totalItems: number = 0;
	public _page: number = 1;
	public pageSize: number = 10;
	public query: string = "";
	public books: Book[] = [];
	public book: Book;

	constructor ( public http: Http ) { }

	public get page () : number {
		return this._page;
	}

	public set page (val: number) {
		if ( val != this.page ) {
			this._page = val;
			this.searchBooks( this.query );
		}
	}

	public get startIndex () : number {
		return this.page * this.pageSize;
	}

	public totalPages (): number {
		try {
			return Math.ceil( this.totalItems / this.pageSize );
		} catch ( e ) {
			console.log(e);
			return 0;
		}
	}

	public retrieveBook ( bookId: string ) : any {
		console.log(`${this.API_PATH}/${bookId}`)
		return this.http.get (`${this.API_PATH}/${bookId}`);
	}

	public searchBooks ( q: string ) {
		this.query = q;
		this.loading = true;
		this.initialized = true;
		this.books = [];
		this.http.get(`${this.API_PATH}?q=${this.query}&maxResults=${this.pageSize}&startIndex=${this.startIndex}`)
			.map( (res) => res.json() )
			.do( data => { this.totalItems = data.totalItems } )
			.map( data => { return data.items ? data.items : [] } )
			.map( items => { return items.map ( item => this.bookFactory(item) ) } )
			.do ( _ => this.loading = false )
			.subscribe ( (books) =>  { this.assginBooks(books) } );
	}

	public assginBooks ( books: Book[] ) {
		this.books = books;
	}

	public bookFactory ( item: any ) {
		return new Book(
				item.id,
				item.volumeInfo.title,
				item.volumeInfo.subTitle,
				item.volumeInfo.description,
				item.volumeInfo.authors,
				item.volumeInfo.categories,
				item.volumeInfo.publisher,
				item.volumeInfo.publishDate,
				item.volumeInfo.imageLinks.smallThumbnail
			);
	}

}
