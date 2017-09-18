import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../services/search-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Hotel } from '../model/hotel';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  constructor(private _searchService: SearchService,
    private activatedRoute: ActivatedRoute) { }
  HotelId: number;
  hotels: Hotel[];
  // @Input('hotelPrices') hotelPrices: Hotel[];
  
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
      this.HotelId = params['HotelId'];

      console.log(this.HotelId);
      this._searchService.getHotelsByHotelIdFromApi(this.HotelId)
      .subscribe(hotels => {
        //console.log(hotels);
        this.hotels = hotels
      },
      err => {
        console.log(err);
      });
    });
  }

}
