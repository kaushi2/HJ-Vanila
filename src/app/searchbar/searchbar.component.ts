import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/search-service.service';
import { dateFormat } from 'dateFormat';

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
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  public Search_Click() {
    var split = this.SearchValue.split(",");
    // this.CheckInDate = dateFormat(this.CheckInDate, 'yyyy-mm-dd');
    // this.CheckOutDate = dateFormat(this.CheckOutDate, 'yyyy-mm-dd');
    console.log(this.NumOfChildren);
    this.router.navigateByUrl('/Search/' + split[1].trim() + "/" + split[0].trim() + "/1" + "/" + this.CheckInDate + "/" + this.CheckOutDate + "/" + this.NumOfAdults + "/" + this.NumOfChildren);
  } 
  
}
