import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from "../search/search.component";
import { AboutComponent } from "../about/about.component";

const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent
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
