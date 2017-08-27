import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
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

  constructor(private _searchService: SearchService, 
              private activatedRoute: ActivatedRoute) { }

  hotels: Hotel[];
  @Input() hotelId: number;

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
      let City = params['City'];
      console.log(City);
      this.Search_Click(City);
    });
  }

  public Search_Click(City: string) {
    this._searchService.getHotels(City)
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
