import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../services/search-service.service';
import { Hotel } from '../model/hotel';
import { Option } from '../model/Option';
import { Room } from '../model/Room';
import { HotelPolicy } from '../model/Policy';
import { HotelBookingPersonalDetails } from '../model/HotelBookingPersonalDetails';
import { HotelBooking } from '../model/HotelBooking';

@Component({
  selector: 'app-hotel-booking',
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent implements OnInit {

  @Input() InputHotelBookingPersonalDetails: HotelBookingPersonalDetails;
  @Input() InputOptionId: string;
  @Input() InputRoomId: string;
  hotelBooking: HotelBooking;

  constructor(private _searchService: SearchService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.InputHotelBookingPersonalDetails);
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {

      this._searchService.makeHotelBookingByOptionIdRoomIdFromApi(this.InputOptionId, this.InputRoomId, this.InputHotelBookingPersonalDetails)
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