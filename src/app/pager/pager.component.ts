import { Component, OnInit } from '@angular/core';
import { GoogleBookService } from '../shared/google-book.service';


@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

	constructor( public googleBookService: GoogleBookService ) {

	}

	ngOnInit() {
	}

	public nextPage (  ) {
		this.googleBookService.page += 1;
	}

	public prevPage (  ) {
		this.googleBookService.page -= 1;
	}

}
