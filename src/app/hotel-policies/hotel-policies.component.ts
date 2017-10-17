import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../services/search-service.service';
import { Hotel } from '../model/hotel';
import { Option } from '../model/Option';
import { Room } from '../model/Room';
import { HotelPolicy } from '../model/Policy';

@Component({
  selector: 'app-hotel-policies',
  templateUrl: './hotel-policies.component.html',
  styleUrls: ['./hotel-policies.component.css']
})
export class HotelPoliciesComponent implements OnInit {
  hotelPolicy: HotelPolicy;
  hotel: Hotel;
  starRating: number[];
  option: Option;

  constructor(private _searchService: SearchService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.option = params['OptionId'];

      this._searchService.getHotelPolicyByOptionIdFromApi(this.option)
      .subscribe(hotelPolicyBody => {
        this.hotelPolicy = hotelPolicyBody;
        console.log(this.hotelPolicy)
      },
      err => {
        console.log(err);
      });
    });
  }

}
