import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HotelService} from "../../rest_services/hotel.service";
import {Hotel} from "../../rest_services/models/hotel";
import {Room} from "../../rest_services/models/room";
import {DtoResponse} from "../../rest_services/dto/dto-response";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public hotels!:Hotel[];
  public status!:string;
  constructor(private hotelService:HotelService) { }

  ngOnInit(): void {
    this.getAllHotels();
  }
  public getAllHotels(){
    this.status ="ACCEPTED";
    this.hotelService.getHotels(this.status).subscribe(
      (response:DtoResponse<Hotel[]>)=>{
        this.hotels = response.data;
        console.log(this.hotels)
      }
    );
  }

}
