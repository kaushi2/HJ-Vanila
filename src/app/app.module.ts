import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing/app-routing.module";

// import { EmitterService } from "./services/emitter.service";
import { AboutComponent } from './about/about.component';
import { SearchModule } from "./search/search.module";
import { SearchService } from "./services/search-service.service";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
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
