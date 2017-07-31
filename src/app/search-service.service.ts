import { Injectable } from '@angular/core';
import { Hotel } from "./classes/hotel";

@Injectable()
export class SearchServiceService {

  constructor() { }
  public getSearchResult(city: string, checkInDate: string, checkOutDate: string, adults: number, children: number, type: string) {
    var hotelCollection: Array<Hotel> = [];    
	  var hotel = { Name:"1", Type:"Hotel" };
    hotelCollection.push(hotel);
	  hotel = { Name:"2", Type:"Hotel" };
    hotelCollection.push(hotel);
	  hotel = { Name:"3", Type:"Hotel" };
    hotelCollection.push(hotel);
    return hotelCollection;
    // http Get
    
  }
}
