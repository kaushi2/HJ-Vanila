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
  CheckInDate: Date;
  CheckOutDate: Date;
  NumOfAdults: number;
  NumOfChildren: number;
  Child1Age: number;
  Child2Age: number;
  Child3Age: number;

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
      this.CheckInDate = params['CheckInDate'];
      this.CheckOutDate = params['CheckOutDate'];
      this.NumOfAdults = params['NumOfAdults'];
      this.NumOfChildren = params['NumOfAdults'];
      if(this.CountryCode === undefined || this.City === undefined || this.NextPageNo === undefined || this.CheckInDate === undefined || 
              this.CheckOutDate === undefined || this.NumOfAdults === undefined || this.NumOfChildren === undefined) {
        return false;
      }
      
      this.NextPageNo = parseInt(params['Page']);
      this.PrevPageNo = parseInt(params['Page']);
      console.log(this.City + "/" + this.NextPageNo);
      this.Search_Click(this.CountryCode, this.City, this.NextPageNo, this.CheckInDate, this.CheckOutDate, this.NumOfAdults, this.NumOfChildren);
    });
  }

  public Search_Click(CountryCode: string, City: string, Page: number, CheckInDate: Date, CheckOutDate: Date, NumOfAdults: number, NumOfChildren: number) {
    this._searchService.getHotels(CountryCode, City, Page, CheckInDate, CheckOutDate, NumOfAdults, NumOfChildren)
      .subscribe(
      hotels => {
        console.log(hotels);
        this.NextPageNo += 1;
        this.PrevPageNo -= 1;
        // Get prices for each hotel

        this.hotels = hotels
      },
      err => {
        console.log(err);
      });
  }

  public NextPage(CountryCode: string, City: string, Page: number, CheckInDate: Date, CheckOutDate: Date, NumOfAdults: number, NumOfChildren: number) {
    this.Search_Click(CountryCode, City, Page, CheckInDate, CheckOutDate, NumOfAdults, NumOfChildren);
  }
  //   ngOnChanges(changes:any) {
  //     // Listen to the 'hotel' emitted event so as populate the model
  //     // with the event payload
  //     EmitterService.get(this.hotelId).subscribe((hotels: Hotel[]) => { this.Search_Click() });
  // }

}
