import {Hotel} from "./hotel";
import {Reservation} from "./reservation";
import {RoomType} from "./room-type";

export class Room {
  id!:number;
  number!:number;
  roomType!:RoomType;
  price!:number;
  description!:String;
  hotel!:Hotel;
  reservations!:Reservation[];
}
