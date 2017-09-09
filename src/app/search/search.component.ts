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
  CountryCode: string;
  NextPageNo: number;
  PrevPageNo: number;
  hotels: Hotel[];
  @Input() hotelId: number;

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
      this.City = params['City'];
      this.CountryCode = params['CountryCode'];
      this.NextPageNo = parseInt(params['Page']);
      this.PrevPageNo = parseInt(params['Page']);
      console.log(this.City + "/" + this.NextPageNo);
      this.Search_Click(this.CountryCode, this.City, this.NextPageNo);
    });
  }

  public Search_Click(CountryCode: string, City: string, Page: number) {
    this._searchService.getHotels(CountryCode,City, Page)
      .subscribe(
      hotels => {
        console.log(hotels);
        this.NextPageNo += 1;
        this.PrevPageNo -= 1;
        this.hotels = hotels
      },
      err => {
        console.log(err);
      });
  }

  public NextPage(CountryCode: string, City: string, Page: number) {
    this.Search_Click(CountryCode, City, Page);
  }
  //   ngOnChanges(changes:any) {
  //     // Listen to the 'hotel' emitted event so as populate the model
  //     // with the event payload
  //     EmitterService.get(this.hotelId).subscribe((hotels: Hotel[]) => { this.Search_Click() });
  // }

}
