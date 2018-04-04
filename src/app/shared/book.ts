export class Book {

  constructor( 
	  	public id: string,
	  	public title: string,
	  	public subTitle: string,
	  	public description: string,
	  	public authors: string[],
	  	public categories: string[],
	  	public publisher: string,
	  	public publishDate: string,
	  	public thumbnail: string
  	) { }

}
