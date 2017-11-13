import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../services/search-service.service';
import { Hotel } from '../model/hotel';
import { Option } from '../model/Option';
import { Room } from '../model/Room';
import { HotelPolicy } from '../model/Policy';
import { HotelBookingPersonalDetails } from '../model/HotelBookingPersonalDetails';

@Component({
  selector: 'app-hotel-policies',
  templateUrl: './hotel-policies.component.html',
  styleUrls: ['./hotel-policies.component.css']
})
export class HotelPoliciesComponent implements OnInit {
  showHotelBooking: boolean;
  hotelPolicy: HotelPolicy;
  hotelBookingPersonalDetails: HotelBookingPersonalDetails = new HotelBookingPersonalDetails();
  optionId: string;
  roomId: string;
  isBusy: boolean;
  
  constructor(private _searchService: SearchService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.optionId = params['OptionId'];
      this.roomId = params['RoomId'];
      
      this.isBusy = true;
      this._searchService.getHotelPolicyByOptionIdFromApi(this.optionId)
      .subscribe(hotelPolicyBody => {
        this.isBusy = false;
        this.hotelPolicy = hotelPolicyBody;
        console.log(this.hotelPolicy)
      },
      err => {
        this.isBusy = false;
        console.log(err);
      });
    });
    window.scrollTo(0, 400);
  }
  public showHotelBookingComponent() {
    this.showHotelBooking = true;
    this.hotelBookingPersonalDetails.YourReference = "XMLTEST";
    console.log(this.hotelBookingPersonalDetails);
  }
}