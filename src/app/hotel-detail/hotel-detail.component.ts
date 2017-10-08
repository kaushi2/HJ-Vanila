import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../services/search-service.service';
import { Hotel } from '../model/hotel';
import { Image } from '../model/Image';
import { Option } from '../model/Option';
import { Room } from '../model/Room';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  constructor(private _searchService: SearchService) { }

  @Input() userSearch: Hotel;
  hotel: Hotel;
  starRating: number[];
  images: Image[];
  options: Option[] = [{ OptionId: 0, Checked: false, OnRequest: 0, BoardType: '', TotalPrice: 0, DealName: '', Discount: '', Rooms: Array<Room>() }];
  selectedOption: any[];
  
  ngOnInit() {
    this.starRating = Array(parseInt(this.userSearch.StarRating.toString())).fill(0).map((x, i) => i);
    // this.userSearch = { Adults: 1, Children: 0, CheckIn: '2017-10-18', CheckOut: '2017-10-19', City: 'Sydney', CountryCode: 'AU' };
    this._searchService.getHotelByHotelIdFromApi(this.userSearch, this.userSearch.HotelId)
    //this._searchService.getHotelByHotelIdFromApi(this.userSearch, 1011550)
    .subscribe(hotelDetail => {
      this.hotel = hotelDetail;
      this.images = hotelDetail.Images.Image;
      this.options = hotelDetail.Options.Option;
      console.log(this.options);
    },
    err => {
      console.log(err);
    });
  
    // Read Values from Search Component
  }

  book() {
    console.log(this.options.filter(x => x.Checked == true));
  }

  roomSelect(option) {
      this.selectedOption = option;
  }
}