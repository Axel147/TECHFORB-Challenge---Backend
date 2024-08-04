import { Model } from "mongoose";
import { IUser } from"../interfaces/user.interface";

export class UserRepository{
    constructor(private readonly userModel: Model<IUser>){}

    async create(user: IUser): Promise<IUser>{
        const resultado = this.userModel.create(user);
        console.log(resultado);
        return resultado;
    }

    async findAll(): Promise<IUser[]>{
        const resultado = this.userModel.find();
        //console.log(resultado);
        return resultado;

    }

}
