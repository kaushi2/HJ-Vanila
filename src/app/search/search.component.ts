import { Component, OnInit } from '@angular/core';
import { Hotel } from "app/classes/hotel";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public hotelCollection : Array<Hotel> = [];

  constructor() { }

  ngOnInit() {
	  var hotel = { Name:"1", Type:"Hotel" };
	  this.hotelCollection.push(hotel);
  }

}
