import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { AboutComponent } from "../about/about.component";
import { HotelDetailComponent } from "../hotel-detail/hotel-detail.component";

const routes: Routes = [
  {
    path: 'Search/:City',
    component: SearchComponent
  },
  {
    path: 'Search/:City/:Page',
    component: SearchComponent
  },
  {
    path: 'hotel/:hotelId',
    component: HotelDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
