import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "./class/user";
import {urlServer} from "../global_constants";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  pathApi:string="/v1/user";
  pathLogin:string="/login"
  urlUser: string =urlServer.concat(this.pathApi);
  urlRequestLogin: string =this.urlUser.concat(this.pathLogin);
  token:any;
  loginRequest:any;
  registerRequest:any;
  loginSubject:Subject<any>;
  registerSubject:Subject<any>;
  profilSubject:Subject<any>;
  userSubject:Subject<any>;
  passSubject:Subject<any>;

  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );
  constructor(private  httpClient: HttpClient) {
    this.loginSubject=new Subject();
    this.registerSubject=new Subject();
    this.userSubject=new Subject();
    this.passSubject=new Subject();
    this.profilSubject=new Subject();


  }

  log_user() {
    this.loginSubject = new Subject();
    const body = {
      email: this.loginRequest.email,
      password:this.loginRequest.password
    };
    console.error(body)
    this.httpClient.post("http://localhost:9999/api/v1/user/login",  body)
      .subscribe((response: any) => {
        this.loginSubject.next(response);
        this.loginSubject.complete();
      }
    );
  }
  save_user() {
    this.registerSubject = new Subject();
    const body = {
      email: this.registerRequest.email,
      password:this.registerRequest.password,
      fullName:this.registerRequest.fullName,
      phone:this.registerRequest.phone
    };
    console.error(body);
    this.httpClient.post("http://localhost:9999/api/v1/user/register",  body)
      .subscribe((response: any) => {
          this.registerSubject.next(response);
          this.registerSubject.complete();
        }
      );
  }
}
