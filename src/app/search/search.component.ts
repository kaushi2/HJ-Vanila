import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import { Observable } from 'rxjs/Observable';

import { Hotel } from "../model/hotel";
import { SearchService } from "../services/search-service.service";

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
  AllParamsCombined: Hotel = { HotelId: 0, City: "", CountryCode: "", CheckIn: "", CheckOut: "", Children: 0, Adults: 1 };
  showSearchResults: boolean;

  NextPageNo: number;
  PrevPageNo: number;
  hotels: Hotel[];
  
  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params); // Displays Sydney and is type string
      
      // Not working
      this.AllParamsCombined = params;
      console.log(this.AllParamsCombined);
      
      this.City = params['City'];
      this.CountryCode = params['CountryCode'];
      this.CheckInDate = params['CheckInDate'];
      this.CheckOutDate = params['CheckOutDate'];
      this.NumOfAdults = params['NumOfAdults'] || 1;
      this.NumOfChildren = params['NumOfChildren'] || 0;
      this.NextPageNo = parseInt(params['Page']);
      this.PrevPageNo = parseInt(params['Page']);
      if (this.CountryCode === undefined || this.City === undefined || this.NextPageNo === undefined || this.CheckInDate === undefined ||
        this.CheckOutDate === undefined || this.NumOfAdults === undefined || this.NumOfChildren === undefined) {
        console.log("Exiting as undefined");
        return false;
      }

      console.log(this.City + "/" + this.NextPageNo);
      this.Search_Click(this.CountryCode, this.City, this.NextPageNo, this.CheckInDate, this.CheckOutDate, this.NumOfAdults, this.NumOfChildren);
    });
  }

  public Search_Click(CountryCode: string, City: string, Page: number, CheckInDate: Date, CheckOutDate: Date, NumOfAdults: number, NumOfChildren: number) {
    this._searchService.getHotelsByCityIdFromDb(CountryCode, City, Page)
      .subscribe(hotels => {
        //console.log(hotels);
        this.NextPageNo += 1;
        this.PrevPageNo -= 1;
        this.hotels = hotels;
      },
      err => {
        console.log(err);
      });
  }

  public NextPage(CountryCode: string, City: string, Page: number, CheckInDate: Date, CheckOutDate: Date, NumOfAdults: number, NumOfChildren: number) {
    this.Search_Click(CountryCode, City, Page, CheckInDate, CheckOutDate, NumOfAdults, NumOfChildren);
  }

  private showHotelDetails(hotelId) {
    this.showSearchResults = true;
    this.AllParamsCombined.HotelId = hotelId;
  }
  //   ngOnChanges(changes:any) {
  //     // Listen to the 'hotel' emitted event so as populate the model
  //     // with the event payload
  //     EmitterService.get(this.hotelId).subscribe((hotels: Hotel[]) => { this.Search_Click() });
  // }

}
