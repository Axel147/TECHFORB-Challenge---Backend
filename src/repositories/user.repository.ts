import { User } from "../models/user.model";
import { pool } from "../config/db"

export class UserRepository {

    findUsers = async () => {
        const res = await pool.query(`SELECT * FROM "challenge"."user"`);
        return res.rows;
    };

    createUser = async (user: User) => {
        console.log("entro al repository", user.id, user.name, user.lastname, user.email, user.password)
        const res = await pool.query(
            'INSERT INTO "challenge"."user" (name, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
            [user.name, user.lastname, user.email, user.password]
        );
    
        return res.rows[0];
    };

    /*
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
*/
}
