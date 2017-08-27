import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Hotel } from "../model/hotel";
import { Observable } from "rxjs/Rx";

@Injectable()
export class SearchService {
  // Resolve HTTP using the constructor
  constructor(private http: Http) { }
  // private instance variable to hold base url
  private HotelsAPIUrl = 'http://localhost:3000/Hotels/Sydney';

  getHotels() : Observable<Hotel[]> {
    // ....using get Request
    return this.http.get(this.HotelsAPIUrl)
      // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      // ...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));

  }

}
