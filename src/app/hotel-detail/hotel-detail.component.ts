import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../services/search-service.service';
import { Hotel } from '../model/hotel';
import { Image } from '../model/Image';
import { Option } from '../model/Option';
import { Room } from '../model/Room';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  constructor(private _searchService: SearchService, private activatedRoute: ActivatedRoute) { }

  @Input() userSearch: Hotel;
  searchFromParams: Hotel = new Hotel();
  hotel: Hotel;
  starRating: number[];
  images: Image[];
  options: Option[] = [{ OptionId: 0, Checked: false, OnRequest: 0, BoardType: '', TotalPrice: 0, DealName: '', Discount: '', Rooms: Array<Room>() }];
  selectedOption: any;
  location: string;
  checkIn: string;
  checkOut: string;
  hotelName: string;
  children: number;
  adults: number;
  priceFrom: string;
  isBusy: boolean;
  
  ngOnInit() {
    if (!this.userSearch) {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.searchFromParams.CheckIn = params['CheckInDate'];
        this.searchFromParams.CheckOut = params['CheckOutDate'];
        this.searchFromParams.Adults = params['NumOfAdults'] || 1;
        this.searchFromParams.Children = params['NumOfChildren'] || 0;
        this.searchFromParams.HotelId = params['HotelId'];
        this.searchFromParams.CountryCode = params['CountryCode'];
        this.searchFromParams.City = params['City'];
        this.searchFromParams.Location = params['Location'];
      });
    }
    else {
      window.scrollTo(0, 100);
      this.location = this.userSearch.Location;
      this.checkIn = this.userSearch.CheckIn;
      this.checkOut = this.userSearch.CheckOut;
      this.hotelName = this.userSearch.HotelName;
      this.children = this.userSearch.Children;
      this.adults = this.userSearch.Adults;
      this.starRating = Array(parseInt(this.userSearch.StarRating.toString())).fill(0).map((x, i) => i);
      
    }
    
    this.isBusy = true;
    // this.userSearch = { Adults: 1, Children: 0, CheckIn: '2017-10-18', CheckOut: '2017-10-19', City: 'Sydney', CountryCode: 'AU' };
    let searchParams = this.userSearch ? this.userSearch : this.searchFromParams;
    let hotelId = this.userSearch ? this.userSearch.HotelId : this.searchFromParams.HotelId;
    this._searchService.getHotelByHotelIdFromApi(searchParams, hotelId)
    //this._searchService.getHotelByHotelIdFromApi(this.userSearch, 1011550)
    .subscribe(hotelDetail => {
      this.isBusy = false;
      this.hotel = hotelDetail;
      this.images = hotelDetail.Images.Image;
      this.options = hotelDetail.Options.Option;
      console.log(this.options);

      if (this.options && this.options.length){
        this.selectedOption = this.options[0];
      }
    },
    err => {
      this.isBusy = false;
      console.log(err);
    });
  
    // Read Values from Search Component
  }

  book() {
    console.log(this.selectedOption);

  }

  roomSelect(option) {
      this.selectedOption = option;
  }
}