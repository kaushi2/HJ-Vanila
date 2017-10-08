import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Hotel } from "../model/hotel";
import { Observable } from "rxjs/Rx";
import { HotelPolicy } from '../model/Policy';
import { Option } from '../model/Option';

@Injectable()
export class SearchService {
  // Resolve HTTP using the constructor
  constructor(private http: Http) { }
  // private instance variable to hold base url
  private HotelsAPIUrl = 'http://132.148.134.86:3000/api/'; // Change
  private HotelsDbUrl = 'http://132.148.134.86:3000/Hotels/'; // Change
  
  getHotelsByCityIdFromDb(CountryCode: string, City: string, Page: number) : Observable<Hotel[]> {
    // ....using get Request
    return this.http.get(this.HotelsDbUrl + CountryCode + "/" + City + "/" + Page)
      // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      // ...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));

  }
  getHotelsByCityIdFromApi(CountryCode: string, City: string, Page: number, CheckInDate: Date, CheckOutDate: Date, NumOfAdults: number, NumOfChildren: number) : Observable<Hotel> {
    // ....using get Request
    return this.http.get(this.HotelsAPIUrl + CountryCode + "/" + City + "/" + Page + "/" + CheckInDate + "/" + CheckOutDate + "/" + NumOfAdults + "/" + NumOfChildren)
      // ...and calling .json() on the response to return data
      .map((res:Response) => res.json())
      // ...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));

  }
  getHotelByHotelIdFromApi(userSearch: Hotel, HotelId: number): Observable<Hotel> {
    // ....using get Request
    return this.http.get(this.HotelsAPIUrl + userSearch.CountryCode + "/" + userSearch.City + "/1/" + 
                          userSearch.CheckIn + "/" + userSearch.CheckOut + "/" + 
                          userSearch.Adults + "/" + userSearch.Children + "/" + HotelId)
    // ...and calling .json() on the response to return data
    .map((res:Response) => res.json())
    // ...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));

  }
  getHotelsByHotelIdsFromApi(HotelIds: number[]): Observable<Hotel[]> {
    // ....using get Request
    return this.http.get(this.HotelsAPIUrl + HotelIds)
    // ...and calling .json() on the response to return data
    .map((res:Response) => res.json())
    // ...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));

  }
  getHotelPolicyByOptionIdFromApi(OptionId: Option): Observable<HotelPolicy> {
    // ....using get Request
    return this.http.get(this.HotelsAPIUrl + "HotelPolicy/" + OptionId)
    // ...and calling .json() on the response to return data
    .map((res:Response) => res.json())
    // ...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));

  }
}
