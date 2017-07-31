import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from "../search-service.service";
import { Hotel } from "../classes/hotel";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public hotelCollection: Array<Hotel> = [];
  public searchFilter: Hotel = { City: '', CheckIn: '', CheckOut: '', Adults: 0, Children: 0, Type: '' };

  constructor(private _searchService: SearchServiceService) { }

  ngOnInit() {
    this.hotelCollection = this._searchService
      .getSearchResult(City, CheckIn, CheckOut, Adults, Children, Type);

  }

  public Search()

}
