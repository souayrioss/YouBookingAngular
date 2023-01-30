import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../../rest_services/models/hotel";
import {HotelService} from "../../../rest_services/hotel.service";
import {DtoResponse} from "../../../rest_services/dto/dto-response";
import {StatusOffer} from "../../../rest_services/models/status-offer";

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent implements OnInit {

  public hotels!:Hotel[];
  public hotel:Hotel=new Hotel();
  public status!:string;
  constructor(private hotelService:HotelService) { }

  ngOnInit(): void {
    this.getAllHotels();
  }
  public getAllHotels(){
    this.status = "PENDING";
    this.hotelService.getHotels(this.status).subscribe(
      (response:DtoResponse<Hotel[]>)=>{
        this.hotels = response.data;
        console.log(this.hotels)
      }
    );
  }
  approveHotel(id:number){
    this.hotel.id=id;
    this.hotel.statusOffer=StatusOffer.ACCEPTED;
    console.log(this.hotel);
    this.hotelService.ApproveOrRefuse(this.hotel).subscribe((response:DtoResponse<Hotel>)=>{
        this.hotel = response.data;
        console.log(this.hotels)
      }
    );
    this.reloadPage();
  }
  rejectedHotel(id:number){
    this.hotel.id=id;
    this.hotel.statusOffer=StatusOffer.REFUSED;
    console.log(this.hotel);
    this.hotelService.ApproveOrRefuse(this.hotel).subscribe((response:DtoResponse<Hotel>)=>{
        this.hotel = response.data;
        console.log(this.hotels)
      }
    );
    this.reloadPage();
  }
  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }

}
