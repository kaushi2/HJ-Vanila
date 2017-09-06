import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";

// import { EmitterService } from "./services/emitter.service";
import { AboutComponent } from './about/about.component';
import { SearchModule } from "./search/search.module";
import { SearchService } from "./services/search-service.service";
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HotelDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
