import { User } from "../models/user.model";
import { pool } from "../config/db";

export class UserRepository {

    findUsers = async () => {
        try{
            const res = await pool.query(`SELECT * FROM "challenge"."user"`);
            return res.rows;
        } catch (error) {
            return error;
        }
    };

    findUserByEmail = async (email: String) => {
        try{
            const user = await pool.query(`SELECT * FROM "challenge"."user" WHERE email = $1`, [email]);
            if(user.rows.length === 1)
                return user.rows[0];
            else
                return false;
        } catch (error) {
            return error;
        }
    };

    createUser = async (user: User) => {
        try{
            const res = await pool.query(
            'INSERT INTO "challenge"."user" (name, lastname, email, password) VALUES ($1, $2, $3, $4)',
            [user.name, user.lastname, user.email, user.password]);
            return res.rows[0];
        } catch (error) {
            return error;
        }
    };
    
}
