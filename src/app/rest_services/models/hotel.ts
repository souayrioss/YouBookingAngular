import {Room} from "./room";
import {User} from "./user";
import {StatusOffer} from "./status-offer";
import {Address} from "./address";

export class Hotel {
  private _id!:number;
  private _name!:String;
  private _address!:Address;
  private _description!:String;
  private _statusOffer!:StatusOffer ;
  private _rooms!:Room[];
  private _userApp!:User;
  private _available!:boolean;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get address(): Address {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
  }

  get description(): String {
    return this._description;
  }

  set description(value: String) {
    this._description = value;
  }

  get statusOffer(): StatusOffer {
    return this._statusOffer;
  }

  set statusOffer(value: StatusOffer) {
    this._statusOffer = value;
  }

  get rooms(): Room[] {
    return this._rooms;
  }

  set rooms(value: Room[]) {
    this._rooms = value;
  }

  get userApp(): User {
    return this._userApp;
  }

  set userApp(value: User) {
    this._userApp = value;
  }

  get available(): boolean {
    return this._available;
  }

  set available(value: boolean) {
    this._available = value;
  }
}
