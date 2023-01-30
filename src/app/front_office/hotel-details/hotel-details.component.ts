import { Component, OnInit } from '@angular/core';
import {HotelService} from "../../rest_services/hotel.service";
import {ActivatedRoute} from "@angular/router";
import {DtoResponse} from "../../rest_services/dto/dto-response";
import {Hotel} from "../../rest_services/models/hotel";
import {Room} from "../../rest_services/models/room";
import {RoomType} from "../../rest_services/models/room-type";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
 private idHotel:any;
 public hotel!:Hotel;
 public typeRoom:Array<RoomType> =[];
 public countRoom:Array<Array<number>> =[[]];
 public rooms!:Room[];
  constructor(private route:ActivatedRoute, private hotelService:HotelService)
  {
    this.idHotel=this.route.snapshot.paramMap.get("id")
  }

  ngOnInit(): void {
    this.getHotel();

  }
  public getHotel(){
    let typeRoom:Array<RoomType>=[];
    this.hotelService.getHotel(this.idHotel).subscribe(
      (response:DtoResponse<Hotel>)=>{
        this.hotel = response.data;
        this.rooms=this.hotel.rooms;
        this.rooms.forEach(function (room) {
          if(!typeRoom.includes(room.roomType)){
            typeRoom.push(room.roomType)
          }
        })
        this.countRoom = [[1,2,3,4],[1,2],[1,2,3,45,6]];
        this.typeRoom.push(...typeRoom);
      }
    );
  }

}
