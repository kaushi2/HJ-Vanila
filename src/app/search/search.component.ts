import { Component, OnInit } from '@angular/core';
import { Hotel } from "app/classes/hotel";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  public hotelCollection : Array<Hotel> = [];
	  hotelCollection.push("{ 'name':'1' }");
	  hotelCollection.push("{ 'name':'1' }");
	  hotelCollection.push("{ 'name':'1' }");
	  
    
  }

}
