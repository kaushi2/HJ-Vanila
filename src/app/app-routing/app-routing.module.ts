import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { AboutComponent } from "../about/about.component";
import { HotelDetailComponent } from "../hotel-detail/hotel-detail.component";
import { HomeComponent } from "../home/home.component";
import { HotelBookingComponent } from '../hotel-booking/hotel-booking.component';
import { HotelPoliciesComponent } from '../hotel-policies/hotel-policies.component';

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
    path: 'Search/:CountryCode/:City/:Page/:CheckInDate/:CheckOutDate/:NumOfAdults/:NumOfChildren/:results',
    component: SearchComponent
  },
  {
    path: 'Search/:CountryCode/:City/:Page/:CheckInDate/:CheckOutDate/:NumOfAdults/:NumOfChildren/:HotelId',
    component: HotelDetailComponent
  },
  {
    path: 'Hotel/:HotelId',
    component: HotelDetailComponent
  },
  {
    path: 'Hotel/:CountryCode/:City/:CheckInDate/:CheckOutDate/:NumOfAdults/:NumOfChildren/:HotelId',
    component: HotelDetailComponent
  },
  {
    path: 'HotelPolicy/:OptionId/:RoomId',
    component: HotelPoliciesComponent
  },
  {
    path: 'HotelBooking/:OptionId/:RoomId',
    component: HotelBookingComponent
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
