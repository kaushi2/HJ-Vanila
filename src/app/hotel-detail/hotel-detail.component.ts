import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../services/search-service.service';
import { Hotel } from '../model/hotel';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  constructor(private _searchService: SearchService) { }

  @Input() userSearch: Hotel;
  hotel: Hotel;
  
  ngOnInit() {
    console.log(this.userSearch);
    this._searchService.getHotelByHotelIdFromApi(this.userSearch.HotelId)
    .subscribe(hotelDetail => {
      console.log(hotelDetail);
      this.hotel = hotelDetail;
    },
    err => {
      console.log(err);
    });
  
    // Read Values from Search Component
  }
}