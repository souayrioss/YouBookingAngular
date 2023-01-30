import {Role} from "./role";

export class User {
  id!:number;
  uuid!:string;
  fullName!:string;
  email!:string;
  password!:string;
  phone!:string;
  role!:Role;

}
