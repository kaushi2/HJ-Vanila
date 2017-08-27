import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { SearchComponent } from '../search/search.component';
// import { CommentComponent } from './components/index';

import { SearchService } from '../services/search-service.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,

  ],
  declarations: [
    SearchComponent
  ],

  providers: [
    SearchService
  ],

  exports:[
    SearchComponent
  ]

})
export class SearchModule {
}