import { IUser } from "../interfaces/user.interface";

export class User implements IUser{
    id;
    name;
    lastname;
    email;
    password;

    constructor(){
        this.id = 0,
        this.name = "",
        this.lastname = "",
        this.email = "",
        this.password = ""
    }
}