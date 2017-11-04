import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/search-service.service';
import { dateFormat } from 'dateFormat';
import { CompleterService, CompleterData, RemoteData } from 'ng2-completer';
import { City } from '../model/City';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  SearchValue: string;
  CheckInDate: string;
  CheckOutDate: string;
  NumOfAdults: number;
  NumOfChildren: number = 0;
  Child1Age: number;
  Child2Age: number;
  Child3Age: number;

  protected searchStr: string;
  protected dataService: CompleterData;
  private HotelsDbUrl = 'http://132.148.134.86:3000/Hotels/getAllCities/'; // Change
  
  constructor(private router: Router, private completerService: CompleterService, private _searchService: SearchService) {
      this.dataService = completerService.remote(this.HotelsDbUrl, 'cities', 'cities');
  }

  ngOnInit() {}

  public Search_Click() {
    console.log(this.SearchValue)
    var split = this.SearchValue.split(",");
    // this.CheckInDate = dateFormat(this.CheckInDate, 'yyyy-mm-dd');
    // this.CheckOutDate = dateFormat(this.CheckOutDate, 'yyyy-mm-dd');
    this.router.navigateByUrl('/Search/' + split[1].trim() + "/" + split[0].trim() + "/1" + "/" + this.CheckInDate + "/" + this.CheckOutDate + "/" + this.NumOfAdults + "/" + this.NumOfChildren + "/results=true");
  } 
  
}
