import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Hotel } from "../model/hotel";
import { Observable } from "rxjs/Rx";
import { HotelPolicy } from '../model/Policy';
import { Option } from '../model/Option';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HotelBookingPersonalDetails } from '../model/HotelBookingPersonalDetails';
import { HotelBooking } from '../model/HotelBooking';
import { City } from '../model/City';

@Injectable()
export class SearchService {
  // Resolve HTTP using the constructor
  constructor(private http: Http) { }
  // private instance variable to hold base url
  private HotelsAPIUrl = 'http://132.148.134.86:3000/api/'; // Change
  private HotelsDbUrl = 'http://132.148.134.86:3000/Hotels/'; // Change
  
  getHotelsByCityIdFromDb(CountryCode: string, City: string, Page: number) : Observable<Hotel[]> {
    return this.http.get(this.HotelsDbUrl + CountryCode + "/" + City + "/" + Page)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }
  getHotelsByCityIdFromApi(CountryCode: string, City: string, Page: number, CheckInDate: Date, CheckOutDate: Date, NumOfAdults: number, NumOfChildren: number) : Observable<Hotel> {
    return this.http.get(this.HotelsAPIUrl + CountryCode + "/" + City + "/" + Page + "/" + CheckInDate + "/" + CheckOutDate + "/" + NumOfAdults + "/" + NumOfChildren)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }
  getHotelByHotelIdFromApi(userSearch: Hotel, HotelId: number): Observable<Hotel> {
    console.log(this.HotelsAPIUrl + userSearch.CountryCode + "/" + userSearch.City + "/1/" + 
                userSearch.CheckIn + "/" + userSearch.CheckOut + "/" + 
                userSearch.Adults + "/" + userSearch.Children + "/" + HotelId);
    return this.http.get(this.HotelsAPIUrl + userSearch.CountryCode + "/" + userSearch.City + "/1/" + 
                          userSearch.CheckIn + "/" + userSearch.CheckOut + "/" + 
                          userSearch.Adults + "/" + userSearch.Children + "/" + HotelId)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }
  getHotelsByHotelIdsFromApi(HotelIds: number[]): Observable<Hotel[]> {
    return this.http.get(this.HotelsAPIUrl + HotelIds)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }
  getHotelPolicyByOptionIdFromApi(OptionId: string): Observable<HotelPolicy> {
    return this.http.get(this.HotelsAPIUrl + "HotelPolicy/" + OptionId)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }
  makeHotelBookingByOptionIdRoomIdFromApi(OptionId: string, RoomId: string, body: HotelBookingPersonalDetails): Observable<HotelBooking> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option
    
    return this.http.post(this.HotelsAPIUrl + "HotelBooking/" + OptionId + "/" + RoomId, bodyString, options)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }
  getAllCitiesFromDb() : Observable<City[]> {
    return this.http.get(this.HotelsDbUrl + "getAllCities")
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }
  
}
