import { Component, OnInit } from '@angular/core';
import { GoogleBookService } from '../shared/google-book.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	public query: string = "";

	constructor ( public googleBookService: GoogleBookService, public route: ActivatedRoute, public router: Router ) {
		this.route.params.subscribe ( params => {
			if ( params["query"] ) {
				this.query = params["query"];
				this.searchBooks();
			}
		} )
	}

	ngOnInit() {
	}

	public searchBooks (  ) {
		this.router.navigate(['/search',{query: this.query}]);
		this.googleBookService.searchBooks(this.query);
	}

}
