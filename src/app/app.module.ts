import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";

// import { EmitterService } from "./services/emitter.service";
// import { CommonService } from './services/common.service';
import { AboutComponent } from './about/about.component';
import { SearchService } from "./services/search-service.service";
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HomeComponent } from './home/home.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SearchComponent } from './search/search.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { HotelPoliciesComponent } from './hotel-policies/hotel-policies.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HotelDetailComponent,
    HomeComponent,
    SearchComponent,
    SearchbarComponent,
    HotelBookingComponent,
    HotelPoliciesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
