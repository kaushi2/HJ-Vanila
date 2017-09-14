import { Component, OnInit, EventEmitter, Output, Input, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Input() name:string;
  @Output() SearchClick = new EventEmitter<any>();
  public SearchValue: string;
  constructor() { }

  ngOnInit() {
  }

  public UserClick() {
    console.log(this.SearchValue);
    
    this.SearchClick.emit({CountryCode:'dfds', City:'dfdf', Page:'dfdf'});
  }
  
}
