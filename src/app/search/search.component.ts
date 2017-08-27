import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Hotel } from "../model/hotel";
import { SearchService } from "../services/search-service.service";
// import { EmitterService } from '../services/emitter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _searchService: SearchService) { }

  hotels: Hotel[];
  @Input() hotelId: number;

  ngOnInit() {
    this.Search_Click();
  }

  public Search_Click() {
    this._searchService.getHotels()
    .subscribe(
      hotels => this.hotels = hotels,
        err => {
          console.log(err);
        });
  }

//   ngOnChanges(changes:any) {
//     // Listen to the 'hotel' emitted event so as populate the model
//     // with the event payload
//     EmitterService.get(this.hotelId).subscribe((hotels: Hotel[]) => { this.Search_Click() });
// }

}
