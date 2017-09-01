import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  City: string;
  PageNo: number;
  hotels: Hotel[];
  @Input() hotelId: number;

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
      this.City = params['City'];
      this.PageNo = parseInt(params['Page']);
      console.log(this.City + "/" + this.PageNo);
      this.Search_Click(this.City, this.PageNo);
    });
  }

  public Search_Click(City: string, Page: number) {
    this._searchService.getHotels(City, Page)
      .subscribe(
      hotels => {
        console.log(hotels);
        this.PageNo += 1;
        this.hotels = hotels
      },
      err => {
        console.log(err);
      });
  }

  public NextPage(City: string, Page: number) {
    this.Search_Click(City, Page);
  }
  //   ngOnChanges(changes:any) {
  //     // Listen to the 'hotel' emitted event so as populate the model
  //     // with the event payload
  //     EmitterService.get(this.hotelId).subscribe((hotels: Hotel[]) => { this.Search_Click() });
  // }

}
