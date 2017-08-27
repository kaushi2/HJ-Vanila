import { Component } from '@angular/core';
import { Common } from "./model/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  // // Load Countries into Memory
  // public Countries = Common.getJSON(Common.COUNTRYAPIURL, function(err, data) {
  //   if (err != null) {
  //     //alert('Something went wrong: ' + err);
  //     console.log('Something went wrong: ' + err);
  //   } else {
  //     //alert('Your query count: ' + data.query.count);
  //     return data;
  //   }
  // });

  // // Load Cities into Memory
  // public Cities = Common.getJSON(Common.CITYAPIURL, function(err, data) {
  //   if (err != null) {
  //     //alert('Something went wrong: ' + err);
  //     console.log('Something went wrong: ' + err);
  //   } else {
  //     //alert('Your query count: ' + data.query.count);
  //     return data;
  //   }
  // });


}

