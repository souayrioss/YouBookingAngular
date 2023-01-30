import { Component, OnInit } from '@angular/core';
import {DtoResponse} from "../../../rest_services/dto/dto-response";
import {Hotel} from "../../../rest_services/models/hotel";
import {UserService} from "../../../rest_services/user.service";
import {User} from "../../../rest_services/models/user";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  public users!:User[];
  public user!:User;

  constructor(public userService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  public getUsers(){
    this.userService.getUsers().subscribe(
      (response:DtoResponse<Set<User>>)=>{
        this.users = Array.from(response.data);
        console.log(this.users)
      }
    );
  }

  bannerUser(uuid:string){
    console.log("test")
    this.userService.bannerUser(uuid);
    this.reloadPage();
  }
  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }

}
