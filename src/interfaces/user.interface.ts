import { Document } from "mongoose";

export class IUser extends Document{
    id: number;
    name: string;
    lastname: string;
    email: string;
    password: string;
}
