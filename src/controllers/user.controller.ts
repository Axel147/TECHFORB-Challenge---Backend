import { Request, Response } from "express";
import { User } from "../models/user.model";
import { UserRepository } from "../repositories/user.repository";
const bcrypt = require('bcrypt');

export class UserController{
    static getAll = async (req: Request, res: Response) => {
        const userRepository = new UserRepository();
        try {
            const user = await userRepository.findUsers();
            res.status(200).json(user)
        } catch(error) {
            res.status(500).json({ error });
        }
    }

    static createUser = async (req: Request, res: Response) => {
        const { name, lastname, email, password } = req.body;
        const userRepository = new UserRepository();
        const user = new User;
        try {
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);
            try {
                const hashedPassword = await bcrypt.hash(password, salt);
                try {
                    user.name = name,
                    user.lastname = lastname,
                    user.email = email,
                    user.password = hashedPassword,
                    await userRepository.createUser(user);
                    return res.status(201).json({message: "User created"});
                } catch (error){
                    return res.status(500).json(error);
                }
            } catch (error) {
                return res.status(500).json(error)
            }
        } catch (error) {
            return res.status(500).json(error)
        }
    };

}