import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Hotel} from "./models/hotel";
import {DtoResponse} from "./dto/dto-response";
import {StatusOffer} from "./models/status-offer";

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  public stOf!:string;

  constructor(private httpClient: HttpClient) { }
  getHotels(status:string):Observable<DtoResponse<Hotel[]>>{
    return this.httpClient.get<DtoResponse<Hotel[]>>("http://localhost:9999/api/v1/hotel/hotels/"+status);
  }
  getHotel(id:number):Observable<DtoResponse<Hotel>>{
    return this.httpClient.get<DtoResponse<Hotel>>("http://localhost:9999/api/v1/hotel/"+id);
  }
  ApproveOrRefuse(hotel:Hotel):Observable<DtoResponse<Hotel>>{
    if (hotel.statusOffer==StatusOffer.ACCEPTED) this.stOf = 'ACCEPTED';
    else this.stOf = 'REFUSED';
    const body = {
      id: hotel.id,
      statusOffer:this.stOf,
    };
    return this.httpClient.post<DtoResponse<Hotel>>("http://localhost:9999/api/v1/hotel/AppOrRef",body);
  }
}
