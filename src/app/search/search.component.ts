import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import { Observable } from 'rxjs/Observable';

import { Hotel } from "../model/hotel";
import { SearchService } from "../services/search-service.service";
import { dateFormat } from "dateformat"

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
  hotel: Hotel = { HotelId: 0, HotelName: "", Location: "", City: "", CountryCode: "", CheckIn: "", CheckOut: "", Children: 0, Adults: 1, StarRating: 0 };
  @Input() showHotelDetail: boolean;
  noOfNights: number;

  NextPageNo: number;
  PrevPageNo: number;
  hotels: Hotel[];
  isBusy: boolean;
  
  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      
      this.hotel.City = this.City = params['City'];
      this.hotel.CountryCode = this.CountryCode = params['CountryCode'];
      this.hotel.CheckIn = this.CheckInDate = params['CheckInDate'];
      this.hotel.CheckOut = this.CheckOutDate = params['CheckOutDate'];
      this.hotel.Adults = this.NumOfAdults = params['NumOfAdults'] || 1;
      this.hotel.Children = this.NumOfChildren = params['NumOfChildren'] || 0;
      this.showHotelDetail = params['results'] == "results" ? false : true;
      this.NextPageNo = parseInt(params['Page']);
      this.PrevPageNo = parseInt(params['Page']);
      if (this.CountryCode === undefined || this.City === undefined || this.NextPageNo === undefined || this.CheckInDate === undefined ||
        this.CheckOutDate === undefined || this.NumOfAdults === undefined || this.NumOfChildren === undefined) {
        console.log("Exiting as undefined");
        return false;
      }

      this.Search_Click(this.CountryCode, this.City, this.NextPageNo, this.CheckInDate, this.CheckOutDate, this.NumOfAdults, this.NumOfChildren);
    });
  }

  public Search_Click(CountryCode: string, City: string, Page: number, CheckInDate: Date, CheckOutDate: Date, NumOfAdults: number, NumOfChildren: number) {
    window.scrollTo(0, 500);
    this.isBusy = true;
    this._searchService.getHotelsByCityIdFromDb(CountryCode, City, Page)
      .subscribe(hotels => {
        this.isBusy = false;
        //console.log(hotels);
        this.NextPageNo += 1;
        this.PrevPageNo -= 1;
        this.hotels = hotels;
      },
      err => {
        this.isBusy = false;
        console.log(err);
      });
  }

  public NextPage(CountryCode: string, City: string, Page: number, CheckInDate: Date, CheckOutDate: Date, NumOfAdults: number, NumOfChildren: number) {
    this.Search_Click(CountryCode, City, Page, CheckInDate, CheckOutDate, NumOfAdults, NumOfChildren);
  }

  private showHotelDetails(hotelId, starRating, hotelName, location) {
    this.showHotelDetail = true;
    this.hotel.HotelId = hotelId;
    this.hotel.StarRating = starRating;
    this.hotel.HotelName = hotelName;
    this.hotel.Location = location;
  }

  private getArray(StarRating) {
    return Array(parseInt(StarRating.toString())).fill(0).map((x, i) => i);
  }
  //   ngOnChanges(changes:any) {
  //     // Listen to the 'hotel' emitted event so as populate the model
  //     // with the event payload
  //     EmitterService.get(this.hotelId).subscribe((hotels: Hotel[]) => { this.Search_Click() });
  // }

}
