import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../services/search-service.service';
import { Hotel } from '../model/hotel';
import { Option } from '../model/Option';
import { Room } from '../model/Room';
import { HotelPolicy } from '../model/Policy';
import { HotelBookingDetails } from '../model/HotelBookingDetails';
import { HotelBooking } from '../model/HotelBooking';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent implements OnInit {

  hotelBookingDetails: HotelBookingDetails = new HotelBookingDetails();
  hotelBooking: HotelBooking;
  hotel: Hotel;
  starRating: number[];
  option: Option;

  constructor(private _searchService: SearchService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.option = params['OptionId'];

      this._searchService.makeHotelBookingByOptionIdRoomIdFromApi(this.option, this.hotelBookingDetails)
      .subscribe(hotelBooking => {
        this.hotelBooking = hotelBooking;
        console.log(this.hotelBooking)
      },
      err => {
        console.log(err);
      });
    });
  }
}