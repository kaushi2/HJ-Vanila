import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { AboutComponent } from "../about/about.component";
import { HotelDetailComponent } from "../hotel-detail/hotel-detail.component";
import { HomeComponent } from "../home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Search/:CountryCode/:City',
    component: SearchComponent
  },
  {
    path: 'Search/:CountryCode/:City/:Page',
    component: SearchComponent
  },
  {
    path: 'Search/:CountryCode/:City/:Page/:CheckInDate/:CheckOutDate/:NumOfAdults/:NumOfChildren',
    component: SearchComponent
  },
  {
    path: 'Hotel/:HotelId',
    component: HotelDetailComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
